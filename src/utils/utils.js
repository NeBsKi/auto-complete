const axios = require("axios");

export const loadData = async (data, url) => {
    return await axios.get(url, {params: data})
        .then(res => res.data)
        .catch(error => {throw new Error(error)});
}

export const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args); 
      }, timeout);
    };
}