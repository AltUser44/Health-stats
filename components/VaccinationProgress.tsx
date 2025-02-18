import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Fully Vaccinated", value: 5400000000 },
  { name: "Partially Vaccinated", value: 600000000 },
  { name: "Unvaccinated", value: 2000000000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export default function VaccinationProgress() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Global COVID-19 Vaccination Progress</h2>
      <p className="mb-4">
        The chart below shows the approximate global distribution of COVID-19 vaccination status. These figures are
        constantly improving as vaccination efforts continue worldwide.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

