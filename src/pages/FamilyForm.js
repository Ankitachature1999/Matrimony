import React, { useState } from 'react';
import './FamilyForm.css';

const FamilyForm = () => {
  const [liveWithFamily, setLiveWithFamily] = useState('no');

  const toggleAddressFields = (event) => {
    setLiveWithFamily(event.target.value);
  };

  return (
    <form>
      <label htmlFor="live_with_family">Do you live with your family?</label>
      <select id="live_with_family" name="live_with_family" onChange={toggleAddressFields} value={liveWithFamily}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {liveWithFamily === 'yes' && (
        <div id="address_fields">
          <label htmlFor="current_address">Current Living Address:</label>
          <input type="text" id="current_address" name="current_address" />

          <label htmlFor="family_address">Family Address:</label>
          <input type="text" id="family_address" name="family_address" />
        </div>
      )}

      <label htmlFor="family_type">Family Type:</label>
      <select id="family_type" name="family_type">
        <option value="joint">Joint Family</option>
        <option value="nuclear">Nuclear Family</option>
        <option value="extended">Extended Family</option>
      </select>

      <label htmlFor="diet">Your Diet:</label>
      <select id="diet" name="diet">
        <option value="vegetarian">Vegetarian</option>
        <option value="non-vegetarian">Non-Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="eggetarian">Eggetarian</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default FamilyForm;
