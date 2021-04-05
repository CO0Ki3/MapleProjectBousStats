import { Step } from '../ArrayList/BonusStatsList';

function SelectOption({ lists, onChange }) {

    const handelChangeOption = ({ target: { value } }) => {
        onChange(lists.filter(Option => Option !== value).filter(option => option.value === value)[0]);
    }

    const handleChangeStepOption = ({ target: { value } }) => {
        onChange(Step.filter(Option => Option !== value).filter(option => option.value === value)[0]);
    }

    {
        lists === undefined ||
        console.log(lists)
    }

    return (
        <>
            {lists === undefined ||
                <>
                <select onChange={ handelChangeOption } value={ lists }>
                    {
                        lists.map(option => (
                            <option key={lists.value} value={option.value}>
                                {option.text}
                            </option>
                        ))
                    }
                </select>
                <select onChange={ handleChangeStepOption } value={ Step }>
                    {
                        Step.map(option => (
                            <option key={Step.value} value={option.value}>
                                {option.text}
                            </option>
                        ))
                    }
                </select>
                </>
            }
        </>
    )
}

export default SelectOption;