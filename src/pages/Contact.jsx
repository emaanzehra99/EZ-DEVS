import { useState } from "react";
import "./Contact.css";

const FORMSPREE_URL = "https://formspree.io/f/mrenqjgd";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    if (data.get("website")) return;

    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error();

      setName(data.get("name"));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main className="contact-page">
        <section className="contact-success">
          <span>MESSAGE RECEIVED ✓</span>

          <h1>
            Thank you, <em>{name}.</em>
          </h1>

          <p>
            We've got your message. We'll take a look at what
            you're building and get back to you with the next step.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="contact-page">
      <section className="contact-section">

        <div className="contact-intro">
          <span>06 / CONTACT</span>

          <h1>
            Let's build
            <em>something worth trusting.</em>
          </h1>

          <p>
            Tell us what you're working on. You don't need
            everything figured out yet — we'll take it from there.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="YOUR NAME"
            minLength="2"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            required
          />

          <select name="service" required defaultValue="">
            <option value="" disabled>
              WHAT ARE YOU LOOKING TO BUILD?
            </option>
            <option value="Website">Website</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Copywriting">Copywriting</option>
            <option value="Web Development">VSLs</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>

          <textarea
            name="message"
            placeholder="TELL US ABOUT IT"
            minLength="20"
            required
          />

          <input
            type="url"
            name="website"
            className="contact-honeypot"
            tabIndex="-1"
            autoComplete="off"
          />

          {status === "error" && (
            <p className="contact-error">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "SENDING..."
              : "START THE CONVERSATION ↗"}
          </button>

        </form>

      </section>
    </main>
  );
}

export default Contact;