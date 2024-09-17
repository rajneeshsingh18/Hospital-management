import { useState } from "react";
import axios from "axios";

const AddPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [priorityCategory, setPriorityCategory] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(null); // Simplified message for "Patient added"

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/patients", {
        name,
        age,
        symptoms,
        priorityCategory,
        description,
      });
      console.log("Patient added");

      // Show success message for 3 seconds
      setMessage("Patient added successfully!");

      // Clear form fields
      setName("");
      setAge("");
      setSymptoms("");
      setPriorityCategory("");
      setDescription("");
    } catch (error) {
      console.error("Error adding patient:", error);
    }

    // Hide the message after 3 seconds
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      {/* Pop-up message for "Patient added" */}
      {message && (
        <div className="mb-4 text-center text-green-500 font-semibold">
          {message}
        </div>
      )}

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
        Add New Patient
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Age Input */}
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Symptoms Input */}
        <input
          type="text"
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Priority Category Input */}
        <input
          type="text"
          placeholder="Priority Category"
          value={priorityCategory}
          onChange={(e) => setPriorityCategory(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Description Textarea */}
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        {/* Submit Button */}
        <input
          type="submit"
          value="Add Patient"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
        />
      </form>
    </div>
  );
};

export default AddPatient;
