"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from '@/components/footer'

const jobs = [
  {
    id: "web-and-tech-dev",
    title: "Web & Tech Development",
    description:
      "Craft seamless digital experiences for our users. Work on real product features using React, Next.js, Node.js, APIs, and UI/UX best practices. If you love building smooth, fast, and scalable apps — this is for you.",
  },
  {
    id: "research-and-data-analysis",
    title: "Research & Data Analysis",
    description:
      "Turn raw data into impactful insights. Conduct research, study sustainability trends, and present reports that help drive strategic decisions. Perfect for analytical minds who enjoy digging for meaningful patterns.",
  },
  {
    id: "industry-and-partneship",
    title: "Industry & Partnership Relations",
    description:
      "Build bridges with organizations, NGOs, and industry partners. Help draft proposals, manage communications, and assist with collaboration opportunities. Ideal for great communicators with a business mindset.",
  },
  {
    id: "field-operations-and-community",
    title: "Field Operations & Community Liaison",
    description:
      "Work on the ground to bring awareness, support events, and engage communities. You’ll help execute campaigns that make sustainability real and relatable. Best suited for outgoing, people-centric personalities.",
  },
  {
    id: "marketing-and-outreach",
    title: "Marketing & Outreach",
    description:
      "Shape the voice of our brand. Create campaigns, content, and social strategies that inspire people to take climate action. A role for creative storytellers who can make ideas spread.",
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <div className='flex flex-col bg-[#f5faf6] m-3 md:m-8 rounded-2xl border border-neutral-200 px-3 overflow-hidden'>
        <Navbar />
        
        {/* Header Section */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            {/* Title & Description */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#253612] mb-6">Join Our Mission</h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Revive is the ultimate solution for eco-conscious families looking to make a positive impact on the
                environment while earning money through recycling.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#253612] mb-3">
              Open Internship Positions
            </h2>
            <p className="text-gray-600 text-lg">
              Be part of the change. Build a sustainable future with us.
            </p>
          </div>

          {/* Job Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <Link key={job.id} href={`/careers/${job.id}`}>
                <Card className="flex h-full flex-col cursor-pointer border border-gray-300 bg-white p-6 rounded-xl transition hover:shadow-lg hover:border-[#386641]/60">
                  <h2 className="text-xl font-bold text-[#386641] mb-3">{job.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 grow">{job.description}</p>

                  <div className="mt-auto">
                    <button className="w-full cursor-pointer rounded-full bg-[#386641] py-2.5 text-white text-sm font-medium transition hover:bg-[#364f1b] hover:shadow-md">
                      Apply Now
                    </button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
