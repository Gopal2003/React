import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // {} is a backup for not craching if there is no value returned from fetch.

  //calling API
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
    
  }, [currency]);

  return data;
}

//! in const [data, setData], every time we need some updations in data, we use setData and hance the value is updated in data.
//! When we use useState hook, it returns a data, and a method to update the data.
//! Similary, with respect to custom hook, we need to return a data from the function and the function as well. Hence, the function is exported and the data is returned, every time updation is needed, we can use the exported function and that function will return or update the value of the data.

export default useCurrencyInfo;