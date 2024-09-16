import React, { useState, useEffect } from 'react';
import './MedicineInventory.css';

const MedicineInventory = () => {
  // Demo data for medicines inventory
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Paracetamol', stock: 50, minStock: 20, expiry: '2025-01-01' },
    { id: 2, name: 'Ibuprofen', stock: 5, minStock: 10, expiry: '2023-12-31' },
    { id: 3, name: 'Insulin', stock: 30, minStock: 10, expiry: '2024-03-15' },
    { id: 4, name: 'Cough Syrup', stock: 100, minStock: 50, expiry: '2026-05-10' },
  ]);

  useEffect(() => {
    checkInventory();
  }, [inventory]);

  // Function to check for reorder needs (Low stock or near expiry)
  const checkInventory = () => {
    const itemsToReorder = inventory.filter(item => {
      const needsReorder = item.stock <= item.minStock;
      const nearExpiry = new Date(item.expiry) <= new Date(new Date().setMonth(new Date().getMonth() + 6));
      return needsReorder || nearExpiry;
    });

    if (itemsToReorder.length > 0) {
      console.log("Items to reorder:", itemsToReorder);
    }
  };

  // Dummy function to simulate reorder process
  const triggerReorder = (item) => {
    alert(`Reorder placed for ${item.name}!`);
  };

  return (
    <div className="medicine-inventory">
      <h3>Medicine Inventory</h3>
      <table>
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Stock</th>
            <th>Minimum Stock</th>
            <th>Expiry Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => {
            const needsReorder = item.stock <= item.minStock;
            const nearExpiry = new Date(item.expiry) <= new Date(new Date().setMonth(new Date().getMonth() + 6));

            return (
              <tr key={item.id} className={needsReorder ? 'low-stock' : nearExpiry ? 'near-expiry' : ''}>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>{item.minStock}</td>
                <td>{item.expiry}</td>
                <td>
                  {needsReorder ? 'Low Stock' : nearExpiry ? 'Near Expiry' : 'Sufficient Stock'}
                </td>
                <td>
                  {(needsReorder || nearExpiry) && (
                    <button onClick={() => triggerReorder(item)}>Reorder</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineInventory;
