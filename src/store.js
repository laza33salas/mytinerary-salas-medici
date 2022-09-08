//Archivo store crea almacenamiento

// npm install @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";



import citiesApi from "./features/citiesApi"

//instancia del store
export default configureStore({
    reducer: {
       
        [citiesApi.reducerPath] : citiesApi.reducer
      
    }
    
})
