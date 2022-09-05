import {
    configureStore
} from '@reduxjs/toolkit'

import eventsSlice from './features/eventsSlice'

//instancia del store
export default configureUser({
    reducer: {
        events: eventsSlice
    },
})

