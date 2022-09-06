//Archivo store crea almacenamiento

// npm install @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";

import {citiesSlice} from './features/citiesSlice'

import citiesApi from "./features/citiesApi"

//instancia del store
export default configureStore({
    reducer: {
        cities: citiesSlice,
        [citiesApi.reducerPath] : citiesApi.reducer
    }
    
})
