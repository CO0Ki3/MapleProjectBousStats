import React, { useContext, useState } from "react";
import { SortContext } from "../SelectOption/SelectListDisplay";
import { ListContext } from "../SelectOption/SelectListDisplay";
import { StepContext } from "../SelectOption/SelectBox";
import { OptionContext } from "../SelectOption/SelectBox";

const Temp = () => {
  const data1 = useContext(ListContext);
  const data2 = useContext(SortContext);
  const data3 = useContext(OptionContext);
  const data4 = useContext(StepContext);

  const [stateData1, setStateData1] = useState();

  if (!!data1 && stateData1 !== data1) {
    setStateData1(data1);
  }

  console.log({ stateData1 });
  console.log({ data2 });
  console.log({ data3 });
  console.log({ data4 });
// 
  return <></>;
};

export default Temp;
