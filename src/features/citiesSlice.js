import { createSlice } from "@reduxjs/toolkit";


export const citiesSlice = createSlice({
    name: "cities",
    
    //siempre van a ser estados, valores
    initialState: {
        cities: [],
    },

    //los reducers siempre van a ser funciones
    reducers: {
        fetchFromServer: (state) =>{
            
            
        }
    }
})

export const {fetchFromServer} = citiesSlice.actions

export default citiesSlice.reducer