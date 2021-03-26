function Select({ onChange, options }) {
    return(
        <div>
            <select defaultValue="" onChange={ onChange }>
                {options.map(options => (
                    <option value={ options.value }>{ options.text }</option>
                ))}
            </select>
        </div>
    );
}

export default Select;