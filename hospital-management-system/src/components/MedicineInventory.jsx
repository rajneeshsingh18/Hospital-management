

import React, { useState, useEffect } from 'react';
import '../components/MedicineInventory.css';

const MedicineInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [reorderRequests, setReorderRequests] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setInventory([
      { id: 1, name: 'Aspirin', stock: 20, threshold: 15 },
      { id: 2, name: 'Ibuprofen', stock: 5, threshold: 10 },
      { id: 3, name: 'Paracetamol', stock: 50, threshold: 20 },
    ]);
  }, []);

  const handleReorder = (item) => {
    setReorderRequests([...reorderRequests, item]);
    alert(`Reorder request for ${item.name} submitted.`);
  };

  return (
    <div className="medicine-inventory-container">
      <h2>Medicine Inventory</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Stock Level</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className={item.stock <= item.threshold ? 'low-stock' : ''}>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.stock <= item.threshold ? 'Low Stock' : 'Sufficient'}</td>
              <td>
                {item.stock <= item.threshold ? (
                  <button onClick={() => handleReorder(item)} className="reorder-button">
                    Reorder
                  </button>
                ) : (
                  <span>No action needed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="reorder-requests">
        <h3>Reorder Requests</h3>
        <ul>
          {reorderRequests.map((request, index) => (
            <li key={index}>{request.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicineInventory;
