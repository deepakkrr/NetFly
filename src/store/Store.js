import { configureStore } from '@reduxjs/toolkit'
// import HomeSlice from './homeSlice';
import HomeSlice from "./HomeSlice"

   const Store = configureStore({
  reducer: {
    home:HomeSlice
  },
})
export default Store;