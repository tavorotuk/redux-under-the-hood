import { createSlice } from "../redux.js";

export const { reducer, actions } = createSlice({
  name: 'goods',
  initialState: [],
  reducers: {
    add: (goods, payload) => [...goods, payload],
    take: (goods, payload) => goods.filter(good => good !== payload),
    clear: () => [],
  }
});