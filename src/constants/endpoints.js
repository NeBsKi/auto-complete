import {urlConstants} from "./url_constants";

export const endpoints = {
    GET_CATEGORIES: process.env.REACT_APP_API + urlConstants.GET_CATEGORIES,
    GET_PRODUCTS: process.env.REACT_APP_API + urlConstants.GET_PRODUCTS
}