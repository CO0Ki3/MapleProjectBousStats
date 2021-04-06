import { Step } from '../ArrayList/BonusStatsList'

function SelectStep({ onChange }) {

    const handleChangeStepOption = ({ target: { value } }) => {
        onChange(Step.filter(Option => Option !== value).filter(option => option.value === value)[0]);
    }

    return (
    <select onChange={ handleChangeStepOption } value={ Step }>
                    {
                        Step.map(option => (
                            <option key={Step.value} value={option.value}>
                                {option.text}
                            </option>
                        ))
                    }
    </select>
    )
}

export default SelectStep;