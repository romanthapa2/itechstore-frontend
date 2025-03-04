import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../url";

const initialState = {
  loading: false,
  error: null,
  // laptopData: null,
  laptopDataByType: null,
  laptopDataByBrand: null,
  laptopdatabyid: null,
  category: "",
};

// fetching the filtred data of laptop in redux using asyncthunk
export const fetchlaptop = createAsyncThunk(
  "get/fetchfilteredlaptop",
  async ({ filterType, value }) => {
    try {
      let response;
      if (filterType === "type") {
        response = await fetch(`${url}/api/filter/dataByFilter?type=${value}`);
      } else if (filterType === "brand") {
        response = await fetch(`${url}/api/filter/dataByFilter?brand=${value}`);
      }
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return { filterType, data: await response.json() };
    } catch (error) {
      console.error("Error fetching laptop data:", error);
      throw error;
    }
  }
);

// fetch the data by id
export const fetchlaptopbyid = createAsyncThunk(
  `laptop/fetchlaptopbyid`,
  async (laptopid) => {
    const response = await fetch(`${url}/api/product/${laptopid}`);
    const data = await response.json();
    return data;
  }
);

export const Laptopslice = createSlice({
  name: "laptopslice",
  initialState,
  reducers: {
    setcategory: (state, action) => {
      return {
        ...state,
        category: action.payload,
      };
    },
  },
  // extrareducers allows you to handle actions from other slices or additional reducer logic that doesn't belong
  // to a specific action creator defined within the slice.
  extraReducers: (builder) => {
    builder
      // .addCase() is a method provided by Redux Toolkit's createSlice
      // function for defining reducer logic. It allows you to define how your slice's
      //  state should be updated in response to specific actions.
      .addCase(fetchlaptop.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchlaptop.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { filterType, data } = action.payload;
        if (filterType === "type") {
          state.laptopDataByType = data; // Store data fetched by type
        } else if (filterType === "brand") {
          state.laptopDataByBrand = data; // Store data fetched by brand
        }
      })
      .addCase(fetchlaptop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchlaptopbyid.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchlaptopbyid.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.laptopdatabyid = action.payload;
      })
      .addCase(fetchlaptopbyid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const laptopDataByType = (state) => state.laptopslice.laptopDataByType;
export const laptopDataByBrand = (state) => state.laptopslice.laptopDataByBrand;
export const laptopError = (state) => state.laptopslice.error;
export const laptopLoading = (state) => state.laptopslice.loading;
export const laptopdataid = (state) => state.laptopslice.laptopdatabyid;
export const category = (state) => state.laptopslice.category;

export const { setcategory } = Laptopslice.actions;
export default Laptopslice.reducer;
