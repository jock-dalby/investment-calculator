import {useState} from 'react';

const INITIAL_INVESTMENT_FIELD_NAME = 'initialInvestment'
const ANNUAL_INVESTMENT_FIELD_NAME = 'annualInvestment'
const EXPECTED_RETURN_FIELD_NAME = 'expectedReturn'
const DURATION_FIELD_NAME = 'duration'

const INPUT_GROUPS = [
    [
        {
            label: 'Initial Investment',
            fieldName: INITIAL_INVESTMENT_FIELD_NAME
        },
        {
            label: 'Annual Investment',
            fieldName: ANNUAL_INVESTMENT_FIELD_NAME
        }
    ],
    [
        {
            label: 'Expected Return',
            fieldName: EXPECTED_RETURN_FIELD_NAME
        },
        {
            label: 'Duration',
            fieldName: DURATION_FIELD_NAME
        }
    ]
]

export default function UserInput () {
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

    return <section id="user-input">
        {INPUT_GROUPS.map((group, groupIndex) => {
            return <div className="input-group" key={groupIndex}>
                {group.map(({fieldName, label}, fieldIndex) => {
                    return <p key={`${groupIndex}-${fieldIndex}`}>
                    <label>{label}</label>
                    <input type="number" required value={userInput[fieldName]} onChange={e => handleChange(fieldName, e.target.value)}/>
                </p>
                })}
            </div>
        })}
    </section>
}