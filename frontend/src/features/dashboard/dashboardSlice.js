import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import dashboardService from './dashboardService'
import { InvestingTypes } from './dashboardService';

const initialState = {
  selectedBondStockId: null,
  isOtherInvestmentSelected: false,
  selectedAsset: { name: '', amount: 0, value: 0, valuation: 0 },
  portfolio: { total: 0, assets: [] },
  myInvestments: [],
  otherInvestments: [],
}

export const getMyInvestments = createAsyncThunk(
  'dashboard/getMyInvestments',
  async (thunkAPI) => {
    try {
      const myInvestments = await dashboardService.getMyInvestments()
      const allAssets = await dashboardService.getAssets()
      return {
        myInvestments,
        allAssets
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  })

export const getPortfolio = createAsyncThunk(
  'dashboard/getPortfolio',
  async (thunkAPI) => {
    try {
      return await dashboardService.getPortfolio()
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)

export const getInvestmentById = createAsyncThunk(
  'dashboard/getInvestmentById',
  async (id, thunkAPI) => {
    try {
      return await dashboardService.getInvestmentById(id)
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)

export const selectCurrentInvestment = createAction('dashboard/selectCurrentInvestment');
export const selectOtherInvestment = createAction('dashboard/selectOtherInvestment');

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyInvestments.fulfilled, (state, action) => {
        state.myInvestments = action.payload.myInvestments
        const assetsToExclude = state
          .myInvestments
          .filter(x => x.type === InvestingTypes.BondsAndStock)
          .map(x => x.assetId)
        state.otherInvestments = action.payload
          .allAssets
          .filter(x => assetsToExclude.indexOf(x.id) === -1)
      })
      .addCase(selectCurrentInvestment, (state, action) => {
        state.selectedBondStockId = state.selectedBondStockId === action.payload
          ? null
          : action.payload
        state.isOtherInvestmentSelected = false
      })
      .addCase(selectOtherInvestment, (state, action) => {
        state.selectedBondStockId = state.selectedBondStockId === action.payload
          ? null
          : action.payload
        state.isOtherInvestmentSelected = !!state.selectedBondStockId
      })
      .addCase(getPortfolio.fulfilled, (state, action) => {
        state.portfolio = action.payload
        return state
      })
      .addCase(getInvestmentById.fulfilled, (state, action) => {
        state.selectedAsset = action.payload
        return state
      })
  }
})

export default dashboardSlice.reducer;
