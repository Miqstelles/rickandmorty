import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '/src/redux/reducer.js';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
});