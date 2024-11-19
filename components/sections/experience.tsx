"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Staff Asia Ltd.",
    position: "Frontend Developer",
    duration: "2022 - Present",
    description: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Apex Learning, OneEducation Business, and more",
      " Collaborate with a team of 10+ engineers to develop and   maintain scalable, secure, and efficient software solutions",
      "Implement best practices for code quality, performance, and security",
      "Participate in code reviews and provide constructive feedback  to peers",
      "Stay updated with emerging technologies and industry trends to  enhance team capabilities and project outcomes"
    ],
  },
  {
    company: "Digital Innovations",
    position: "Junior Frontend Developer",
    duration: "2021 - 2022",
    description: [
      "Developed responsive web applications using React and Next.js",
      "Integrated RESTful APIs and implemented real-time features",
      "Collaborated with UI/UX designers to implement pixel-perfect designs",
      "Reduced page load times by 50% through lazy loading and code splitting",
    ],
  },

];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where I've Worked
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My professional journey in frontend development.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex flex-row overflow-x-auto lg:flex-col">
              {experiences.map((experience, index) => (
                <Button
                  key={experience.company}
                  variant={activeTab === index ? "default" : "ghost"}
                  className={cn(
                    "justify-start px-4 py-2 text-left",
                    activeTab === index && "bg-primary text-primary-foreground"
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="truncate">{experience.company}</span>
                </Button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-9"
          >
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {experiences[activeTab].position}
                  </h3>
                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {experiences[activeTab].company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experiences[activeTab].duration}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {experiences[activeTab].description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}