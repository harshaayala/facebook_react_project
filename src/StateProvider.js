import React,{createContext,useContext,useReducer} from 'react';

export const StateContext= createContext(); /*preparing a data layer*/


/* WRAP THE APP inside the state provider*/
export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


/*to pull some info from the data layer*/
export const useStateValue=()=> useContext(StateContext);

