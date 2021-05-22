import React, { useState } from "react";
import Select from "./Select";
import { ObjectList } from "../ArrayList/ObjectList";
import SelectCompare from "./SelectCompare";

function SelectDisplay() {
  const [selectObjectValue, setselectObjectValue] = useState("");

  const handleChangeObjectValue = ({ target: { value } }) => {
    setselectObjectValue(value);
  };

  return (
    <div>
      <Select onChange={handleChangeObjectValue} options={ObjectList} />
      <SelectCompare value={selectObjectValue} />
    </div>
  );
}

export default SelectDisplay;
