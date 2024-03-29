import React from "react";
import TableRow from "./TableRow";

export default function Table(props) {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Order ID</th>
          <th>Email</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>

      {props.orders.map((order) => {
        return <TableRow key={order._id} order={order}></TableRow>;
      })}
    </table>
  );
}
