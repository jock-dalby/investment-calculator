import {useState} from 'react';

const INPUT_GROUPS = [
    [
        {
            label: 'Initial Investment',
            fieldName: 'initialInvestment'
        },
        {
            label: 'Annual Investment',
            fieldName: 'annualInvestment'
        }
    ],
    [
        {
            label: 'Expected Return',
            fieldName: 'expectedReturn'
        },
        {
            label: 'Initial Investment',
            fieldName: 'duration'
        }
    ]
]

export default function UserInput () {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
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