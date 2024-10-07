import './App.css'
import Input from './components/Input/Input'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (
    <TodoProvider>
      <div />
      <Input/>
    </TodoProvider>
  )
}

export default App
