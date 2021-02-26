import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State or Sample of List
const initialState = {
    users: []
};
// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    //---> To remove data
    const deleteData =(id) => {
        dispatch({
            type: 'REMOVE_DATA',
            payload: id
        })
    }
    //---> 
    const addData =(data) => {
        dispatch({
            type: 'ADD_DATA',
            payload: data
        })
    }
    const editUser =(data) => {
        dispatch({
            type: 'EDIT_DATA',
            payload: data
        })
    }
    return(
        <GlobalContext.Provider value ={{
            users: state.users,
            deleteData,
            addData,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
};