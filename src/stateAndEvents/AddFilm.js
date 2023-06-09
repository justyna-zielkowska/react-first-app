import React, { useState } from 'react';

const defaultValues = {
    Title: '',
    Year: '',
  }

const AddFilm = ({onAdd}) => {
    const [fieldsValues, setFieldsValues] = useState(defaultValues)

    const handleChange = (event) => {
      const newValue = {
        ...fieldsValues,
        [event.target.name]: event.target.value,
      };

      setFieldsValues(newValue)
    }

    const handleAdd = (event) => {
      event.preventDefault();
      onAdd(fieldsValues);
      setFieldsValues(defaultValues)
    }

    return (
      <form>
        <h2>Add film</h2>
        <label>Title:</label>
        <input name="Title" value={fieldsValues.Title} onChange={handleChange}/>
        <label>Year:</label>
        <input name="Year" value={fieldsValues.Year} onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
      </form>
    )
  }

  export default AddFilm;