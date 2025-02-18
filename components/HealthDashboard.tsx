"use client"

import { useState } from "react"
import GlobalHealth from "./GlobalHealth"
import VaccinationProgress from "./VaccinationProgress"
import LifeExpectancy from "./LifeExpectancy"
import HealthcareAccess from "./HealthcareAccess"
import CountryHealth from "./CountryHealth"
import ThemeToggle from "./ThemeToggle"

export default function HealthDashboard() {
  const [activeTab, setActiveTab] = useState("global")

  const tabs = [
    { id: "global", label: "Global Health" },
    { id: "vaccination", label: "Vaccination Progress" },
    { id: "lifeExpectancy", label: "Life Expectancy" },
    { id: "healthcare", label: "Healthcare Access" },
    { id: "country", label: "Country Health" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Global Health Progress Dashboard</h1>
        <ThemeToggle />
      </div>
      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-700 text-blue-500 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-200">
        {activeTab === "global" && <GlobalHealth />}
        {activeTab === "vaccination" && <VaccinationProgress />}
        {activeTab === "lifeExpectancy" && <LifeExpectancy />}
        {activeTab === "healthcare" && <HealthcareAccess />}
        {activeTab === "country" && <CountryHealth />}
      </div>
    </div>
  )
}

