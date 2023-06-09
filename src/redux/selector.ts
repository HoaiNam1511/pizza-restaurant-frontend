import type { RootState } from "./store";

export const selectMenuIsOpen = (state: RootState) =>
    state.globalReducer.menuIsOpen;
export const selectModalOpen = (state: RootState) =>
    state.globalReducer.modalOpen;
export const selectSearchOpen = (state: RootState) =>
    state.globalReducer.searchIsOpen;
export const selectLoading = (state: RootState) => state.globalReducer.loading;
export const selectPopupNotification = (state: RootState) =>
    state.globalReducer.popupNotification;
//Product
export const selectProductId = (state: RootState) =>
    state.productReducer.productId;
export const selectProductDetail = (state: RootState) =>
    state.productReducer.productDetail;
export const selectCart = (state: RootState) => state.productReducer.cartPizza;
