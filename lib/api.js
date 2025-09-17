import axios from 'axios';


export const fetchCategories = async () => {
const res = await axios.get('https://api.escuelajs.co/api/v1/categories');
return res.data;
};


export const fetchProducts = async (offset = 0, limit = 20) => {
const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);
return res.data;
};