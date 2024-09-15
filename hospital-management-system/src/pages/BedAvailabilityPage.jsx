import React from 'react';
import BedAvailability from '../components/BedAvailability';
import './BedAvailabilityPage.css';

const BedAvailabilityPage = () => {
  return (
    <div className="bed-availability-page">
      <h2>Bed Availability</h2>
      <BedAvailability />
    </div>
  );
};

export default BedAvailabilityPage;
