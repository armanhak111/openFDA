import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { VIEW_MODES } from '../../constants/main';
import { AppDispatch } from '../../store';
import { TMainSlice } from '../types';

const initialState: TMainSlice = {
  loading: false,
  currentMode: VIEW_MODES.Table,
  data: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setCurrentMode: (state, action) => {
      return {
        ...state,
        currentMode: action.payload,
      };
    },
    setData: (state, action) => {
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    },
  },
});
export const getData =
  (limit: number, offset: number, setEnabledRequest: (arg: boolean) => void) =>
  (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    axios
      .get(`https://api.fda.gov/food/enforcement.json?limit=${limit}&skip=${offset}`)
      .then((resp) => {
        dispatch(setData(resp.data.results));
        setEnabledRequest(false);
      })
      .catch(() => alert('Something wen wrong'))
      .finally(() => dispatch(setLoading(false)));
  };

export const { setLoading, setCurrentMode, setData } = mainSlice.actions;

export default mainSlice.reducer;
