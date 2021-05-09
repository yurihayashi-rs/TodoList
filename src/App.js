import React,{useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {

  //USE STATE
  const[ inputText, setInputText ] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE eFFECT
  useEffect(() => {
    filterHandler();
  },[todos,status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default: //上記のどれにも一致しなかった時の処理
        setFilteredTodos(todos);
      break;

    }
  }

  return (
    <div>
      <form>
        <h1>Yuri's Todo</h1>
      </form>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
        
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
