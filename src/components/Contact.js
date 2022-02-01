import React from "react";

const Contact = () => {
  return (
    <section className="menu-section">
      <div className="work-info">
        <h2 className="main-text">Have Question in mind?</h2>
        <p>Let us help you</p>
      </div>
      <form action="" className="contact-form">
        <input
          type="email"
          className="form-input"
          placeholder="yourmail@gmail.com"
        />
        <button type="button" className="btn form-btn">
          send
        </button>
      </form>
    </section>
  );
};

export default Contact;
