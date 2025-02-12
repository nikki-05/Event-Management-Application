import "../styles.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Event Manager</h1>
        <p>
          Welcome to **Event Manager**, your ultimate solution for seamless event planning and management.  
          Whether you are organizing corporate events, social gatherings, or personal celebrations, our  
          platform ensures a smooth and efficient experience.
        </p>

        <h2>🌟 Why Choose Us?</h2>
        <ul>
          <li><strong>Easy Event Creation:</strong> Plan and create events effortlessly.</li>
          <li><strong>Real-Time Updates:</strong> Track attendees live with WebSocket support.</li>
          <li><strong>Guest Login:</strong> Allow limited access without registration.</li>
          <li><strong>Smart Filters:</strong> Sort events by category, date, and more.</li>
          <li><strong>Seamless User Experience:</strong> Beautiful UI for an engaging experience.</li>
        </ul>

        <h2>📢 Our Mission</h2>
        <p>
          We aim to simplify event management by providing a user-friendly and feature-rich platform.  
          Whether you’re an event organizer or an attendee, our goal is to make your experience  
          **hassle-free, engaging, and efficient**.
        </p>

        <h2>📌 Get Started</h2>
        <p>
          Sign up today and start managing your events effortlessly!  
          Have questions? Feel free to <a href="/contact">Contact Us</a>.
        </p>
      </div>
    </div>
  );
}

export default About;
