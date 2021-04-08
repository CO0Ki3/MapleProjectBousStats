function SelectOption({ lists, onChange, value }) {

  const handleChangeOption = ({ target: { value } }) => {
    onChange(lists.filter(option => option.value === value)[0]);
  }
  return (
    <>
      {lists === undefined ||
        <select onChange={ handleChangeOption } value = { value }>
          {
            lists.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))
          }
        </select>
      }
    </>
  )
}

export default SelectOption;