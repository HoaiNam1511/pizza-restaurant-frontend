import { httpRequestProduct } from "../utils/httpRequest";

export const getProduct = async ({ limit = 8 }) => {
    const res = await httpRequestProduct.get(`/get?limit=${limit}`);
    return res.data;
};