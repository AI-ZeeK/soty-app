import {FooterType, WearsType, footerData} from "@/data/data";
import {createSlice} from "@reduxjs/toolkit";

interface InitialTypes {
  isSubNavOpen: boolean;
  footerData: FooterType[];
  cart: WearsType[];
}
const initialState: InitialTypes = {
  isSubNavOpen: false,
  footerData,
  cart: [],
};
export const AppSlice = createSlice({
  name: "APP",
  initialState,
  reducers: {
    setSubNavOpen: (state) => {
      state.isSubNavOpen = !state.isSubNavOpen;
    },
    closeSubNavOpen: (state) => {
      state.isSubNavOpen = false;
    },
    setFooterNav: (state, {payload}) => {
      const x = state.footerData.map((data) => {
        return data.head === payload.head
          ? {...data, state: !data.state}
          : {...data, state: false};
      });
      state.footerData = x;
    },
    addToCart: (state, {payload}) => {
      state.cart.push(payload);
    },
    removeFromCart: (state, {payload}) => {
      const x = state.cart.filter((item) => {
        return item.id !== payload.id;
      });
      state.cart = x;
    },
  },
});

export const {
  setSubNavOpen,
  closeSubNavOpen,
  setFooterNav,
  addToCart,
  removeFromCart,
} = AppSlice.actions;
export default AppSlice.reducer;
