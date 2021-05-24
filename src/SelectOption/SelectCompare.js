import SelectListDisplay from "./SelectListDisplay";
import SelectBox from "./SelectBox";
import {
  WeaponList,
  AccList,
  WeaponSort,
  AccSort,
} from "../ArrayList/ObjectList";
import {
  AddOptionWeapon,
  AddOptionAcc,
} from "../ArrayList/BonusStatsList";
import { Main } from "./SelectStyle";

function SelectCompare({ value }) {
  if(value) {
    return (
      <>
        <Main><SelectListDisplay options={displayLists[value]} /></Main>
        <SelectBox options={boxLists[value]} />
      </>
    );
  } else {
    return (
      <></>
    )
  }
}

const displayLists = {
  weapon: {
    displaylist: WeaponList,
    sort: WeaponSort,
  },
  acc: {
    displaylist: AccList,
    sort: AccSort,
  },
};

const boxLists = {
  weapon: AddOptionWeapon,
  acc: AddOptionAcc,
};

export default SelectCompare;
