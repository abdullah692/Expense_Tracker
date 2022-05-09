import { React, useContext, useState } from 'react'
import { TransContext } from './transContext'
function Tracker() {
    let { transaction, addTransaction } = useContext(TransContext);

    const [newDesc, setDesc] = useState('');
    const [newAmount, setAmount] = useState(0);

    const handleAddition = (e) => {
        e.preventDefault();
        console.log(newDesc, newAmount)
        if (Number(newAmount) === 0) {
            alert("Please Enter valid number")
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
        setDesc('');
        setAmount(0);
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0)
                income += transaction[i].amount;

        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0) {
                expense += transaction[i].amount
            }
        }
        return expense;

    }
    return (
        <div className="container">
            <h1 className='heading-tracker'>Expense Tracker</h1>

            <h3 className='bal'>Your Balance <br /> $ {getIncome() + getExpense()}</h3>
            <div className="exp-container">
                <h4>INCOME <br /> $ {getIncome()}</h4>
                <h4>EXPENSE <br /> $ {getExpense()}</h4>
            </div>
            <h3>History</h3>
            <hr />
            <ul className='transaction-list'>
                {
                    transaction.map((trans, index) => {
                        return (
                            <li key={index}>
                                <span>{trans.desc}</span>
                                <span>{trans.amount}</span>
                            </li>

                        )
                    })
                }
            </ul>

            <h3>Add new Transaction</h3>
            <hr />

            <form className='form-transaction' onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type='text' placeholder='Enter Description'
                        required value={newDesc} onChange={(e) => setDesc(e.target.value)}></input>
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type='number' placeholder='Enter Amount'
                        required value={newAmount} onChange={(e) => setAmount(e.target.value)}></input>
                </label>
                <br />
                <input type='submit' value="Add Transaction" />

            </form>



        </div>
    )
}

export default Tracker
