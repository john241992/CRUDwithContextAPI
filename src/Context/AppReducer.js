export default (state, action) => {
    switch(action.type){
        case 'REMOVE_DATA':
            return {
                users: state.users.filter(user =>{
                    return user.id !== action.payload
                })
            }
        case 'ADD_DATA':
            return {
                users: [action.payload, ...state.users]
            }
        case 'EDIT_DATA':
            const updatedData = action.payload;
            const updateDatas = state.users.map(user => {
                if(user.id === updatedData.id){
                    return updatedData;
                }
                return user;
            })
            return {
                users: [updateDatas]
            }

        default:
            return state
    }
}