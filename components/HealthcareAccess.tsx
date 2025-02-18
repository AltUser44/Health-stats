import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { region: "North America", access: 90 },
  { region: "Europe", access: 95 },
  { region: "South America", access: 75 },
  { region: "Asia", access: 65 },
  { region: "Africa", access: 50 },
  { region: "Oceania", access: 85 },
]

export default function HealthcareAccess() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Healthcare Access by Region</h2>
      <p className="mb-4">
        Access to healthcare varies significantly across different regions of the world. This chart shows the estimated
        percentage of the population with access to essential health services in each region.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="access" fill="#8884d8" name="Access to Healthcare (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

