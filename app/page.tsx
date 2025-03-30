"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Download, Github, Linkedin, ExternalLink, Mail, Phone } from "lucide-react"
import { CustomCursor } from "@/components/custom-cursor"
import { Nav } from "@/components/nav"
import { StatCounter } from "@/components/stat-counter"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

// Dummy project data
const projects = [
  {
    id: 1,
    title: "Brain Tumor Classification",
    category: "Deep Learning",
    image: "/images/brain-tumor.jpg", // Update with your actual image path
    demoUrl: "https://github.com/Abhishek0Patil",
  },
  {
    id: 2,
    title: "YouTube Video Transcribe Summarizer",
    category: "LLM & Gemini Pro",
    image: "/images/youtube-summarizer.jpg", // Update with your actual image path
    demoUrl: "https://github.com/Abhishek0Patil",
  },
  {
    id: 3,
    title: "Wafer Fault Detection System",
    category: "Machine Learning",
    image: "/images/wafer-fault.jpg", // Update with your actual image path
    demoUrl: "https://github.com/Abhishek0Patil",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Development",
    image: "/images/portfolio.jpg", // Update with your actual image path
    demoUrl: "https://github.com/Abhishek0Patil",
  },
  {
    id: 5,
    title: "Chronic Disease Prediction",
    category: "Machine Learning",
    image: "/images/disease-prediction.jpg", // Update with your actual image path
    demoUrl: "https://github.com/Abhishek0Patil",
  },
  {
    id: 6,
    title: "FastAPI Backend Services",
    category: "Backend Development",
    image: "/images/fastapi.jpg", // Update with your actual image path
    demoUrl: "https://github.com/Abhishek0Patil",
  },
]

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitting(false)
      setFormSubmitted(true)
    }, 1500)

    // In a real implementation, you would send the form data to a backend service
    // For now, we'll just redirect to the email client
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    const mailtoLink = `mailto:abhi2662003@gmail.com?subject=Hiring Inquiry from ${name}&body=${message}%0A%0AContact Email: ${email}`
    window.open(mailtoLink)
  }

  return (
    <>
      <CustomCursor />
      <Nav />
      <main className="min-h-screen">
        <section className="container px-4 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-muted-foreground mb-2 font-mono">AI & ML Engineer</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hello I&apos;m <span className="text-primary font-mono">Abhishek Patil</span>
              </h1>
              <p className="text-muted-foreground max-w-lg mb-8">
                Machine Learning Engineer with expertise in Deep Learning and Generative AI, seeking to leverage
                analytical skills and technical proficiency to contribute to innovative projects and drive data-driven
                decision-making in a dynamic environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/resume.pdf" download="Abhishek_Patil.pdf">
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/Abhishek0Patil" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek0patil/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-[300px] h-[300px] mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-[spin_8s_linear_infinite]" />
                <Image
                  src="/images/profile.jpg" // Update this path to your actual image
                  alt="Abhishek Patil"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={3} label="Years of experience" />
            <StatCounter end={6} label="Projects completed" />
            <StatCounter end={5} label="Technologies mastered" />
            <StatCounter end={200} label="Code commits" />
          </div>
        </section>

        <section id="resume" className="container px-4 py-16 bg-muted/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="text-lg font-semibold">Bachelor in Artificial Intelligence and Machine Learning</h4>
                    <p className="text-muted-foreground">
                      Shri Madhwa Vadiraja Institute of Technology and Management • 2021-2025
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="text-lg font-semibold">Pre-University Education</h4>
                    <p className="text-muted-foreground">Mahatma Gandhi Memorial College • 2019-2021</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="text-lg font-semibold">10th</h4>
                    <p className="text-muted-foreground">T A Pai English Medium High School • 2016-2019</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="text-lg font-semibold">Software Development Intern</h4>
                    <p className="text-muted-foreground">IonIdea, Bengaluru • Feb 2025-Present</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Developing scalable and efficient backend services using FastAPI, designing RESTful APIs and
                      optimizing database interactions.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="text-lg font-semibold">Machine Learning Intern</h4>
                    <p className="text-muted-foreground">
                      Varcons Technologies Private Limited, Bengaluru • Oct 2023-Dec 2023
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Developed a predictive model for chronic disease detection using comprehensive data preprocessing,
                      feature engineering, and an optimized Decision Tree Classifier.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
                  <p className="text-muted-foreground">
                    C++, Python, Pandas, SQL, Numpy, Scikit-learn, Seaborn, Tensorflow, Power BI, AWS, Git, Docker
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Soft Skills</h4>
                  <p className="text-muted-foreground">
                    Communication, Problem-solving, Leadership and Analytical Thinking
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-lg font-semibold">Data Science Masters</h4>
                <p className="text-muted-foreground">PWSkills • Issued in 2024</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="work" className="container px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div key={project.id} whileHover={{ y: -10 }} className="overflow-hidden rounded-lg bg-card">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.category}</p>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="container px-4 py-16 bg-muted/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Hire Me</h2>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
                <a href="mailto:abhi2662003@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-5 w-5" />
                  abhi2662003@gmail.com
                </a>
                <a href="tel:+917204192750" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="h-5 w-5" />
                  +91 7204192750
                </a>
              </div>

              {formSubmitted ? (
                <div className="bg-green-500/20 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Thank you for your message!</h3>
                  <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                  <Button className="mt-4" onClick={() => setFormSubmitted(false)} variant="outline">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full p-2 rounded-md border border-border bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full p-2 rounded-md border border-border bg-background"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full p-2 rounded-md border border-border bg-background"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full" type="submit" disabled={formSubmitting}>
                    {formSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </section>

        <footer className="bg-background py-6 border-t border-border">
          <div className="container px-4 text-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Abhishek Patil. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}

