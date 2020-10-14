import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todosslice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) =>
      state.concat({
        id: uuidv4(),
        text: action.payload.text,
        active: true,
        category: null,
      }),
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload.id),
    toggle: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].active = !state[index].active;
    },
    categorize: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].category = action.payload.category;
    },
  },
});
export default todosslice;
