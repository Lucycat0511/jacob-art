"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Button from "./button/Button";

export default function ContactForm() {
  const form = useRef();
  return (
    <form
      className="flex flex-col w-full p-8 border border-secondary rounded-md
      dark:border-quaternary"
      ref={form}
      onSubmit={(e) => {
        const { name, subject, email, message, type } = form.current;
        const formData = {
          subject: subject.value,
          name: name.value,
          email: email.value,
          message: message.value,
          type: type.value,
        };

        console.log(formData);
        e.preventDefault();
        emailjs.send(
          "service_n4t5zur",
          "template_wlw4bxn",
          formData,
          "oAEv0ovRcAVzeb9JQ"
        );
      }}
    >
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        required
        min="3"
        className="rounded-md p-1 mb-4 border border-secondary
        dark:border-quaternary dark:text-black"
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        required
        className="rounded-md p-1 mb-4 border border-secondary
        dark:border-quaternary dark:text-black"
      ></input>
      <label htmlFor="type">Commission or Contact?</label>
      <select
        id="type"
        className="rounded-md p-1 mb-4 border border-secondary
        dark:border-quaternary dark:text-black"
      >
        <option>Commission</option>
        <option>Contact</option>
      </select>
      <label htmlFor="subject">Subject:</label>
      <input
        id="subject"
        max="50"
        required
        className="rounded-md p-1 mb-4 border border-secondary
        dark:border-quaternary dark:text-black"
      ></input>
      <label htmlFor="message">Comment:</label>
      <textarea
        id="message"
        required
        min="10"
        max="500"
        className="rounded-md p-1 mb-4 border border-secondary
        dark:border-quaternary dark:text-black"
      ></textarea>
      <Button className="self-center">Submit</Button>
    </form>
  );
}
