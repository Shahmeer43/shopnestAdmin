import React, { useEffect, useState } from "react";
import Table from "../Components/Table";

export default function OrderPage() {
  const [orders, setOrders] = useState(null);
  const fetchAllOrders = async () => {
    let allOrdersJSON = await fetch("http://localhost:8000/orders");
    let allOrders = await allOrdersJSON.json();
    setOrders(allOrders);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    orders && (
      <div
        style={{
          backgroundColor: "#212529",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Table orders={orders} />
      </div>
    )
  );
}
