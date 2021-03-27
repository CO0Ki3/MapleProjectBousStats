import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { AddOptionWeapon, AddOptionAcc } from '../ArrayList/BonusStatsList';

const SelectBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const Delete = styled.div`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
`;

function SelectAcc({ onChange, value }) {

    const handelChangeOption = ({ target: { value } }) => {
        onChange(AddOptionAcc.filter(optionAcc => optionAcc.value === value)[0]);
    }

    return (
        <div>
            <select onChange={ handelChangeOption } value={value}>
                {
                AddOptionAcc.map(optionAcc => (
                    <option key={AddOptionAcc.value} value={optionAcc.value}>
                        {optionAcc.text}
                    </option>
                ))
                }
            </select>
        </div>
    )
}

function SelectWeapon({ onChange, value }) {

    const handelChangeWeaponOption = ({ target: { value } }) => {
        onChange(AddOptionWeapon.filter(optionWeapon => optionWeapon.value === value)[0]);
    }

    return (
        <div>
            <select onChange={ handelChangeWeaponOption } value={value}>
                {
                AddOptionWeapon.map(optionWeapon => (
                    <option key={AddOptionWeapon.value} value={optionWeapon.value}>
                        {optionWeapon.text}
                    </option>
                ))
                }
            </select>
        </div>
    )
}

const SelectExpendAcc = () => {
    const [ selectValues, setSelectValues ] = useState([]); //복제 키 state

    const [ isNotVisible, setIsNotVisible ] = useState(false);

    const makeKey = useCallback(length => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }, [])

    const handelChangeOption = value => {
        const key = makeKey(10);
        setSelectValues([...selectValues, { ...value, key }]);
        setIsNotVisible(value.value === "none");
    }

    const handleChangeInnerSelectClosure = key => {
        return value => {
            setSelectValues(selectValues.map(selectValue => (
                selectValue.key === key ? { key, ...value } : selectValue
            )));
        }
    }

    const handleDeleteInnerSelectClosure = key => {

        return () => {
            setSelectValues(selectValues.filter(selectValue => selectValue.key !== key));
        }
    }

    return (
        <>
            {selectValues.map(selectValue => (
                <SelectBox key={selectValue.key}>
                    <SelectAcc
                        value={selectValue.value}
                        AddOptionAcc={AddOptionAcc}
                        onChange={handleChangeInnerSelectClosure(selectValue.key)}
                    />
                    <p>text : { selectValue.text } length : { selectValues.length } Bool : { isNotVisible.toString() }</p>
                    <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>삭제</Delete>
                </SelectBox>
                )
            )}
            { selectValues.length === 4 || isNotVisible === true || <SelectAcc onChange={handelChangeOption} AddOptionAcc={AddOptionAcc} value='select' /> }
        </>
    )
}

const SelectExpendWeapon = () => {
    const [ selectValues, setSelectValues ] = useState([]); //복제 키 state

    const [ isNotVisible, setIsNotVisible ] = useState(false);

    const makeKey = useCallback(length => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }, [])

    const handelChangeOption = value => {
        console.log(value.value);
        const key = makeKey(10);
        setSelectValues([...selectValues, { ...value, key }]);
        setIsNotVisible(value.value === "none");
    }

    const handleChangeInnerSelectClosure = key => {
        return value => {
            
            setSelectValues(selectValues.map(selectValue => (
                selectValue.key === key ? { key, ...value } : selectValue
            )));
        }
    }

    const handleDeleteInnerSelectClosure = key => {

        return () => {
            setSelectValues(selectValues.filter(selectValue => selectValue.key !== key));
        }
    }

    return (
        <>
            {selectValues.map(selectValue => (
                <SelectBox key={selectValue.key}>
                    <SelectWeapon
                        value={selectValue.value}
                        AddOptionAcc={AddOptionAcc}
                        onChange={handleChangeInnerSelectClosure(selectValue.key)}
                    />
                    <p>text : { selectValue.text } length : { selectValues.length } Bool : { isNotVisible.toString() }</p>
                    <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>삭제</Delete>
                </SelectBox>
                )
            )}
            { selectValues.length === 4 || isNotVisible === true || <SelectWeapon onChange={handelChangeOption} AddOptionAcc={AddOptionAcc} value='select' /> }
        </>
    )
}

export { SelectExpendAcc, SelectExpendWeapon };