import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import dashboardService from './dashboardService'

const initialState = {
  selectedBondStockId: null,
  selectedBondStockValuation: { description: '', value: 0 },
  myInvestments: [],
  otherInvestments: [],
}

export const getMyInvestments = createAsyncThunk(
  'dashboard/getMyInvestments',
  async (thunkAPI) => {
    try {
      return await dashboardService.getMyInvestments()
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  });
export const getOtherInvestments = createAsyncThunk(
  'dashboard/getOtherInvestments',
  async (thunkAPI) => {
    try {
      return await dashboardService.getOtherInvestments()
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)
export const getCurrentValuation = createAsyncThunk(
  'dashboard/getCurrentValuation',
  async (id, thunkAPI) => {
    try {
      return await dashboardService.getCurrentValuation(id)
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)
export const selectCurrentInvestment = createAction('dashboard/selectCurrentInvestment');

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyInvestments.fulfilled, (state, action) => {
        state.myInvestments = action.payload
      })
      .addCase(getMyInvestments.rejected, (state, action) => {
        console.log('getMyInvestments.rejected', JSON.stringify(action))
      })
      .addCase(getOtherInvestments.fulfilled, (state, action) => {
        state.otherInvestments = action.payload
      })
      .addCase(selectCurrentInvestment, (state, action) => {
        state.selectedBondStockId = state.selectedBondStockId === action.payload
          ? null
          : action.payload
      })
      .addCase(getCurrentValuation.fulfilled, (state, action) => {
        state.selectedBondStockValuation = action.payload;
        return state;
      })
  }
})

export default dashboardSlice.reducer;
