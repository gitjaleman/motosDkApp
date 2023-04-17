import { useState } from "react";
const useDataJson = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  function getDataByCategory(category) {
    return data.filter(item => item.category === category);
  }

  function getDataByProduct(product) {
    return data.filter(item => item.product === product);
  }

  function getDataByPrice(price) {
    return data.filter(item => item.price === price);
  }

  return {
    data,
    getDataByCategory,
    getDataByProduct,
    getDataByPrice,
  };
}

