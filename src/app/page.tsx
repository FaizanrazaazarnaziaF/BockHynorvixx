"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import {
  FileText,
  Video,
  Cloud,
  Users,
  Check,
  Shield,
  Rocket,
  Globe,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

const BockSuiteLandingPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPlan, setSelectedPlan] = useState("business");

  const services = [
    {
      icon: <FileText className="text-blue-400" size={48} />,
      title: "Bock Docs",
      description: "Collaborative document editing with AI-powered suggestions and real-time sync.",
      color: "blue",
    },
    {
      icon: <Video className="text-green-400" size={48} />,
      title: "Bock Meet",
      description: "Immersive video conferencing with virtual collaboration spaces and smart recording.",
      color: "green",
    },
    {
      icon: <Cloud className="text-yellow-400" size={48} />,
      title: "Bock Drive",
      description: "Intelligent cloud storage with advanced security, version control, and seamless sharing.",
      color: "yellow",
    },
  ];

  const features = [
    {
      title: "Seamless Collaboration",
      description: "Real-time editing, instant communication, and integrated workflows across all Bock Suite apps.",
      icon: <Users className="text-purple-400" size={36} />,
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade encryption, zero-knowledge architecture, and comprehensive threat protection.",
      icon: <Shield className="text-green-400" size={36} />,
    },
    {
      title: "Smart Integrations",
      description: "Effortless connections with 200+ third-party tools and custom API capabilities.",
      icon: <Globe className="text-blue-400" size={36} />,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      features: [
        "Up to 5 Users",
        "30GB Storage",
        "Basic Support",
        "Standard Features",
      ],
      best: false,
    },
    {
      name: "Business",
      price: "$24.99",
      period: "/month",
      features: [
        "Up to 25 Users",
        "1TB Storage",
        "Priority Support",
        "Advanced Security",
        "Custom Integrations",
      ],
      best: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Users",
        "Unlimited Storage",
        "24/7 Dedicated Support",
        "Advanced Analytics",
        "Personalized Solutions",
      ],
      best: false,
    },
  ];

  

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Pre-Header Section */}
      <div className="bg-blue-800 py-2 text-center text-xs sm:text-sm text-gray-200 px-4">
        <p>🚀 Limited Time Offer: Get 20% off on all Business Plans! Use code "BOCK20" at checkout.</p>
      </div>

      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md py-4 sm:py-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img src="/bock-logo.png" alt="Bock Suite" className="w-10 h-10 sm:w-12 sm:h-12" />
              <h1 className="text-xl sm:text-2xl font-bold pl-2">Hynorvixx</h1>
            </div>
            <nav className="flex items-center space-x-6 sm:space-x-8 text-base">
              <a href="#" className="hover:text-blue-400 transition py-2">Home</a>
              <a href="#features" className="hover:text-blue-400 transition py-2">Features</a>
              <a href="#pricingPlans" className="hover:text-blue-400 transition py-2">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900/70 to-gray-900/70 text-center py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-20 z-0"></div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-5 text-white">
              Revolutionize Your Workflow
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto px-4"
            >
              Experience the ultimate suite of tools that streamline workflows, foster collaboration, and secure your data—all in one seamless platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-6 px-4"
            >
              <button className="bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hover:bg-gray-700 transition transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        {/* Callout Section */}
        <section className="py-12 sm:py-16 bg-gray-900 text-center">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">Trusted Users</h3>
                <p className="text-gray-400">Trusted by teams and organizations.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-green-400">99.99% Uptime</h3>
                <p className="text-gray-400">Enterprise-grade reliability and performance.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">5-Star Support</h3>
                <p className="text-gray-400">Dedicated support to ensure your success.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="py-16 sm:py-20 text-center" id="features">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Suite</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow hover:shadow-lg transition group"
              >
                <div className="mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 md:px-8 py-16 sm:py-20 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Why Choose Bock Suite?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-900 p-8 "
            >
              <div className="flex justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-5">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 md:px-8 py-16 sm:py-20 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Flexible Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`
                p-8 rounded-lg border transition 
                ${plan.best
                  ? 'bg-blue-900/30 border-blue-600 scale-105'
                  : 'bg-gray-900 border-gray-800'}
              `}
            >
              {plan.best && (
                <div className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center">
                    <Check className="text-green-500 mr-2" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`
                w-full py-3 rounded-lg transition
                ${plan.best
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-800 hover:bg-gray-700'}
              `}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>
      

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-4">
                <Rocket className="text-blue-400 mr-2" size={24} />
                <h4 className="text-xl font-bold">Hynorvixx</h4>
              </div>
              <p className="text-gray-400">
                Empowering teams with integrated productivity tools
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Suite</h4>
              <ul className="space-y-2">
                {["Bock Docs", "Bock Meet", "Bock Drive"].map((product) => (
                  <li key={product}>
                    <a href="#" className="text-gray-400 hover:text-white transition">{product}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/BockBH" className="text-gray-400 hover:text-white transition">
                  <Twitter size={24} />
                </a>
                <a href="https://www.instagram.com/bockbharath?igsh=b21ha21ycWx3eWxk" className="text-gray-400 hover:text-white transition">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/people/Bock/61555404186214/" className="text-gray-400 hover:text-white transition">
                  <Facebook size={24} />
                </a>
                <a href="https://www.linkedin.com/company/bockbharth/" className="text-gray-400 hover:text-white transition">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.youtube.com/@bockbharath" className="text-gray-400 hover:text-white transition">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 border-t border-gray-800 pt-8">
            <p className="text-gray-400">© 2024 Hynorvixx. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BockSuiteLandingPage;
