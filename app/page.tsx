import HealthDashboard from "../components/HealthDashboard"
import { ThemeProvider } from "../contexts/ThemeContext"

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <HealthDashboard />
      </main>
    </ThemeProvider>
  )
}

