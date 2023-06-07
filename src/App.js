import React, { useState } from 'react';
import './App.css';
import FilmLibrary from './stateAndEvents/FilmsLibrary';


// const FormExample = () => {

//   const [formValue, setFormValue] = useState({

//     firstname: "",
//     surname: ""

//     });


//     const handleChange = (event) => {

//       const newValue = {
//          ... formValue,
//         [event.target.name]: event.target.value
//       }
//         setFormValue(newValue)
//     }

//   return (
//     <div>
//       <form>
//       <label>Name: </label>
//       <input name="firstname" value={formValue.firstname} onChange={handleChange}/>
//       <label>Surname: </label>
//       <input name="surname" value={formValue.surname} onChange={handleChange}/>
//       </form>

//       <p>Name: {formValue.firstname}</p>
//       <p>Surname: {formValue.surname}</p>

//     </div>
//   )
// }

// export default FormExample;


const App = () => {
  return (
    <div className="App">

    
    <FilmLibrary/>
    </div>
  );
}

export default App

