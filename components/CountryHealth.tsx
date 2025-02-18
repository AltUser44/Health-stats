"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const countryData = [
  {
    name: "United States",
    flag: "🇺🇸",
    population: 331002651,
    lifeExpectancy: 78.5,
    healthcareSpending: 16.9,
    vaccineRate: 66.5,
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    population: 126476461,
    lifeExpectancy: 84.2,
    healthcareSpending: 10.9,
    vaccineRate: 80.2,
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    population: 83783942,
    lifeExpectancy: 81.2,
    healthcareSpending: 11.7,
    vaccineRate: 75.1,
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    population: 212559417,
    lifeExpectancy: 75.5,
    healthcareSpending: 9.5,
    vaccineRate: 81.3,
  },
  {
    name: "India",
    flag: "🇮🇳",
    population: 1380004385,
    lifeExpectancy: 69.4,
    healthcareSpending: 3.5,
    vaccineRate: 64.8,
  },
]

export default function CountryHealth() {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0])
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Country-specific Health Indicators
      </h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {countryData.map((country) => (
          <button
            key={country.name}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              selectedCountry.name === country.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCountry(country)}
          >
            {country.flag} {country.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          className="transition-all duration-200 hover:shadow-lg"
          onMouseEnter={() => setHoveredMetric("population")}
          onMouseLeave={() => setHoveredMetric(null)}
        >
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-100">Population</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {selectedCountry.population.toLocaleString()}
            </p>
            {hoveredMetric === "population" && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Total number of people living in the country
              </p>
            )}
          </CardContent>
        </Card>
        <Card
          className="transition-all duration-200 hover:shadow-lg"
          onMouseEnter={() => setHoveredMetric("lifeExpectancy")}
          onMouseLeave={() => setHoveredMetric(null)}
        >
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-100">Life Expectancy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {selectedCountry.lifeExpectancy} years
            </p>
            {hoveredMetric === "lifeExpectancy" && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Average number of years a newborn is expected to live
              </p>
            )}
          </CardContent>
        </Card>
        <Card
          className="transition-all duration-200 hover:shadow-lg"
          onMouseEnter={() => setHoveredMetric("healthcareSpending")}
          onMouseLeave={() => setHoveredMetric(null)}
        >
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-100">Healthcare Spending</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">% of GDP</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {selectedCountry.healthcareSpending}%
            </p>
            {hoveredMetric === "healthcareSpending" && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Percentage of GDP spent on healthcare</p>
            )}
          </CardContent>
        </Card>
        <Card
          className="transition-all duration-200 hover:shadow-lg"
          onMouseEnter={() => setHoveredMetric("vaccineRate")}
          onMouseLeave={() => setHoveredMetric(null)}
        >
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-100">COVID-19 Vaccination Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{selectedCountry.vaccineRate}%</p>
            {hoveredMetric === "vaccineRate" && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Percentage of population fully vaccinated against COVID-19
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

