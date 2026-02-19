"use client";

import { useActionState, useRef, useEffect } from "react";
import { sendContactEmail } from "@/app/contact/actions";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    success: false,
    error: null,
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="bg-white p-8 md:p-10">
      <h2 className="text-2xl font-serif mb-6">Send a Message</h2>

      {state.success && (
        <div className="mb-5 p-4 bg-green-50 border border-green-200 text-green-800 text-base">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {state.error && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 text-red-800 text-base">
          {state.error}
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-base text-gray-600 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-base text-gray-600 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-base text-gray-600 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 text-base border border-gray-300 bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none transition resize-y min-h-[140px]"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full px-6 py-4 bg-green-dark text-white text-base tracking-wide hover:bg-green-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
