import { EternalPercent, PowerfulPercent } from "../ArrayList/StepPerList";

function Temp({ value, num }) {

  const tempValue = value;

  const tempKey = num;

  if (parseInt(value, 10) === 7) {
    return tempValue;
  } else if (parseInt(value, 10) === 3) {
    return tempValue;
  } else if (value === "") {
    return <></>;
  } else {
    return tempValue;
  }
}

export default Temp;
