"use client";

import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";

export default function ContactFormContainer() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`mx-64 flex flex-col gap-8 items-center opacity-0 translate-y-10
      ${inView && "fadeUpIn"}`}
    >
      <h2 className="text-3xl">Let&apos;s work together!</h2>
      <ContactForm />
    </section>
  );
}
