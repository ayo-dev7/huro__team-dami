import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <a class="button h-button is-primary">Primary</a>
    </div>
  )
}

export default App
