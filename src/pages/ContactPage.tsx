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
      className="py-10 px-3 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-white mt-30 mb-12 text-center w-3/4 flex flex-col justify-center items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <FlipLink href="https://x.com/guri_who">Contact me</FlipLink>
        <p className="w-200 text-sm text-white/54">
          Whether you have an idea to discuss, a project to build, or simply want to connect,
          I’d be excited to hear from you and explore what we can create together.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 w-140"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
<div>
  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
  <input
    type="email"
    id="email"
    name="email" // match state key
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
    required
  />
</div>


        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            required
          />
        </div>

        <motion.button
          type="submit"
          className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>

        {status && (
          <p className="text-sm text-center mt-2 text-white/70">{status}</p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default ContactPage
