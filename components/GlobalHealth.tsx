import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useTheme } from "../contexts/ThemeContext"

const data = [
  { year: 2000, childMortality: 75.8, maternalMortality: 341 },
  { year: 2005, childMortality: 63.0, maternalMortality: 288 },
  { year: 2010, childMortality: 52.0, maternalMortality: 246 },
  { year: 2015, childMortality: 42.4, maternalMortality: 216 },
  { year: 2020, childMortality: 37.0, maternalMortality: 193 },
]

export default function GlobalHealth() {
  const { theme } = useTheme()

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Global Health Improvements</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Over the past two decades, there have been significant improvements in global health indicators. This chart
        shows the decline in child mortality (deaths per 1,000 live births) and maternal mortality (deaths per 100,000
        live births) rates worldwide.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#374151" : "#e5e7eb"} />
          <XAxis dataKey="year" stroke={theme === "dark" ? "#9ca3af" : "#4b5563"} />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip
            contentStyle={{
              backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
              borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
            }}
          />
          <Legend wrapperStyle={{ color: theme === "dark" ? "#9ca3af" : "#4b5563" }} />
          <Bar yAxisId="left" dataKey="childMortality" name="Child Mortality" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="maternalMortality" name="Maternal Mortality" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

