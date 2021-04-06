import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 }from 'uuid';
import SelectOption from './SelectOpiton';
import SelectStep from './SelectStep';

const SelectBoxStyle = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const Delete = styled.div`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
`;

function SelectBox(props) {

    {
        props.options === undefined ||
        console.log(props.options)
    }

    const [ selectValues, setSelectValues ] = useState([]);

    const [ isVisible, setIsvisible ] = useState(true);

    const handleChangeOption = value => {
        const key = uuidv4();
        setSelectValues([...selectValues, { ...value, key }]);
        setIsvisible(value.value !== "none");
    };

    const handleChangeStep = value => {
        setSelectValues([...selectValues, { ...value }]);
    };

    const handleChangeInnerSelectClosure = key => {

        return value => {
            setSelectValues(selectValues.map(selectValue => (
                selectValue.key === key ? { key, ...value } : selectValue
            )));
        }
    };

    const handleDeleteInnerSelectClosure = key => {

        return() => {
            setSelectValues(selectValues.filter(selectValue => selectValue.key !== key));
        }
    }

    return (
        <>
            { props.options === undefined || selectValues.map(selectValue => (
                <SelectBoxStyle key={ selectValue.key }>
                    <SelectOption />
                    <SelectStep />
                    <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>삭제</Delete>
                </SelectBoxStyle>
            ))
                
            }
        </>
    )
}

export default SelectBox;