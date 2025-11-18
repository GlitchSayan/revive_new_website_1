"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function JobApplicationPage() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gmail: "",
    phone: "",
    age: "",
    gender: "",
    universityName: "",
    branch: "",
    specialization: "",
    yearOfPassout: "",
    cgpa: "",
    resumeLink: "",
    skills: "",
    experience: "",
    certificates: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const inputClass =
    "bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition";

  const textareaClass =
    "min-h-24 w-full bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-md p-2 focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition";

  const validateForm = (): boolean => {
    const required = [
      "role",
      "firstName",
      "lastName",
      "gmail",
      "phone",
      "age",
      "gender",
      "universityName",
      "branch",
      "specialization",
      "yearOfPassout",
      "cgpa",
      "resumeLink",
      "skills",
    ];

    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        alert("Please fill in all required fields.");
        return false;
      }
    }
    return true;
  };

  // ⭐⭐⭐ GOOGLE SHEET SUBMISSION ⭐⭐⭐
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxrGukdD0nFjLlKocMyb1bX_3BuVK4ulkeh625W_b8g8srJh7fzKwnO8B9pISQgbQjo/exec";

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      router.push("/careers/thank-you");
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* HEADER */}
        <div className="mb-8">
          <div className="mb-6">
            <Link href="https://www.revives.in/" target="_blank">
              <Image
                src="/images/img-logo2.webp"
                alt="Revive Logo"
                width={120}
                height={49}
              />
            </Link>
          </div>

          <button
            onClick={() => router.back()}
            className="mb-6 text-sm flex items-center gap-2 font-medium text-[#386641] hover:text-[#253612] transition cursor-pointer"
          >
            ← Back to Careers
          </button>

          <h1 className="text-4xl font-bold text-[#386641] mb-3">
            Application Form
          </h1>
          <p className="text-gray-600 text-lg">
            Join us in building a sustainable future
          </p>
        </div>

        {/* FORM */}
        <Card className="border border-gray-300 bg-white p-8 shadow-md rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* ROLE DROPDOWN */}
            <div>
              <h2 className="text-xl font-bold text-[#386641] mb-4">
                Select Internship Role *
              </h2>

              <Select value={formData.role} onValueChange={handleRoleChange}>
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Choose a role *" />
                </SelectTrigger>

                <SelectContent data-radix-select-content>
                  <SelectItem value="Web & Tech Development" data-radix-select-item>
                    Web & Tech Development
                  </SelectItem>

                  <SelectItem value="Research & Data Analysis" data-radix-select-item>
                    Research & Data Analysis
                  </SelectItem>

                  <SelectItem
                    value="Industry & Partnership Relations"
                    data-radix-select-item
                  >
                    Industry & Partnership Relations
                  </SelectItem>

                  <SelectItem
                    value="Field Operations & Community Liaison"
                    data-radix-select-item
                  >
                    Field Operations & Community Liaison
                  </SelectItem>

                  <SelectItem value="Marketing & Outreach" data-radix-select-item>
                    Marketing & Outreach
                  </SelectItem>

                  <SelectItem
                    value="Finance, Accounts & Compliance"
                    data-radix-select-item
                  >
                    Finance, Accounts & Compliance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* PERSONAL INFO */}
            <div>
              <h2 className="text-xl font-bold text-[#386641] mb-4">
                Personal Information
              </h2>

              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Input name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleInputChange} className={inputClass} />
                  <Input name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleInputChange} className={inputClass} />
                  <Input name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleInputChange} className={inputClass} />
                </div>

                <Input name="gmail" placeholder="Primary Gmail *" value={formData.gmail} onChange={handleInputChange} className={inputClass} />
                <Input name="phone" placeholder="Mobile Number *" value={formData.phone} onChange={handleInputChange} className={inputClass} />

                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="age" placeholder="Age *" value={formData.age} onChange={handleInputChange} className={inputClass} />

                  <Select value={formData.gender} onValueChange={handleGenderChange}>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Gender *" />
                    </SelectTrigger>

                    <SelectContent data-radix-select-content>
                      <SelectItem value="male" data-radix-select-item>
                        Male
                      </SelectItem>
                      <SelectItem value="female" data-radix-select-item>
                        Female
                      </SelectItem>
                      <SelectItem value="other" data-radix-select-item>
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Input name="universityName" placeholder="University Name *" value={formData.universityName} onChange={handleInputChange} className={inputClass} />

                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="branch" placeholder="Branch *" value={formData.branch} onChange={handleInputChange} className={inputClass} />
                  <Input name="specialization" placeholder="Specialization *" value={formData.specialization} onChange={handleInputChange} className={inputClass} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="yearOfPassout" placeholder="Year of Passout *" value={formData.yearOfPassout} onChange={handleInputChange} className={inputClass} />
                  <Input name="cgpa" placeholder="CGPA *" value={formData.cgpa} onChange={handleInputChange} className={inputClass} />
                </div>

                <Input name="resumeLink" placeholder="Resume Link (Google Drive) *" value={formData.resumeLink} onChange={handleInputChange} className={inputClass} />

                <textarea name="skills" placeholder="Skills *" value={formData.skills} onChange={handleInputChange} className={textareaClass} />

                <textarea name="experience" placeholder="Experience *" value={formData.experience} onChange={handleInputChange} className={textareaClass} />

                <textarea name="certificates" placeholder="Certificates *" value={formData.certificates} onChange={handleInputChange} className={textareaClass} />
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button type="button" variant="outline" onClick={() => router.back()} className="flex-1 border-[#386641] text-[#386641] hover:bg-[#386641] hover:text-white transition">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1 bg-[#386641] text-white hover:bg-[#364f1b] transition">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Card>

        <footer className="mt-12">
          <div className="bg-[#386641] rounded-xl px-8 py-6 text-center">
            <p className="text-white text-sm">© {new Date().getFullYear()} Revive Ecotech Ltd</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
