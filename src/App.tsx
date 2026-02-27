import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const projects = [
    { id: '1', name: 'Project A', color: '#1B8C3E' },
    { id: '2', name: 'Project B', color: '#FF6B6B' },
    { id: '3', name: 'Project C', color: '#4ECDC4' }
  ]

  return (
    <div className="App">
      <Header title="Taskflow" onMenuClick={handleMenuClick} />
      <Sidebar projects={projects} isOpen={isMenuOpen} />
      <main>
        <h2>Welcome to Taskflow</h2>
        <p>Your task management application</p>
      </main>
    </div>
  )
}

export default App