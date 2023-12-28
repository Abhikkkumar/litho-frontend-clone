import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div className="form container-fluid">
      <p>Fill out the form and we will be in touch soon!</p>
      <h2>How can we help you</h2>
      <div className="f-container">
        <div className="fc-sub fcs-1">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="text" placeholder="Your mobile" />
        </div>
        <div className="fc-sub fcs-2">
          <textarea
            name="message"
            placeholder="Your message"
            id="fc-msg"
            cols="50"
            rows="7"
          ></textarea>
        </div>
        <div className="fc-sub fcs-3">
          <p>
            We are committed to protecting your privacy. We will never collect
            information about you without your explicit consent.
          </p>
        </div>
        <div className="fc-sub fcs-4">
            <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}
