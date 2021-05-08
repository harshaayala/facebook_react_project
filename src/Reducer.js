
/*INITIAL STATE OF THE datalayer*/
export const initialState={
    user:null,
};


/*DISPATCHING ACTIONS INTO THE DATA LAYER*/
export const actionTypes={
    SET_USER:"SET_USER",
};

const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:      /*listening to the action*/
            return{
                ...state,
                user:action.user,
            };

            default:
                return state;
    }
};

export default reducer;