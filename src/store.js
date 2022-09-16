//Archivo store crea almacenamiento

// npm install @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";



import citiesApi from "./features/citiesApi"
import usersApi from "./features/usersApi";

//instancia del store
export default configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer,

        users: usersApi,
        [usersApi.reducerPath] : usersApi.reducer
      
    }
    
})