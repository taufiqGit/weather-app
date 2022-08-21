import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: 'ui',
    initialState: {
        PopupSearch: false
    },
    reducers: {
        openPopupSearch(state, action){
            state.PopupSearch = true
        },
        closePopupSearch(state, action){
            state.PopupSearch = false
        },
    }
})

export const selectPopupSearch = (state)=> state.ui.PopupSearch

export const { openPopupSearch, closePopupSearch } = UISlice.actions

export default UISlice.reducer
