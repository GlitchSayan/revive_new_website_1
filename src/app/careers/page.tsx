"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from '@/components/footer'

const jobs = [
  {
    id: "web-and-app-dev",
    title: "Web & App Development",
    description:
      "You'll be part of the core tech team building the Revive Ecotech digital platform, used by industries, households, and scrap collectors. This role has two tracks - choose based on your skills and interest.",
    modalContent: (
      <>
        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">Learn about the role!!</h3>
          <p className="text-gray-600 whitespace-pre-line">
            Web & App Development Team (Choose Your Track - Web / App){"\n\n"}
            You&apos;ll be part of the core tech team building the Revive Ecotech digital platform, used by industries, households, and scrap collectors.{"\n"}
            This role has two tracks, choose based on your skills and interest:
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">🌐 Web Development Track (Next.js + Cloud + Dashboard Systems)</h3>
          <h4 className="font-semibold text-[#253612] mb-2">You will:</h4>
          <ul className="list-none text-gray-600 space-y-2 mb-4">
            <li>– Build our web platform using Next.js, React & Tailwind CSS</li>
            <li>– Create dashboards for industries, scrap collectors & admins</li>
            <li>– Work with Node.js & APIs for backend connectivity</li>
            <li>– Collaborate with Cloud/DevOps team (AWS / GCP / Firebase) for deployment, storage & optimization</li>
            <li>– Ensure fast loading, mobile responsiveness & clean UI</li>
            <li>– Optimize image/file size to keep platform lightweight</li>
          </ul>
          <h4 className="font-semibold text-[#253612] mb-2">Good for you if:</h4>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– You know React / Next.js / Tailwind CSS / Node.js</li>
            <li>– OR you can handle cloud & deployment (AWS / Firebase / GCP)</li>
            <li>– You can share GitHub or portfolio links of your work</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">📱 App Development Track (Flutter + Android + UI/UX)</h3>
          <h4 className="font-semibold text-[#253612] mb-2">You will:</h4>
          <ul className="list-none text-gray-600 space-y-2 mb-4">
            <li>– Build the Revive mobile app for users, industries & scrap collectors</li>
            <li>– Use Flutter + Dart (primary) or Android Studio (Java/Kotlin)</li>
            <li>– Design & develop features like pickup requests, tracking, payments etc.</li>
            <li>– Ensure the app is lightweight, smooth & low-size optimized</li>
            <li>– UI/UX designers can help design screens using Figma / Adobe XD</li>
          </ul>
          <h4 className="font-semibold text-[#253612] mb-2">Good for you if:</h4>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– You know Flutter / Dart / Android Studio</li>
            <li>– OR you&apos;re a UI/UX designer familiar with mobile layouts</li>
            <li>– You can share links to apps / GitHub / Behance / Dribbble</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">⏰ Duration</h3>
            <p className="text-gray-600">3-6 months</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">📍 Location</h3>
            <p className="text-gray-600">Remote / Hybrid</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "research-and-data-analysis",
    title: "Research & Material Innovation",
    description:
      "This is not just Google-based research, it's hands-on scientific work with real industrial waste. Study materials, identify recycling methods, and create solutions for sustainability.",
    modalContent: (
      <>
        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">Learn about the role!</h3>
          <p className="text-gray-600 whitespace-pre-line">
            Research & Material Innovation (Recycling & Upcycling R&D Team){"\n\n"}
            This is not just Google-based research, it&apos;s hands-on scientific work with real industrial waste.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">You will:</h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– Study different industrial waste materials we collect (plastic, rubber, textile, paper, metal residues etc.)</li>
            <li className="whitespace-pre-line">– Receive sample materials from industries/scrap collectors and document their:{"\n  • Composition (chemical/physical)\n  • Source and manufacturing process\n  • Why it is currently not recycled or upcycled"}</li>
            <li>– Research how the same material is handled globally (Europe, Japan, etc.)</li>
            <li>– Identify possible upcycling or recycling methods that can work in India (low-cost, scalable, environmentally safe)</li>
            <li>– Collaborate with chemistry/mechanical/environmental mentors to test feasibility</li>
            <li>– Prepare reports, flowcharts, and suggestions for the tech and operations teams</li>
          </ul>
        </div>

        <div className="bg-[#f5faf6] p-4 rounded-xl border border-[#386641]/20">
          <h3 className="text-lg font-semibold text-[#253612] mb-2">Why this role matters:</h3>
          <p className="text-gray-600">If a material is recyclable or reusable, Revive Ecotech will adopt it into our collection system. If not, the research team will create a new solution or adapt an existing one.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">Best fit if you are:</h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– From Chemistry / Mechanical / Environmental background</li>
            <li>– Curious about material science, sustainability, and industrial processes</li>
            <li>– Ready to combine lab research + field understanding</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">⏰ Duration</h3>
            <p className="text-gray-600">3-6 months</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">📍 Location</h3>
            <p className="text-gray-600">Hybrid (Lab + Field)</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "industry-and-partnership",
    title: "Industry & Partnership Relations",
    description:
      "This is a professional, on-ground role where you help Revive Ecotech partner with industries, recyclers, and scrap buyers. Your work directly brings business and builds long-term relationships.",
    modalContent: (
      <>
        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">Learn about the role!</h3>
          <p className="text-gray-600 whitespace-pre-line">
            Industry & Partnership Relations (Client Acquisition + Deal Closure){"\n\n"}
            This is a professional, on-ground role where you help Revive Ecotech partner with industries, recyclers, and scrap buyers. Your work directly brings business and builds long-term relationships.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">You will:</h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– Contact industries via calls, emails, LinkedIn, or visits and explain Revive Ecotech&apos;s model and offers</li>
            <li>– Visit at least 3 factories or scrap sellers every week to collect data and convince them to partner with us</li>
            <li>– Keep a proper log of every call, meeting, factory visit, proposal sent, and deal status</li>
            <li>– Negotiate pricing, pickup terms, and contracts with industry owners, managers, or procurement heads</li>
            <li>– Share proposals, quotations, and partnership documents professionally</li>
            <li>– Coordinate with operations, transport, and scrap collectors once deals are confirmed</li>
            <li>– Be available to travel to nearby towns/cities if required (expenses covered by us), whenever an important meeting or deal needs to be closed</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">This role is for you if:</h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– You are confident in communication and persuasive in conversations</li>
            <li>– You can manage calls, field visits, and follow-ups regularly</li>
            <li>– You understand professionalism, negotiation, and relationship-building</li>
            <li>– You are willing to step outside your comfort zone and take initiative</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">⏰ Duration</h3>
            <p className="text-gray-600">3-6 months</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">📍 Location</h3>
            <p className="text-gray-600">Field-based / Hybrid</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "field-operations-and-community",
    title: "Field Operations & Community Liaison",
    description:
      "This role is the bridge between Revive Ecotech and the real world. Work on-ground with industries, communities, and local partners to make sustainability happen — not just online, but in action.",
    modalContent: (
      <>
        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">Learn about the role!</h3>
          <p className="text-gray-600 whitespace-pre-line">
            Field Operations & Community Liaison{"\n\n"}
            This role is the bridge between Revive Ecotech and the real world. As part of the Field Operations & Community team, you will work on-ground and directly with industries, communities, and local partners to make sustainability happen — not just online, but in action.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">You will:</h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– Visit factories, scrap yards, and local collection points to gather data on recyclable materials and waste-handling practices</li>
            <li>– Build relationships with scrap collectors, vendors, industrial partners, and communities, ensuring smooth collaboration</li>
            <li>– Conduct on-ground surveys to understand regional waste management gaps and bring insights to the research and strategy teams</li>
            <li>– Help plan and execute awareness campaigns, school sessions, and sustainability drives, documenting activities through reports and visuals</li>
            <li>– Work with the Marketing and Outreach team to amplify field stories into impactful digital content</li>
            <li>– Assist in onboarding new industrial clients and collection partners, ensuring clear communication and operational efficiency</li>
            <li>– Maintain daily or weekly logs of visits, outcomes, and feedback</li>
            <li>– Occasionally travel outside your city for industrial visits or community events (expenses covered)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">Ideal for:</h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– Individuals who are outgoing, proactive, and confident communicators</li>
            <li>– Those who enjoy working outdoors, interacting with people, and turning ideas into real action</li>
            <li>– Students passionate about environmental awareness, sustainability, and leadership</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">⏰ Duration</h3>
            <p className="text-gray-600">3-6 months</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">📍 Location</h3>
            <p className="text-gray-600">Field-based / Hybrid</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "marketing-and-outreach",
    title: "Marketing & Outreach",
    description:
      "This is not a simple social media role, this is about creating real impact and making Revive Ecotech known across cities, industries, and communities.",
    modalContent: (
      <>
        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">Learn about the role!</h3>
          <p className="text-gray-600 whitespace-pre-line">
            Marketing & Outreach (Ground + Digital Growth Team){"\n\n"}
            This is not a simple social media role, this is about creating real impact and making Revive Ecotech known across cities, industries, and communities.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">You will:</h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– Spread awareness about our startup beyond college and your city, across districts, states, and industries</li>
            <li>– Find creative ways to reach industries, scrap collectors, waste workers, NGOs, companies, schools, and the general public</li>
            <li>– Make people aware of our app, services, recycling model, ESG & CSR support for companies</li>
            <li>– Create content that educates and attracts - videos, reels, blogs, emails, posters, newsletters, etc.</li>
            <li>– Visit places if required - events, schools, industries, scrapyards, public spaces — to talk about Revive Ecotech</li>
            <li>– Conduct and document campaigns, workshops, drives, cleanup events, competitions, and street awareness activities</li>
            <li>– Work on social media strategies, collaborations, influencer tie-ups, PR, news coverage</li>
            <li>– Consistently document everything, photos, videos, captions, and outreach logs</li>
            <li>– Main goal: Bring more users, industries, and collectors to our platform</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">This role is for you if:</h3>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– You are creative, outspoken, and love interacting with people</li>
            <li>– You can think beyond just Instagram aesthetics, you want real reach and real impact</li>
            <li>– You are ready to speak, travel, plan campaigns, and execute ideas in the real world</li>
            <li>– You understand that marketing = talking to people, not just making posts</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">⏰ Duration</h3>
            <p className="text-gray-600">3-6 months</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">📍 Location</h3>
            <p className="text-gray-600">Field-based / Hybrid</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "finance-accounts-compliance",
    title: "Finance, Accounts & Compliance",
    description:
      "A core strategic role where finance meets sustainability, innovation, and business intelligence. Handle everything from financial operations to strategic decision-making.",
    modalContent: (
      <>
        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">Learn about the role!</h3>
          <p className="text-gray-600 whitespace-pre-line">
            Finance, Accounts & Compliance (Multi-Tasking Role){"\n\n"}
            This is a core strategic role at Revive Ecotech — where finance meets sustainability, innovation, and business intelligence. You&apos;ll handle everything from financial operations to strategic decision-making, helping the company grow responsibly and efficiently.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">🧾 Section 1: Financial Management & Compliance</h3>
          <p className="text-gray-600 mb-3">You&apos;ll ensure that every rupee, transaction, and operation aligns with transparency and compliance standards.</p>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– Maintain daily transaction records — including payments to collectors, industry revenues, logistics costs, and event expenses</li>
            <li>– Prepare cash flow statements, budgets, break-even analyses, and financial forecasts to monitor sustainability</li>
            <li>– Handle GST invoices, vendor payments, company banking, and invoice generation workflows (via n8n)</li>
            <li>– Track and manage finances for events, campaigns, tech development, and partnerships</li>
            <li>– Coordinate with auditors and CAs for GST filing, audits, and statutory compliance</li>
            <li>– Prepare financial reports for investors, competitions, and grant submissions</li>
            <li>– Research and apply for government schemes, CSR funding, and sustainability-linked grants relevant to our operations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#253612] mb-3">📊 Section 2: Strategic Analysis & Business Growth</h3>
          <p className="text-gray-600 mb-3">This section focuses on shaping Revive Ecotech&apos;s financial future — using data, strategy, and innovation.</p>
          <ul className="list-none text-gray-600 space-y-2">
            <li>– Study market competition, pricing structures, and business models to identify growth opportunities</li>
            <li>– Build and test new financial strategies and service ideas for better scalability</li>
            <li>– Support the Industry & Partnership team in designing pricing frameworks and evaluating deal profitability</li>
            <li>– Conduct profitability, cost, and ROI analyses for every service vertical</li>
            <li>– Evaluate financial risks and sustainability metrics to guide strategic decisions</li>
            <li>– Work closely with leadership to develop long-term financial roadmaps and funding strategies</li>
            <li>– Recommend improvements for operational efficiency and innovation-driven financial models</li>
          </ul>
        </div>

        <div className="bg-[#f5faf6] p-4 rounded-xl border border-[#386641]/20">
          <h3 className="text-lg font-semibold text-[#253612] mb-2">Ideal Candidate:</h3>
          <p className="text-gray-600">A strategic thinker with strong analytical and accounting skills — someone who can manage numbers, understand business dynamics, and contribute ideas that shape Revive Ecotech&apos;s future.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">⏰ Duration</h3>
            <p className="text-gray-600">3-6 months</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#253612] mb-2">📍 Location</h3>
            <p className="text-gray-600">Remote / Hybrid</p>
          </div>
        </div>
      </>
    )
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null)

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
                Revive is the ultimate solution for eco-conscious people looking to make a positive impact on the
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
              <Card key={job.id} className="flex h-full flex-col border border-gray-300 bg-white p-6 rounded-xl transition hover:shadow-lg hover:border-[#386641]/60">
                <h2 className="text-xl font-bold text-[#386641] mb-3">{job.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{job.description}</p>

                <div className="mt-auto space-y-2">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full cursor-pointer rounded-full border-2 border-[#386641] bg-transparent py-2.5 text-[#386641] text-sm font-medium transition hover:bg-[#386641] hover:text-white"
                  >
                    Learn about this Role!
                  </button>
                  <Link href={`/careers/${job.id}`}>
                    <button className="w-full cursor-pointer rounded-full bg-[#386641] py-2.5 text-white text-sm font-medium transition hover:bg-[#364f1b] hover:shadow-md">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-[#386641]">{selectedJob.title}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {selectedJob.modalContent}

              <div className="pt-4">
                <Link href={`/careers/${selectedJob.id}`}>
                  <button className="w-full cursor-pointer rounded-full bg-[#386641] py-3 text-white text-base font-medium transition hover:bg-[#364f1b] hover:shadow-md">
                    Apply for this Position
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
