import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { AddOptionWeapon, AddOptionAcc, Step } from '../ArrayList/BonusStatsList';

const Delete = styled.div`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
`;

function SelectOption({ onChange, value }, props) {

    return (
        <div>
            <select onChange={ handelChangeWeaponOption } value={value} >
                {
                {/*props*/}}.map(optionList => (
                    <option key={{/*props*/}}.value} value={optionList.value}>
                        {optionList.text}
                    </option>
                ))
                }
            </select>
        </div>
    )
}

const SelectExpend = () => {
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
                <div key={selectValue.key}>
                    <SelectOption
                        value={selectValue.value}
                        AddOptionAcc={AddOptionAcc}
                        onChange={handleChangeInnerSelectClosure(selectValue.key)}
                    />
                    <p>text : { selectValue.text } length : { selectValues.length } Bool : { isNotVisible.toString() }</p>
                    <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>삭제</Delete>
                </div>
                )
            )}
            { selectValues.length === 4 || isNotVisible === true || <div><SelectOption onChange={handelChangeOption} AddOptionAcc={AddOptionAcc} value='select' /></div> }
        </>
    )
}

export default SelectExpend;