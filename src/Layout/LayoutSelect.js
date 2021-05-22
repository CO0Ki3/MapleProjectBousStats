import SelectDisplay from "../SelectOption/SelectDisplay";
import SelectCompare from "../SelectOption/SelectCompare";
import { SelectBoxStyle } from "../SelectOption/SelectStyle";
import { StoreProvider } from "../hook";

function LayoutSelect() {
  return (
    <main>
      <StoreProvider>
        <SelectBoxStyle>
          <SelectDisplay />
        </SelectBoxStyle>
        <SelectCompare />
      </StoreProvider>
    </main>
  );
}

export default LayoutSelect;
