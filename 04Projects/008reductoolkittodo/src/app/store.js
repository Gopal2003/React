import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlics';

export const store = configureStore({
    reducer : todoReducer
})