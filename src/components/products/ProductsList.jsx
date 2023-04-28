import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import { Table } from "antd";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);


  return <div>
    <h1>Products</h1>
  </div>
};

export default ProductsList;
