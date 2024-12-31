
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    question: "1. What industries do you cater to?",
    answer: "We work with clients across various industries, including e-commerce, healthcare, real estate, education, retail, hospitality, and more. Our solutions are tailored to suit the specific needs of each industry."
  },
  {
    question: "2. How long does it take to develop a website or mobile app?",
    answer: "The timeline depends on the complexity of the project. For a basic website, it usually takes 3–6 weeks, while mobile app development can take 8–12 weeks or more. A detailed timeline is provided after understanding your requirements."
  },
  {
    question: "3. Do you provide maintenance and support for websites and apps?",
    answer: "Yes, we offer ongoing maintenance and support to ensure your website or app runs smoothly, stays updated, and remains secure."
  },
  {
    question: "4. What is included in your digital marketing services?",
    answer: " Our digital marketing services include search engine optimization (SEO), pay-per-click (PPC) campaigns, social media marketing, email marketing, content marketing, and analytics reporting."
  },
  {
    question: "5. Can you design a custom HRMS software for my business?",
    answer: " Absolutely! We specialize in creating HRMS solutions tailored to your specific needs, including features like employee management, payroll, attendance tracking, and performance evaluations."
  },
  {
    question: "6. What is the cost of your services?",
    answer: "The cost varies depending on the scope and complexity of the project. We provide customized quotes after a detailed consultation to ensure we meet your budget and requirements."
  },
  {
    question: "7. Do you offer branding services?",
    answer: "Yes, we provide comprehensive branding services, including logo design, graphic design, brand identity development, and marketing strategies to enhance your business’s visibility and appeal."
  },
  {
    question: "8. How do you approach 3D modeling projects?",
    answer: "Our 3D modeling process involves understanding your vision, creating initial drafts, and refining the design to produce high-quality models. We cater to industries like architecture, product design, and more."
  },
  {
    question: "9. Will my website or app be optimized for mobile devices?",
    answer: "Yes, all our websites and applications are designed to be fully responsive and optimized for mobile, tablet, and desktop devices to provide an excellent user experience across all platforms."
  },
  {
    question: "10. How do you measure the success of digital marketing campaigns?",
    answer: "We use key performance indicators (KPIs) like website traffic, conversion rates, click-through rates, ROI, and engagement metrics to measure the success of our digital marketing campaigns. Detailed reports are shared regularly to keep you updated."
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-4 mt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Frequently Asked Questions (FAQs) About Our Services at <span className='text-[#2334DE]'>  Maxify Solutions</span></h2>
      <p className='text-center text-gray-600 mb-8'>Here are answers to some of the most common questions clients ask us about our services:</p>
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