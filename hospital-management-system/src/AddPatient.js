import React, { useState } from "react";
import axios from "axios";
import "./addPatient.css";

const AddPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [priorityCategory, setPriorityCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/patients", {
        name,
        age,
        symptoms,
        priorityCategory,
      });
      console.log("Patient added:", response.data);
      setName("");
      setAge("");
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <div>
      <h2 className="addPatientTitle">Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="symptoms"
          placeholder="symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
        <input
          type="priorityCategory"
          placeholder="Priority Category"
          value={priorityCategory}
          onChange={(e) => setPriorityCategory(e.target.value)}
          required
        />
        <input
          type="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
