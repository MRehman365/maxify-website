
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    question: "1. What services do you offer?",
    answer: "We build websites and mobile apps, boost online presence, optimize search rankings, create online stores, give IT advice, and improve social media reach."
  },
  {
    question: "2. How long does a project take? ",
    answer: "Project timelines change based on how complex they are. We give you a clear time estimate after we understand what you need."
  },
  {
    question: "3. What technologies do you use?",
    answer: "We work with up-to-date tools like React, Node.js, Python, WordPress, Shopify, and others to make sure your project can grow and run well."
  },
  {
    question: "4. How much does a project cost?",
    answer: " The cost of a project depends on what it includes. We look at what you need and then give you a price made just for you."
  },
  {
    question: "5. Do you offer post-launch support?",
    answer: " Yes, we keep your site running after launch. We handle upkeep, security patches, and fix any issues that pop up."
  },
  {
    question: "6. Is my website mobile-friendly?",
    answer: "Yes, you can count on all our websites to work well and look great on mobile devices."
  },
  {
    question: "7. Can you help with digital marketing and SEO?",
    answer: "Yes, we know our stuff when it comes to SEO, SEM social media marketing, and content marketing. We'll help more people find you online."
  },
  {
    question: "8. How do I get started?",
    answer: "Just head to our contact page and get in touch. We'll set up a chat to talk about what you need for your project."
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4 mt-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Frequently Asked <span className='text-[#2334DE]'> Questions</span></h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <span className="text-lg font-semibold">{faq.question}</span>
            <motion.span
              initial={false}
              animate={{ rotate: openIndex === index ? 0 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {openIndex === index ? <FiMinus className="text-[#2334DE]" /> : <FiPlus className="" />}
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}