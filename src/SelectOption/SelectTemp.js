import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core';

const nativeSelectStyles = makeStyles({
  root: {
    "&.MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "&.MuiInput-underline:after": {
      borderBottomColor: "#E1831D",
    },
    "&.MuiInputBase-root": {
      color: "white",
      // marginLeft: "15px",
      // marginRight: "15px",
    },
  }
})

function SelectTemp({ lists, onChange, value }) {
  const handleChangeOption = ({ target: { value } }) => {
    onChange(lists.filter((option) => option.value === value)[0]);
  };

  
  const classes = nativeSelectStyles();

  return (
    <>
      {lists === undefined || (
        <NativeSelect onChange={handleChangeOption} value={value.value} className={classes.root}>
          <option disabled value="">
            Select
          </option>
          {value.value && <option value={value.value}>{value.text}</option>}
          {lists.filter((option) => option.value !== value.value).map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
        </NativeSelect>
      )}
    </>
  );
}

export default SelectTemp;
