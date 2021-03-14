import { createContext, useReducer } from 'react'
import React from 'react'

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state, 
                expenses: [...state.expenses, action.payload]
            }

        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }

        default:
            return state
    }
}
    
const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: "One", cost: 1 },
        { id: 2, name: "Two", cost: 2 },
        { id: 3, name: "Three", cost: 3 },
    ]
}

export const AppContext = createContext();

//useReducer Hook. Returns current state and dispatch to update. 
export const AppProvider = (props) => {
    const[state, dispatch] = useReducer(AppReducer, initialState)
    return (<AppContext.Provider 
        value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}

export default AppContext
