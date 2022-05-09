import { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";
const InitTransaction = [
    { amount: 400, desc: 'Cash' },
    { amount: -40, desc: 'Book' },
    { amount: -200, desc: 'Camera' },
   
]

export const TransContext = createContext(InitTransaction)

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, InitTransaction)

    function addTransaction(transObj) {
        dispatch({
            type: 'ADD_Transaction',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return (

        <TransContext.Provider value={{
            transaction: state,
            addTransaction
        }}>
            {children}
        </TransContext.Provider>
    );

}