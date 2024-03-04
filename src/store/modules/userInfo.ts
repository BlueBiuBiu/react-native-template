import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {login} from '../../services/modules/home';

interface loginParams {
  phone: string;
  password: string;
  cb?: (res: any) => void;
}

export const fetchUserInfo = createAsyncThunk(
  'fetchUserInfoData',
  async ({phone, password}: loginParams, {dispatch}) => {
    const res = await login({phone, password});
    dispatch(changeUserInfoAction(res.args));
    // cb(res);
  },
);

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: {
      phone: '',
      password: '',
    },
  },
  reducers: {
    changeUserInfoAction(state, {payload}) {
      state.userInfo = payload;
    },
  },
});

export const {changeUserInfoAction} = userInfoSlice.actions;
export default userInfoSlice.reducer;
