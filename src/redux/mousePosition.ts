import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface mousePositionState {
    x: number;
    y: number;
}

const initialState: mousePositionState = {
  // just set some value to prevent trigger of any unintentional event
    x: 5000,
    y: 5000,
} 

export const mousePositionSlice = createSlice({
  name: 'mousePosition',
  initialState,
  reducers: {
    onMousePositionChange: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
  },
})

// Action creators are generated for each case reducer function
export const { onMousePositionChange } = mousePositionSlice.actions

export default mousePositionSlice.reducer