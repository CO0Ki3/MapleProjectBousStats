import { WeaponListDisplay, AccListDisplay } from './SelectDisplay'

function SelectCompare({value}) {
    if(value === "weapon") {
        return (
            <WeaponListDisplay />
        );
    } else if(value === "acc") {
        return (
            <AccListDisplay />
        );
    } else {
        return ( 
            <></>
         )
    }
}

export default SelectCompare;