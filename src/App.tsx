import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <Header title="Taskflow" onMenuClick={handleMenuClick} />
      <main>
        <h2>Welcome to Taskflow</h2>
        <p>Your task management application</p>
      </main>
    </div>
  )
}

export default App