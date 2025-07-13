import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback", formData);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return submitted ? (
    <h2>Thank you for your feedback!</h2>
  ) : (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
