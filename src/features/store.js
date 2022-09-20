//Archivo store crea almacenamiento

// npm install @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";



import citiesApi from "./actions/citiesApi"
import itiApi from "./actions/ItinerariosApi";
import usersApi from "./actions/usersApi";

//instancia del store
export default configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer,

        users: usersApi,
        [usersApi.reducerPath] : usersApi.reducer,

        itineraries : itiApi,
        [itiApi.reducerPath] : itiApi.reducer
      
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        inmutableCheck:false,
        serializableCheck: false,
    })
    
})