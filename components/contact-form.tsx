"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, X, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  file: File | null
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    file: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type (text files only)
      const allowedTypes = [
        "text/plain",
        "text/csv",
        "application/json",
        "text/markdown",
        "text/xml",
        "application/xml",
      ]

      if (!allowedTypes.includes(file.type) && !file.name.match(/\.(txt|csv|json|md|xml)$/i)) {
        setErrorMessage("Please upload only text files (.txt, .csv, .json, .md, .xml)")
        return
      }

      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage("File size must be less than 2MB")
        return
      }

      setFormData((prev) => ({ ...prev, file }))
      setErrorMessage("")
    }
  }

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, file: null }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("company", formData.company)
      formDataToSend.append("message", formData.message)

      if (formData.file) {
        formDataToSend.append("file", formData.file)
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          file: null,
        })
      } else {
        const errorData = await response.json()
        setSubmitStatus("error")
        setErrorMessage(errorData.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to <span className="text-blue-600">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss your project and explore how our cutting-edge solutions can drive your success forward.
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-gray-900">Get In Touch</CardTitle>
            <CardDescription className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Attach Document (Optional)</Label>
                <p className="text-xs text-gray-500 mb-3">
                  Upload text files only (.txt, .csv, .json, .md, .xml) - Max 2MB
                </p>

                {!formData.file ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <div className="space-y-2">
                      <Label htmlFor="file-upload" className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-700 font-medium">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                      </Label>
                      <Input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".txt,.csv,.json,.md,.xml,text/plain,text/csv,application/json,text/markdown,text/xml,application/xml"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{formData.file.name}</p>
                        <p className="text-sm text-gray-500">{(formData.file.size / 1024).toFixed(1)} KB</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeFile}
                      className="text-gray-500 hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {errorMessage && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}

              {submitStatus === "success" && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
