import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div>
          <h2 className="text-grey sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Information
          </h2>
          <div className="relative mb-4">
            <h2 className="leading-7 text-sm text-gray-400">Email</h2>
          </div>
          <div className="relative mb-4">
            <h2 className="leading-7 text-sm text-gray-400">Github</h2>
          </div>
          <div className="relative mb-4">
            <h2 className="leading-7 text-sm text-gray-400">LinkedIn</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
