import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CreateEvent.css"; // Import external CSS for cleaner code

function CreateEvent() {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
  
      const res = await axios.post("http://localhost:5000/api/events", eventData, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
  
      console.log("Event created:", res.data);
  
      // Navigate to home and pass new event
      navigate("/", { state: { newEvent: res.data } });
    } catch (err) {
      console.error("Error creating event:", err.response?.data || err);
      alert("Failed to create event. Please try again.");
    }
  };
  

  return (
    <div className="create-event-container">
      <div className="form-box">
        <h2>Create an Event</h2>
        <form onSubmit={handleSubmit}>
          <label>Event Name:</label>
          <input type="text" name="name" value={eventData.name} onChange={handleChange} required />

          <label>Description:</label>
          <textarea name="description" value={eventData.description} onChange={handleChange} required />

          <label>Date:</label>
          <input type="datetime-local" name="date" value={eventData.date} onChange={handleChange} required />

          <button type="submit" className="submit-btn">Create Event</button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
