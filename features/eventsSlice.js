import { createSlice } from '@reduxjs/toolkit'

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
                //Profe agrega un objeto evento
            }
            ]
        }
    }
})

export const {fetchFromServer} = eventsSlice.actions

export default eventsSlice.reducer