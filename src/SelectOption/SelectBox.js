import { useState } from 'react'
import styled from 'styled-components';
import SelectExpend from './SelectExpend';

const SelectBoxStyle = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

function SelectBox(props) {

    // const [ listValue, setListValue ] = useState();

    // const handelChangeListValue = ({ target: value }) => {
    //     onChange(props.options.filter(optionList => optionList.value === value)[0]);
    // }

    return (
        <SelectBoxStyle >
            {/* <SelectExpend /> */}
        </SelectBoxStyle>
    )
}

export default SelectBox;