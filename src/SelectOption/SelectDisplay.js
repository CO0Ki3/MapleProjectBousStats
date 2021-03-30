import React, { useState } from 'react';
import Select from './Select';
import { ObjectList, WeaponList, AccList, WeaponSort, AccSort } from '../ArrayList/ObjectList';
import SelectCompare from './SelectCompare';
import SelectExpendAcc from './SelectExpendAcc';
import SelectExpendWeapon from './SelectExpendWeapon';

const WeaponListDisplay = () => {
    const [ selectWeaponValue, setSelectWeaponValue ] = useState('');

    const [ selectWeaponSortValue, setSelectWeaponSortValue ] = useState('');

    const handleChangeWeaponValue = ({ target: { value } }) => {
        setSelectWeaponValue(value);
    };

    const handelChangeWeaponSort = ({ target: { value } }) => {
        setSelectWeaponSortValue(value);
    };
    
    return(
        <div>
            <Select onChange={ handleChangeWeaponValue } options={ WeaponList } />
            <p>Weapon : { selectWeaponValue }</p>
            <Select onChange={ handelChangeWeaponSort } options={ WeaponSort } />
            <p>Sort : { selectWeaponSortValue }</p>
            <SelectExpendWeapon />
        </div>
    );
}

const AccListDisplay = () => {
    const [ selectAccValue, setSelectAccValue ] = useState('');

    const [ selectAccSortValue, setSelectAccSortValue ] = useState('');

    const handleChangeAccValue = ({ target: { value } }) => {
        setSelectAccValue(value);
    };

    const handleChangeAccSort = ({ target: { value } }) => {
        setSelectAccSortValue(value);
    };

    return(
        <div>
            <Select onChange={ handleChangeAccValue } options={ AccList } />
            <p>Acc : { selectAccValue }</p>
            <Select onChange={ handleChangeAccSort } options={ AccSort } />
            <p>Sort : { selectAccSortValue }</p>
            <SelectExpendAcc />
        </div>
    )
}

function SelectDisplay() {
    const [ selectObjectValue, setselectObjectValue ] = useState('');
    
    const handleChangeObjectValue = ({ target: { value } }) => {
        setselectObjectValue(value);
    };

    return(
        <div>
            <Select onChange={ handleChangeObjectValue } options={ ObjectList }/>
            <p>Object : { selectObjectValue }</p>
            <SelectCompare value={ selectObjectValue }/>
        </div>
    );
}

export { SelectDisplay, WeaponListDisplay, AccListDisplay };