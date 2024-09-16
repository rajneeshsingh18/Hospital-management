import { useState } from "react";
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
        description,
      });
      console.log("Patient added:", response.data);
      setName("");
      setAge("");
      setSymptoms("");
      setPriorityCategory("");
      setDescription("");
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <div className="addPatientContainer">
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
          type="text"
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Priority Category"
          value={priorityCategory}
          onChange={(e) => setPriorityCategory(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4" // Adjust the number of rows to set the initial height
          required
        />
        <input type="submit" value="Add Patient" />
      </form>
    </div>
  );
};

export default AddPatient;
