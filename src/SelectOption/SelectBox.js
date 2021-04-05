import styled from 'styled-components';
import SelectOption from './SelectOpiton';

const SelectBoxStyle = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

function SelectBox(props) {

    {
        props.options === undefined ||
        console.log(props.options)
    }

    return (
        <>
            { props.options === undefined || 
                <SelectBoxStyle >
                    <SelectOption lists={ props.options } />
                </SelectBoxStyle>
            }
        </>
    )
}

export default SelectBox;