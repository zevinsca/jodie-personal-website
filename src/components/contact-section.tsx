"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
    setStatus("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setForm({ name: "", email: "", phone: "", message: "" });
      setSent(true);
      setStatus("Your message has been sent!");
    } else {
      setStatus(`Error: ${data.error}`);
    }
  };

  return (
    <section className="mx-auto container py-16 px-16" id="contact-section">
      <p className="text-center text-5xl text-white">Contact Me</p>
      <p className="text-center text-gray-400 lg:pt-2 pt-3">
        Have a project in mind or a question? Get in touch and let’s connect.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-10 py-10">
          <div className="flex flex-col justify-between h-full">
            <label htmlFor="" className="px-3">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-gray-700 rounded-2xl px-5 py-3 mt-2  w-full"
            />
            <label htmlFor="" className="px-3 pt-5">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-gray-700 rounded-2xl px-5 py-3 mt-2  w-full"
            />
            <label htmlFor="" className="px-3 pt-5">
              Phone Number
            </label>
            <input
              name="phone"
              type="number"
              placeholder="Your Phone Number"
              className="bg-gray-700 rounded-2xl px-5 py-3 mt-2 w-full"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col h-full">
            <label htmlFor="" className="px-3">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="bg-gray-700 rounded-2xl px-5 py-3 h-full resize-none mt-2"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-orange-theme px-5 py-3 rounded-xl flex items-center justify-center"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status && (
          <p
            className={`mt-4 text-center ${
              sent ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
