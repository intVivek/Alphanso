import './App.css'
import { TodoProvider } from './context/TodoContext'
import Todo from './pages/Todo'

function App() {

  return (
    <TodoProvider>
      <Todo/>
    </TodoProvider>
  )
}

export default App
