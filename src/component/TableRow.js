// TableRow.js
import React from 'react';

function TableRow({ crypto }) {
  return (
    <tr>
      <td><img src={crypto.image} alt={crypto.name} width="30" height="30" /></td>
      <td>{crypto.name}</td>
      <td>{crypto.symbol}</td>
      <td>${crypto.current_price}</td>
      <td>${crypto.total_volume}</td>
      <td>Mkt Cap:${crypto.market_cap}</td>
    </tr>
  );
}

export default TableRow;
