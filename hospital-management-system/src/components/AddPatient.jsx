import { useState } from "react";
import axios from "axios";
import "./addPatient.css"; // For additional styling if needed

const AddPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [priorityCategory, setPriorityCategory] = useState("");
  const [description, setDescription] = useState("");
  const [notification, setNotification] = useState(null); // To show pop-up notifications

  // Function to handle form submission
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

      // Show success notification
      setNotification({ type: "success", message: "Patient added successfully!" });

      // Clear form fields after successful submission
      setName("");
      setAge("");
      setSymptoms("");
      setPriorityCategory("");
      setDescription("");
    } catch (error) {
      // Show error notification
      setNotification({ type: "error", message: "Error adding patient!" });
      console.error("Error adding patient:", error);
    }

    // Automatically hide notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg relative">
      {/* Notification Pop-up */}
      {notification && (
        <div
          className={`absolute top-0 left-0 w-full py-4 text-center text-white font-semibold ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Add New Patient</h2>

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
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-y-auto max-h-40 scrollbar-thumb-blue-500 scrollbar-track-gray-200"
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
