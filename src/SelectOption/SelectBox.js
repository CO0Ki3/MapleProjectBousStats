import { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SelectTemp from "./SelectTemp";
import Step from "../ArrayList/StepList";
import { SelectBoxStyle } from './SelectStyle'
import LayoutCalc from '../Layout/LayoutCalc';

const Delete = styled.div`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
`;

function SelectBox(props) {
  const [selectValues, setSelectValues] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const selectOptionValues = selectValues.map(
      (selectValue) => selectValue.option.value
    );

    if (
      selectOptionValues.some(
        (v) => ["str", "dex", "int", "luk"].indexOf(v) > -1
      )
    ) {
      setOptions(
        props.options
          .slice(4)
          .filter((option) => !selectOptionValues.includes(option.value))
      );
    } else {
      setOptions(
        props.options.filter(
          (option) => !selectOptionValues.includes(option.value)
        )
      );
    }
  }, [selectValues, props.options]);

  const handleChangeOption = (value) => {
    const key = uuidv4();
    const items = {
      key,
      option: value,
      step: { value: "", text: "Select" },
    };
    setSelectValues([...selectValues, items]);
  };

  const handleChangeInnerOptionClosure = (key) => {
    return (value) => {
      setSelectValues(
        selectValues.map((selectValue) =>
          selectValue.key === key
            ? { key, option: value, step: { value: "", text: "Select" } }
            : selectValue
        )
      );
    };
  };

  const handleChangeInnerStepClosure = (key) => {
    return (value) => {
      setSelectValues(
        selectValues.map((selectValue) =>
          selectValue.key === key
            ? { key, option: selectValue.option, step: value }
            : selectValue
        )
      );
    };
  };

  const handleDeleteInnerSelectClosure = (key) => {
    return () => {
      setSelectValues(
        selectValues.filter((selectValue) => selectValue.key !== key)
      );
    };
  };

  return (
    <>
      {selectValues.map((selectValue) => (
        <SelectBoxStyle key={selectValue.key}>
          <SelectTemp select_option
            lists={options}
            onChange={handleChangeInnerOptionClosure(selectValue.key)}
            value={selectValue.option}
          />
          <p>Value : {selectValue.option.value}</p>
          <SelectTemp
            lists={Step}
            onChange={handleChangeInnerStepClosure(selectValue.key)}
            value={selectValue.step}
          />
          <p>Step : {selectValue.step.text}</p>
          <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>
            삭제
          </Delete>
          <LayoutCalc value={selectValue.step.value} key_={selectValues[0].key}/>
        </SelectBoxStyle>
      ))}
      {selectValues.length === 4 || (
        <SelectBoxStyle>
          <SelectTemp
            onChange={handleChangeOption}
            lists={options}
            value={{ value: "", text: "Select" }}
          />
        </SelectBoxStyle>
      )}
    </>
  );
}

export default SelectBox;
