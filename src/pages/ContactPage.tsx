import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FlipLink from "../components/ui/text-effect-flipper"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const res = await fetch("https://formspree.io/f/mldlavaz", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      })

      if (res.ok) {
        setStatus("✅ Thank you! Your message has been sent.")
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus("❌ Oops! Something went wrong. Please try again.")
      }
    } catch {
      setStatus("❌ Network error. Please check your connection.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      className="min-h-screen pt-24 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-start items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <motion.div
        className="text-white mb-8 sm:mb-12 text-center w-full max-w-2xl flex flex-col justify-center items-center gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-2xl sm:text-3xl md:text-4xl">
          <FlipLink href="https://x.com/guri_who">Contact me</FlipLink>
        </div>
        <p className="text-sm sm:text-base text-white/54 max-w-lg px-2">
          Whether you have an idea to discuss, a project to build, or simply want to connect,
          I'd be excited to hear from you and explore what we can create together.
        </p>
      </motion.div>


      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-6 w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Name Field */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm sm:text-base font-medium mb-2 text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
            placeholder="Your full name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm sm:text-base font-medium mb-2 text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
            placeholder="your.email@example.com"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm sm:text-base font-medium mb-2 text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 resize-none min-h-[100px] sm:min-h-[120px]"
            placeholder="Tell me about your project or idea..."
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-200 font-medium shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === "Sending..."}
        >
          {status === "Sending..." ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {/* Status Message */}
        {status && status !== "Sending..." && (
          <motion.p 
            className="text-sm sm:text-base text-center mt-3 text-white/70 px-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default ContactPage