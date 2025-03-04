"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  CheckCircle,
  Beaker,
  Home,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Droplets,
  Shield,
  Zap,
  Factory,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import { translations } from "@/lib/translations"

export default function LandingPage() {
  const [language, setLanguage] = useState("en")
  const t = translations[language]

  // Set RTL direction for Arabic
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return (
    <div className={`flex min-h-screen flex-col ${language === "ar" ? "font-arabic" : ""}`}>
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-40">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-02%20at%201.22.50%20AM-OOhZwHHaqsvfgVUz9x6Q3HubO8ZyYZ.jpeg"
                alt="BioAqua Solutions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              {t.nav.home}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              {t.nav.about}
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              {t.nav.services}
            </Link>
            <Link href="#technology" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              {t.nav.technology}
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              {t.nav.testimonials}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              {t.nav.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <Button className="hidden md:flex bg-cyan-600 hover:bg-cyan-700">{t.buttons.getQuote}</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-cyan-50 py-20 md:py-32">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                {t.hero.title} <span className="text-cyan-600">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg">
                  {t.buttons.exploreSolutions}
                  <ArrowRight className={`${language === "ar" ? "mr-2 rtl:rotate-180" : "ml-2"} h-5 w-5`} />
                </Button>
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg">
                  {t.buttons.contactUs}
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -z-10 inset-0 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
              <svg
                className="w-full h-auto max-w-lg mx-auto"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0891b2" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path
                  d="M200,380 C310,380 380,300 380,200 C380,100 310,20 200,20 C90,20 20,100 20,200 C20,300 90,380 200,380 Z"
                  fill="url(#dropGradient)"
                  opacity="0.9"
                />
                <path
                  d="M200,340 C290,340 340,280 340,200 C340,120 290,60 200,60 C110,60 60,120 60,200 C60,280 110,340 200,340 Z"
                  fill="#ffffff"
                  opacity="0.3"
                />

                {/* Circuit patterns inspired by the logo */}
                <path d="M120,200 L160,200 L160,160 L200,160 L200,120" stroke="#0e7490" strokeWidth="4" fill="none" />
                <path d="M200,280 L240,280 L240,240 L280,240" stroke="#0e7490" strokeWidth="4" fill="none" />
                <path d="M120,240 L140,240 L140,260 L180,260 L180,280" stroke="#0e7490" strokeWidth="4" fill="none" />
                <path d="M220,180 L260,180 L260,140" stroke="#0e7490" strokeWidth="4" fill="none" />
                <path
                  d="M160,220 L180,220 L180,200 L220,200 L220,220 L240,220"
                  stroke="#0e7490"
                  strokeWidth="4"
                  fill="none"
                />

                {/* Circuit nodes */}
                <circle cx="120" cy="200" r="6" fill="#0891b2" />
                <circle cx="160" cy="200" r="6" fill="#0891b2" />
                <circle cx="160" cy="160" r="6" fill="#0891b2" />
                <circle cx="200" cy="160" r="6" fill="#0891b2" />
                <circle cx="200" cy="120" r="6" fill="#0891b2" />
                <circle cx="200" cy="280" r="6" fill="#0891b2" />
                <circle cx="240" cy="280" r="6" fill="#0891b2" />
                <circle cx="240" cy="240" r="6" fill="#0891b2" />
                <circle cx="280" cy="240" r="6" fill="#0891b2" />
                <circle cx="120" cy="240" r="6" fill="#0891b2" />
                <circle cx="140" cy="240" r="6" fill="#0891b2" />
                <circle cx="140" cy="260" r="6" fill="#0891b2" />
                <circle cx="180" cy="260" r="6" fill="#0891b2" />
                <circle cx="180" cy="280" r="6" fill="#0891b2" />
                <circle cx="220" cy="180" r="6" fill="#0891b2" />
                <circle cx="260" cy="180" r="6" fill="#0891b2" />
                <circle cx="260" cy="140" r="6" fill="#0891b2" />
                <circle cx="160" cy="220" r="6" fill="#0891b2" />
                <circle cx="180" cy="220" r="6" fill="#0891b2" />
                <circle cx="180" cy="200" r="6" fill="#0891b2" />
                <circle cx="220" cy="200" r="6" fill="#0891b2" />
                <circle cx="220" cy="220" r="6" fill="#0891b2" />
                <circle cx="240" cy="220" r="6" fill="#0891b2" />
              </svg>
            </div>
          </div>
          <div className="absolute -z-10 top-0 left-0 right-0 h-full">
            <svg
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              version="1.1"
              aria-hidden="true"
            >
              <path
                d="M0 433L21.5 424.2C43 415.3 86 397.7 128.8 391.8C171.7 386 214.3 392 257.2 401.3C300 410.7 343 423.3 385.8 423.3C428.7 423.3 471.3 410.7 514.2 404.5C557 398.3 600 398.7 642.8 404.5C685.7 410.3 728.3 421.7 771.2 425.5C814 429.3 857 425.7 878.5 423.8L900 422"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="miter"
                stroke="#0891b2"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t.about.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">{t.about.paragraph1}</p>
                <p className="text-lg text-gray-700">{t.about.paragraph2}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">{t.about.features.certified.title}</h3>
                      <p className="text-sm text-gray-600">{t.about.features.certified.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">{t.about.features.eco.title}</h3>
                      <p className="text-sm text-gray-600">{t.about.features.eco.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">{t.about.features.support.title}</h3>
                      <p className="text-sm text-gray-600">{t.about.features.support.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">{t.about.features.custom.title}</h3>
                      <p className="text-sm text-gray-600">{t.about.features.custom.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 500 350"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0e7490" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>

                    {/* Background elements */}
                    <rect x="0" y="0" width="500" height="350" fill="#f8fafc" rx="10" ry="10" />

                    {/* Flowing water element inspired by the logo */}
                    <path
                      d="M50,175 C100,120 150,230 200,175 C250,120 300,230 350,175 C400,120 450,230 500,175"
                      stroke="url(#waveGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                    />

                    <path
                      d="M50,225 C100,170 150,280 200,225 C250,170 300,280 350,225 C400,170 450,280 500,225"
                      stroke="url(#waveGradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.7"
                    />

                    <path
                      d="M50,275 C100,220 150,330 200,275 C250,220 300,330 350,275 C400,220 450,330 500,275"
                      stroke="url(#waveGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.4"
                    />

                    {/* Particles/dots at the end of waves like in the logo */}
                    <circle cx="500" cy="175" r="8" fill="#0891b2" />
                    <circle cx="500" cy="225" r="6" fill="#0891b2" opacity="0.7" />
                    <circle cx="500" cy="275" r="4" fill="#0891b2" opacity="0.4" />

                    {/* Circuit board pattern in a water droplet */}
                    <path
                      d="M150,50 C120,50 100,80 100,120 C100,190 175,230 175,230 C175,230 250,190 250,120 C250,80 230,50 200,50 C180,50 175,70 175,70 C175,70 170,50 150,50 Z"
                      fill="#0891b2"
                      opacity="0.9"
                    />

                    {/* Circuit lines */}
                    <path d="M140,100 L160,100 L160,120 L190,120 L190,140" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M210,100 L210,120 L180,120 L180,140" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M175,160 L175,180" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M150,140 L200,140" stroke="white" strokeWidth="2" fill="none" />

                    {/* Circuit nodes */}
                    <circle cx="140" cy="100" r="3" fill="white" />
                    <circle cx="160" cy="100" r="3" fill="white" />
                    <circle cx="160" cy="120" r="3" fill="white" />
                    <circle cx="190" cy="120" r="3" fill="white" />
                    <circle cx="190" cy="140" r="3" fill="white" />
                    <circle cx="210" cy="100" r="3" fill="white" />
                    <circle cx="210" cy="120" r="3" fill="white" />
                    <circle cx="180" cy="120" r="3" fill="white" />
                    <circle cx="180" cy="140" r="3" fill="white" />
                    <circle cx="175" cy="160" r="3" fill="white" />
                    <circle cx="175" cy="180" r="3" fill="white" />
                    <circle cx="150" cy="140" r="3" fill="white" />
                    <circle cx="200" cy="140" r="3" fill="white" />

                    {/* Company name */}
                    <text x="300" y="100" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#0e7490">
                      BIOAQUA
                    </text>
                    <text x="300" y="130" fontFamily="Arial" fontSize="18" fill="#64748b">
                      SOLUTIONS
                    </text>

                    {/* Tagline */}
                    <text x="300" y="170" fontFamily="Arial" fontSize="14" fill="#64748b">
                      Advanced Water Treatment
                    </text>
                    <text x="300" y="190" fontFamily="Arial" fontSize="14" fill="#64748b">
                      for Labs and Homes
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">99.9%</div>
                <div className="text-cyan-100">{t.stats.contaminant}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">1000+</div>
                <div className="text-cyan-100">{t.stats.installations}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">50+</div>
                <div className="text-cyan-100">{t.stats.labs}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">24/7</div>
                <div className="text-cyan-100">{t.stats.support}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <Beaker className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.services.lab.title}</h3>
                <p className="text-gray-600 mb-6">{t.services.lab.description}</p>
                <ul className="space-y-3 mb-8">
                  {t.services.lab.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight
                        className={`h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5 ${language === "ar" ? "rtl:rotate-180" : ""}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                  {t.buttons.learnMore}
                  <ArrowRight className={`${language === "ar" ? "mr-2 rtl:rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <Factory className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.services.industrial.title}</h3>
                <p className="text-gray-600 mb-6">{t.services.industrial.description}</p>
                <ul className="space-y-3 mb-8">
                  {t.services.industrial.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight
                        className={`h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5 ${language === "ar" ? "rtl:rotate-180" : ""}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                  {t.buttons.learnMore}
                  <ArrowRight className={`${language === "ar" ? "mr-2 rtl:rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.services.home.title}</h3>
                <p className="text-gray-600 mb-6">{t.services.home.description}</p>
                <ul className="space-y-3 mb-8">
                  {t.services.home.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight
                        className={`h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5 ${language === "ar" ? "rtl:rotate-180" : ""}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                  {t.buttons.learnMore}
                  <ArrowRight className={`${language === "ar" ? "mr-2 rtl:rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.technology.title}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t.technology.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl border border-cyan-100">
                <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.technology.filtration.title}</h3>
                <p className="text-gray-600">{t.technology.filtration.description}</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl border border-cyan-100">
                <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.technology.bioProtection.title}</h3>
                <p className="text-gray-600">{t.technology.bioProtection.description}</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl border border-cyan-100">
                <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.technology.monitoring.title}</h3>
                <p className="text-gray-600">{t.technology.monitoring.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
                <p className="text-gray-600 mb-8">{t.contact.subtitle}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">{t.contact.phone.title}</h3>
                      <p className="text-gray-600">{t.contact.phone.value}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">{t.contact.email.title}</h3>
                      <p className="text-gray-600">{t.contact.email.value}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">{t.contact.address.title}</h3>
                      <p className="text-gray-600">{t.contact.address.value}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t.contact.form.name}
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                        placeholder={t.contact.form.namePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t.contact.form.email}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                        placeholder={t.contact.form.emailPlaceholder}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {t.contact.form.subject}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      placeholder={t.contact.form.subjectPlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      placeholder={t.contact.form.messagePlaceholder}
                    ></textarea>
                  </div>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">{t.contact.form.submit}</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-700">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-cyan-50 text-lg">{t.cta.subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6 text-lg">
                {t.buttons.getFreeQuote}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-cyan-500 px-8 py-6 text-lg">
                {t.buttons.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="relative h-12 w-48 bg-white p-2 rounded mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-02%20at%201.22.50%20AM-OOhZwHHaqsvfgVUz9x6Q3HubO8ZyYZ.jpeg"
                  alt="BioAqua Solutions Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 mt-4">{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks.title}</h3>
              <ul className="space-y-2">
                {t.footer.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.services.title}</h3>
              <ul className="space-y-2">
                {t.footer.services.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.newsletter.title}</h3>
              <p className="text-gray-400 mb-4">{t.footer.newsletter.description}</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder={t.footer.newsletter.placeholder}
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                />
                <Button className="rounded-l-none bg-cyan-600 hover:bg-cyan-700">{t.footer.newsletter.button}</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">{t.footer.copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

