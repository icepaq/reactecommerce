import { createSlice } from '@reduxjs/toolkit'

type BookType = {
  title: string,
  description: string,
  image: string,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    books: [] as BookType[],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setTotal: (state, action) => {
      state.value = action.payload
    },
    setBooks: (state, action) => {
      state.books = action.payload
    },
    addBook: (state, action) => {
      state.books.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount, addBook, setBooks, setTotal } = counterSlice.actions

export default counterSlice.reducer