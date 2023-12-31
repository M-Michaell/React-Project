import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    current_lang : "en-US",
    available_lang : ["en-US", "ar-SA"]
}

const languageSlice = createSlice({
    name: "language",
    initialState: INITIAL_STATE,
    reducers:{
        changeCurrentLang : (state, action) => {
            state.current_lang = action.payload

        },
        addNewLang : (state, action) => {
            state.available_lang=[...state.available_lang, action.payload]
        }
    }
})
export const {changeCurrentLang, addNewLang} = languageSlice.actions
export default languageSlice.reducer