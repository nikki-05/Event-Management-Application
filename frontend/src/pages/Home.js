import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleEventCreated = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const filteredEvents = events.filter((event) => {
    if (filter === "upcoming") return new Date(event.date) > new Date();
    if (filter === "past") return new Date(event.date) < new Date();
    return true;
  });

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Event Manager</h1>
        <p>Plan, manage, and attend events seamlessly.</p>
        <button className="create-event-btn" onClick={() => navigate("/create-event")}>
          Create Event
        </button>
      </div>

      <div className="event-section">
        <h2>Upcoming & Past Events</h2>
        <div className="filter-buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("upcoming")}>Upcoming</button>
          <button onClick={() => setFilter("past")}>Past</button>
        </div>

        <div className="event-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event._id} className="event-card">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
