import {useState} from 'react';
import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';

import { INITIAL_INVESTMENT_FIELD_NAME, ANNUAL_INVESTMENT_FIELD_NAME, EXPECTED_RETURN_FIELD_NAME, DURATION_FIELD_NAME } from './util/fieldNames.js'

function App() {
  const [userInput, setUserInput] = useState({
    [INITIAL_INVESTMENT_FIELD_NAME]: 10000,
    [ANNUAL_INVESTMENT_FIELD_NAME]: 1200,
    [EXPECTED_RETURN_FIELD_NAME]: 6,
    [DURATION_FIELD_NAME]: 10
  });

  function handleChange(fieldName, newValue) {
    setUserInput(prev => {
        return {
            ...prev,
            [fieldName]: newValue
        }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleChange}/>
      <Results userInput={userInput}/>
    </>
  )
}

export default App
