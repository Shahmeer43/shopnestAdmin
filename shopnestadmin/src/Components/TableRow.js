import React from "react";

export default function TableRow(props) {
  return (
    <tbody>
      <tr>
        <td>{props.order.productId}</td>
        <td>{props.order._id}</td>
        <td>john@example.com</td>
        <td>{props.order.title}</td>
        <td>{props.order.price}</td>
        <td>{props.order.qty}</td>
      </tr>
    </tbody>
  );
}
