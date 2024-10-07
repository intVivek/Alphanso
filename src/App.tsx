import './App.css'
import Button from './components/Button'
import Input from './components/Input/Input'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (
    <TodoProvider>
      <div />
      <Input/>
      <Button>Add Task</Button>
    </TodoProvider>
  )
}

export default App
