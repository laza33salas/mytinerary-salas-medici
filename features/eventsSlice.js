import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const eventsSlice = createSlice({
    name: 'events',

    //lista de eventos
    initialState: {
        events: []
    },

    //acciones que modifican los eventos
    reducers: {
        fetchFromServer: (state) => {
            state.events = [{
                //Profe agrega un objeto evento {image: "link", price : 20 etc}
            }
            ]
        }
    }
})

export const {fetchFromServer} = eventsSlice.actions

export default eventsSlice.reducer