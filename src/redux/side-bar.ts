import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface sideBarState {
  value: boolean
}

const initialState: sideBarState = {
  value: false,
}

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    onSideBarChange: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSideBarChange } = sideBarSlice.actions;

export default sideBarSlice.reducer;