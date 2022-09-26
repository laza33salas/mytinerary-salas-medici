import {
    configureStore
} from '@reduxjs/toolkit'


import eventsSlice from './eventsSlice'

//instancia del store
export default configureUser({
    reducer: {
        events: eventsSlice
    },
})

