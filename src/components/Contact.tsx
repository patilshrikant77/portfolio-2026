"use client";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  // 1. EXTRACT 'reset' FUNCTION FROM FORMSPREE
  const [state, handleSubmit, reset] = useForm("mjggkjrq"); // <--- Put your Form ID here
  
  // 2. STATE TO TRACK USER'S EMAIL FOR DISPLAY
  const [email, setEmail] = useState("");

  // 3. AUTO-RESET EFFECT
  useEffect(() => {
    if (state.succeeded) {
      // Wait 5 seconds, then reset form to initial state
      const timer = setTimeout(() => {
        reset();       // Clears the "Success" message from Formspree
        setEmail("");  // Clears the email field
        // Note: You might want to clear other fields if you make them controlled too
        const form = document.querySelector('form') as HTMLFormElement;
        if(form) form.reset(); 
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="p-8 rounded-3xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 animate-in fade-in zoom-in duration-500">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Thanks for reaching out. I will get back to you at <strong className="text-gray-900 dark:text-white">{email}</strong> shortly.
          </p>
          <p className="text-sm text-gray-400 mt-4 animate-pulse">
            Resetting form in 5 seconds...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto transition-colors">
          Have a project in mind or want to discuss AI Architecture? Fill out the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none transition-colors">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
            <input
              id="name"
              type="text" 
              name="name"
              placeholder="John Doe"
              required
              suppressHydrationWarning
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder="john@example.com"
              required
              suppressHydrationWarning
              // BIND VALUE TO STATE SO WE CAN DISPLAY IT LATER
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Hi Shrikant, I'd like to discuss..."
            required
            suppressHydrationWarning
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          suppressHydrationWarning
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Message"}
          {!state.submitting && <Send size={20} />}
        </button>
      </form>
    </section>
  );
}