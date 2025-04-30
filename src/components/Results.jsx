import {calculateInvestmentResults, formatter } from '../util/investment.js';
import {INITIAL_INVESTMENT_FIELD_NAME } from '../util/fieldNames.js';

export default function Results({userInput} ) {
    const results = calculateInvestmentResults(userInput)
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {results.map(({ annualInvestment, interest, valueEndOfYear, year}, idx) => {
                const totalInterest = valueEndOfYear - (annualInvestment * year) - userInput[INITIAL_INVESTMENT_FIELD_NAME]
                return <tr key={year}>
                    <td>{year}</td>
                    <td>{formatter.format(valueEndOfYear)}</td>
                    <td>{formatter.format(interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
                </tr>
            })}
        </tbody>
    </table>
}