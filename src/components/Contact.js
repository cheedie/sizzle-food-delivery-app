import React from "react";

const Contact = () => {
  return (
    <section className="menu-section">
      <div className="work-info">
        <h2 className="main-text">Join our newsletter to get 20% off</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          aspernatur error necessitatibus at omnis eius exercitationem saepe,
          explicabo repudiandae molestias dolores ea itaque harum perspiciatis!
          Doloribus deleniti vero harum reiciendis.
        </p>
      </div>
      <form
        method="POST"
        className="contact-form"
        action="https://formspree.io/f/xbjwgobp"
      >
        <input
          type="email"
          className="form-input"
          placeholder="yourmail@gmail.com"
          name="_replyto"
        />
        <button type="submit" className="btn form-btn">
          send
        </button>
      </form>
    </section>
  );
};

export default Contact;
