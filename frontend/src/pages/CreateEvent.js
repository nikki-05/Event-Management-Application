import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css"; // Make sure your CSS file is imported

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
      const res = await axios.post("http://localhost:5000/api/events", eventData);
      console.log("Event created:", res.data);
      navigate("/"); // Redirect to Home page after event creation
    } catch (err) {
      console.error("Error creating event:", err);
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
