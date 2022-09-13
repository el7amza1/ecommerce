import axios from "axios";
import { useAppDispatch } from "redux/hooks";
import { getAllProducts } from "redux/product";



const api = axios.create({baseURL:"http://localhost:3000/api/"})
// const dispatch = useAppDispatch()
export const getProducts = async () => {
    try {
        const res =  await api.get("product")
    // dispatch(getAllProducts(res?.data.Product))
    console.log(res.data.Product);
    } catch (error) {
        console.log(error);
        
    }
}