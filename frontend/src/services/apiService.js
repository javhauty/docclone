import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const get = async (url, params) => {
  const response = await axios.get(`${API_BASE_URL}${url}`, { params });
  return response.data;
};

export const post = async (url, body) => {
  const response = await axios.post(`${API_BASE_URL}${url}`, body);
  return response.data;
};

export const put = async (url, body) => {
  const response = await axios.put(`${API_BASE_URL}${url}`, body);
  return response.data;
};

export const del = async (url) => {
  const response = await axios.delete(`${API_BASE_URL}${url}`);
  return response.data;
};
