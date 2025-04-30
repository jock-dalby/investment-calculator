import { INITIAL_INVESTMENT_FIELD_NAME, ANNUAL_INVESTMENT_FIELD_NAME, EXPECTED_RETURN_FIELD_NAME, DURATION_FIELD_NAME } from '../util/fieldNames.js'

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

export default function UserInput ({userInput, onInputChange}) {
    return <section id="user-input">
        {INPUT_GROUPS.map((group, groupIndex) => {
            return <div className="input-group" key={groupIndex}>
                {group.map(({fieldName, label}, fieldIndex) => {
                    return <p key={`${groupIndex}-${fieldIndex}`}>
                    <label>{label}</label>
                    <input type="number" required value={userInput[fieldName]} onChange={e => onInputChange(fieldName, e.target.value)}/>
                </p>
                })}
            </div>
        })}
    </section>
}