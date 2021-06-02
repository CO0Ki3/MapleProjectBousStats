import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import SelectTemp from "./SelectTemp";
import Step from "../ArrayList/StepList";
import { SelectBoxStyle, Main } from "./SelectStyle";
import { useStore } from '../hook';
import DeleteIcon from '@material-ui/icons/Delete';

function SelectBox(props) {
  const [selectValues, setSelectValues] = useState([]);
  const [options, setOptions] = useState([]);

  const [store, setStore] = useStore('box');

  useEffect(() => {
    const selectOptionValues = selectValues.map(
      (selectValue) => selectValue.option.value
    );
    setOptions(
      props.options.filter(
        (option) => !selectOptionValues.includes(option.value)
      )
    );
  }, [selectValues, props.options]);

  const handleChangeOption = (value) => {
    const key = uuidv4();
    const items = {
      key,
      option: value,
      step: { value: "", text: "Select" },
    };
    setSelectValues([...selectValues, items]);
    setStore([...selectValues, items]);
  };

  const handleChangeInnerOptionClosure = (key) => {
    return () => {
      setSelectValues((prev) =>
        prev.map((value) =>
          value.key === key
            ? { key, option: value, step: { value: "", text: "Select" } }
            : value
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
        ),
        setStore(
          store.map((store) =>
            store.key === key
            ? { key, option: store.option, step: value }
            : store
          )
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
          <Main>
            <SelectTemp
              select_option
              lists={options}
              onChange={handleChangeInnerOptionClosure(selectValue.key)}
              value={selectValue.option}
            />
            <SelectTemp
              lists={Step}
              onChange={handleChangeInnerStepClosure(selectValue.key)}
              value={selectValue.step}
            />
            <DeleteIcon onClick={handleDeleteInnerSelectClosure(selectValue.key)} />
          </Main>
        </SelectBoxStyle>
      ))}
      {selectValues.length === 4 || (
        <SelectBoxStyle>
          <Main>
            <SelectTemp
              onChange={handleChangeOption}
              lists={options}
              value={{ value: "", text: "Select" }}
            />
          </Main>
        </SelectBoxStyle>
      )}
    </>
  );
}

export default SelectBox;
