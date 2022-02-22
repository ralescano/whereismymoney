import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dashboardService from './dashboardService'

const initialState = {
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
  }
})

export default dashboardSlice.reducer;
