import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { AddOptionWeapon, AddOptionAcc, Step } from '../ArrayList/BonusStatsList';
import Select from './Select';

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

const SelectExpendWeapon = () => {
    const [ selectValues, setSelectValues ] = useState([]); //복제 키 state

    const [ selectStepValue, setSelectStepValue ] = useState('');

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

    const handleChangeStepValue = ({ target: { value } }) => {
        setSelectStepValue(value);
    };


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
                    <Select onChange={ handleChangeStepValue } options={ Step }/>
                    <p>Step : { selectStepValue }</p>
                    <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>삭제</Delete>
                </SelectBox>
                )
            )}
            { selectValues.length === 4 || isNotVisible === true || <SelectBox><SelectWeapon onChange={handelChangeOption} AddOptionAcc={AddOptionAcc} value='select' /><Select onChange={ handleChangeStepValue } options={ Step }/></SelectBox> }
        </>
    )
}

export default SelectExpendWeapon;