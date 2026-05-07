import axios from "axios";

const API = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const getProducts = async (query = "") => {
  const res = await API.get(`/products?${query}`);
  return res.data;
};

export const getProductById = async (id: string) => {
  const res = await API.get(`/products/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await API.get("/categories");
  return res.data;
};