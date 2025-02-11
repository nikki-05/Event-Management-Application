import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="dashboard">
      <h2>Event Dashboard</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>{event.name} - {event.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
