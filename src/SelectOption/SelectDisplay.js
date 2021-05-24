import React, { useState } from "react";
import Select from "./Select";
import { ObjectList } from "../ArrayList/ObjectList";
import SelectCompare from "./SelectCompare";
import { Main } from "./SelectStyle";

function SelectDisplay() {
  const [selectObjectValue, setselectObjectValue] = useState("");

  const handleChangeObjectValue = ({ target: { value } }) => {
    setselectObjectValue(value);
  };

  return (
    <>
      <Main>
        <Select onChange={handleChangeObjectValue} options={ObjectList} />
      </Main>
      <SelectCompare value={selectObjectValue} />
    </>
  );
}

export default SelectDisplay;
