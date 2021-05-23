import { useStore } from "../hook";

function Temp() {
  const value = useStore();
  console.log(value);
  return <p>{}</p>;
}

export default Temp;
