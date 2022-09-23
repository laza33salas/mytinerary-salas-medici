import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
    name: 'likes',
    initialState:{
        likes: []
    },

    reducers:{
        getLikes:(state,action) =>{
            state.likes = action.payload
        }
    }
})

export default likesSlice.reducer
export const {getLikes} = likesSlice.actions