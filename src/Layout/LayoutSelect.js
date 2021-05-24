import SelectDisplay from "../SelectOption/SelectDisplay";
import SelectCompare from "../SelectOption/SelectCompare";
import { SelectBoxStyle } from "../SelectOption/SelectStyle";

function LayoutSelect() {
  return (
    <main>
      <>
        <SelectBoxStyle>
          <SelectDisplay />
        </SelectBoxStyle>
        <SelectCompare />
      </>
    </main>
  );
}

export default LayoutSelect;
