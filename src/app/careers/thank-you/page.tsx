"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-md">
        <Card className="border-2 border-gray-200 bg-white p-10 text-center shadow-sm rounded-xl">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Link href="https://www.revives.in/" target="_blank">
              <Image
                src="/images/img-logo2.webp"
                alt="Revive Logo"
                width={180}
                height={80}
                priority
                className="h-auto w-[120px] mb-4"
              />
            </Link>
          </div>

          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#386641] shadow-md">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-3xl font-bold text-[#253612] mb-3">
            Thank You for Applying!
          </h1>
          <p className="text-gray-600 mb-2">
            We’ve received your application and appreciate your interest in joining our mission.
          </p>
          <p className="text-gray-600 mb-8">
            Our team will review your application and get back to you soon.
          </p>

          {/* Button */}
          <div className="space-y-3">
            <Link href="/careers" className="block">
              <Button className="w-full bg-[#386641] text-white hover:bg-[#364f1b] transition">
                Back to Careers
              </Button>
            </Link>
          </div>
        </Card>

        {/* Footer */}
        <footer className="mt-8">
          <div className="bg-[#386641] rounded-xl px-8 py-6 text-center">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Revive Ecotech Ltd
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
