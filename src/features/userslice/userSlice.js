import { createSlice } from "@reduxjs/toolkit";	

const initialState = {
    currentUser: null,
    users: []
};

const userSlice = createSlice({
    name: 'user',
    
    initialState,
    reducers: {
        registerUser: (state, action) =>{
            state.users.push(action.payload);
        },

        loginUser: (state, action) => {
            state.currentUser = action.payload;
        },

        logoutUser: (state, action) => {
            state.currentUser = null;
        },

        setUsers: (state,action) => {
            state.users = action.payload;
        },
        updateBalance: (state, action) => {
            if (state.currentUser) {
              state.currentUser.balance += action.payload;
            }
          },

    },
});

export const {registerUser, loginUser, setUsers, logoutUser, updateBalance} = userSlice.actions;
export default userSlice.reducer;