// import { useState, useCallback } from 'react';
// import styled from 'styled-components';
// import { AddOptionAcc, Step } from '../ArrayList/BonusStatsList';
// import Select from './Select';

// const SelectBox = styled.div`
//   border: 1px solid black;
//   margin: 10px;
//   padding: 10px;
// `;

// const Delete = styled.div`
//   color: blue;
//   cursor: pointer;
//   text-decoration: underline;
// `;

// function SelectAcc({ onChange, value }) {

//     const handelChangeOption = ({ target: { value } }) => {
//         onChange(AddOptionAcc.filter(AddOptionAcc => AddOptionAcc !== value).filter(optionAcc => optionAcc.value === value)[0]);
//     }

//     return (
//         <div>
//             <select onChange={ handelChangeOption } value={value}>
//                 {
//                     AddOptionAcc.map(optionAcc => (
//                         <option key={AddOptionAcc.value} value={optionAcc.value}>
//                             {optionAcc.text}
//                         </option>
//                 ))
//                 }
//             </select>
//         </div>
//     )
// }

// const SelectExpendAcc = () => {
//     const [ selectValues, setSelectValues ] = useState([]); //복제 키 state

//     const [ selectStepValues, setSelectStepValues ] = useState([]);

//     const [ isNotVisible, setIsNotVisible ] = useState(false); //선택 안함

//     const makeKey = useCallback(length => {
//         let result = '';
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//         for (let i = 0; i < length; i++ ) {
//             result += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         return result;
//     }, [])

//     const handelChangeOption = value => {
//         const key = makeKey(10);
//         setSelectValues([...selectValues, { ...value, key }]);
//         setIsNotVisible(value.value === "none");
//     }

//     const handleChangeStepValue = step => {
//         const key = makeKey(10);
//         setSelectStepValues([...selectStepValues], { ...step, key });
//     }

//     const handleChangeInnerSelectClosure = key => {
//         return value => {
//             setSelectValues(selectValues.map(selectValue => (
//                 selectValue.key === key ? { key, ...value } : selectValue
//             )));
//         }
//     }

//     const handleChangeInnerStepClosure = key => {
//         return step => {
//             setSelectStepValues(selectStepValues.map(selectStepValue => (
//                 selectStepValue.key === key ? { key, ...step } : selectStepValue
//             )));
//         }
//     }

//     const handleDeleteInnerSelectClosure = key => {

//         return () => {
//             setSelectValues(selectValues.filter(selectValue => selectValue.key !== key));
//         }
//     }

//     return (
//         <>
//             <SelectBox key={selectValue.key}>
//                 {selectValues.map(selectValue => (
//                     <>
//                         <SelectAcc
//                             value={selectValue.value}
//                             AddOptionAcc={AddOptionAcc}
//                             onChange={handleChangeInnerSelectClosure(selectValue.key)}
//                         />
//                         <p>text : { selectValue.text } length : { selectValues.length } Bool : { isNotVisible.toString() }</p>
//                     </>
//                     )
//                 )}
//                 {selectStepValues.map(selectStepValue => (
//                     <>
//                         <Select onChange={ handleChangeStepValue } options={ Step }/>
//                         <p>Step : { selectStepValue }</p>
//                     </>
//                 ))

//                 }
//                 <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>삭제</Delete>
//             </SelectBox>
//             { selectValues.length === 4 || isNotVisible === true || <SelectBox><SelectAcc onChange={handelChangeOption} AddOptionAcc={AddOptionAcc} value='select' /><Select onChange={ handleChangeStepValue } options={ Step }/></SelectBox> }
//         </>
//     )
// }

// export default SelectExpendAcc;

import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { AddOptionAcc, Step } from '../ArrayList/BonusStatsList';
import Select from './Select';

const SelectBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const Delete = styled.div`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
`;

function SelectAcc({onChange, step}) {
    const handleChangeOption = ({ target: { step } }) => {
        onChange(AddOptionAcc.filter(optionAcc => optionAcc.step === step)[0]);  
    }

    return (
        <div>
            <select onChange={ handleChangeOption } value={ step }>
                {
                    AddOptionAcc.map(optionAcc => (
                        <option key={AddOptionAcc.value} value={optionAcc.value}>
                            {optionAcc.text}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

function SelectStep({ onChange, step }) {
    const handleChangeStep = ({ target: { step } }) => {
        onChange(Step.filter(optionStep => optionStep.step === step)[0]);
    }

    return (
        <div>
            <select onChange={ handleChangeStep } value={ step }>
                {
                    Step.map(optionStep => (
                        <option key={Step.step} value={ step }>
                            {optionStep.stext}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

const SelectExpendAcc = () => {
    const [ selectValues, setSelectValues ] = useState([]);

    const [ selectStepTemp, setSelectStepTemp ] = useState([]);

    const [ isVisible, setIsVisible ] = useState(true);

    const makeKey = useCallback(length => {
        let result = '';

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }, []);

    const handleChangeOption = value => {
        const key = makeKey(10);
        setSelectStepTemp([...selectStepTemp, {...value, key}]);
        setSelectValues([...selectValues, ...selectStepTemp,{...value, key}]);
        setIsVisible(value.value !== "none");
    }

    const handleChangeInnerSelectClosure = key => {
        return value => {
            setSelectValues(selectValues.map(selectValue => (
                selectValue.key === key ? { key, ...value } : selectValue
            )));
        }
    }

    const handleDeleteInnerSelectClosure = key => {
        return () => {
            setSelectValues(selectValues.filter(selectValue => selectValue.key !== key));
        }
    }

    return(
        <>
            {
                selectValues.map(selectValue => (
                    <SelectBox key={ selectValue.key }>
                        <SelectAcc 
                            value={ selectValue.value }
                            AddOptionAcc={ AddOptionAcc }
                            onChange={handleChangeInnerSelectClosure(selectValue.key)}
                        />
                        <p>text : { selectValue.text } length : { selectValues.length } Bool : { isVisible.toString() }</p>
                        <SelectStep 
                            value={ selectValue.step }
                            Step={ Step }
                            onChange={ handleChangeInnerSelectClosure(selectValue.key) }
                        />
                        <p>Step : { selectValue.step }</p>
                        <Delete onClick={handleDeleteInnerSelectClosure(selectValue.key)}>삭제</Delete>
                    </SelectBox>
                ))
            }
            { selectValues.length === 4 || isVisible === false || <SelectBox><SelectAcc onChange={handleChangeOption} AddOptionAcc={AddOptionAcc} value='select' /><SelectStep onChange={ handleChangeOption } Step={ Step } value="select" /></SelectBox> }
        </>
    )
}

export default SelectExpendAcc;