import './App.css'
import Button from './components/Button'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (
    <TodoProvider>
      <Header/>
      <Input/>
      <Button>Add Task</Button>
    </TodoProvider>
  )
}

export default App
