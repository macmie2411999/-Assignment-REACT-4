// Files config store includes States
import {configureStore} from '@reduxjs/toolkit';
import {arrayStudentReducer} from './reducers/arrayStudentReducer'
export const store = configureStore({
    reducer:{
        // List States
        arrayStudentReducer: arrayStudentReducer
    }
})