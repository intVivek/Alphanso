import './App.css'
import Button from './components/Button'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import TodosList from './components/TodosList'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (
    <TodoProvider>
      <Header/>
      <TodosList/>
      <Input/>
      <Button>Add Task</Button>
    </TodoProvider>
  )
}

export default App
