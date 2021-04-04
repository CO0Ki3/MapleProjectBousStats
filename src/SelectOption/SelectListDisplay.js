import React, { useState } from 'react';
import Select from './Select';

function SelectListDisplay(props) {
    const [ selectListValue, setSelectListValue ] = useState('');

    const [ selectSortListValue, setSelectSortListValue ] = useState('');

    const handleChangeListValue = ({ target: { value } }) => {
        setSelectListValue(value);
    };

    const handleChangeSortList = ({ target: { value } }) => {
        setSelectSortListValue(value);
    };
    
    console.log(props.options)

    return(
        <div>
            {props.options === undefined || 
                <>
                    <Select onChange={ handleChangeListValue } options={ props.options.displaylist } />
                    <p>Acc : { selectListValue }</p>
                    <Select onChange={ handleChangeSortList } options={ props.options.sort } />
                    <p>Sort : { selectSortListValue }</p>
                </>
            }
            
        </div>
    )
}

export default SelectListDisplay;