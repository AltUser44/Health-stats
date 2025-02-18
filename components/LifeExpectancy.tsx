import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { year: 1960, global: 52.6, developed: 68.2, developing: 46.3 },
  { year: 1970, global: 58.6, developed: 71.1, developing: 53.0 },
  { year: 1980, global: 62.9, developed: 73.7, developing: 58.1 },
  { year: 1990, global: 65.4, developed: 75.0, developing: 61.7 },
  { year: 2000, global: 67.7, developed: 77.2, developing: 64.6 },
  { year: 2010, global: 70.8, developed: 79.5, developing: 68.4 },
  { year: 2020, global: 72.8, developed: 81.3, developing: 70.7 },
]

export default function LifeExpectancy() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Global Life Expectancy Trends</h2>
      <p className="mb-4">
        Life expectancy has been steadily increasing worldwide. This chart shows the trends in global life expectancy,
        as well as the differences between developed and developing countries.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="global" stroke="#8884d8" name="Global" />
          <Line type="monotone" dataKey="developed" stroke="#82ca9d" name="Developed Countries" />
          <Line type="monotone" dataKey="developing" stroke="#ffc658" name="Developing Countries" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

