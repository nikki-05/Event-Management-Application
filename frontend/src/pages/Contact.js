import { useState } from "react";
import "../styles.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been submitted. We will get back to you soon!");
    setFormData({ name: "", email: "", query: "" }); // Reset form after submission
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>Have any questions? Feel free to reach out to us!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="query"
            placeholder="Enter your query here..."
            value={formData.query}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <img
        src="https://img.freepik.com/free-vector/flat-hand-drawn-customer-support-illustration_23-2148887720.jpg"
        alt="Support Illustration"
        className="floating-image"
      />
    </div>
  );
}

export default Contact;
