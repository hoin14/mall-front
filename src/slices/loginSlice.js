import { createSlice } from "@reduxjs/toolkit";

const initState = {
    email: ''
}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initState,
    reducers: {
        login: (state, action) => {
            console.log("login.....", action)
            console.log(action.payload)
            return {email: action.payload.email}
        },
        logout: () =>{
            console.log("logout.....")          
            return {...initState}
        }
    }
})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer