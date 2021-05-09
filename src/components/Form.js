import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        //インプットの中でイベントが起こるたびにconsoleに記録される
        setInputText(e.target.value);//consoleに値を残す
    }

    const submitTodoHandler = (e) => {
        e.preventDefault(); //勝手に更新されることを防ぐ 更新するのが⏬
        setTodos([　
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("");
    }
 
    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value)
    }


    return (
    <div>
        <form>
        <input 
        value={inputText} //書いたこと
        onChange={inputTextHandler}  //inputで何か変化が起きたら発動する
        type="text" 
        className="todo-input" 
        />
        <button onClick={submitTodoHandler} className="todo-button" type="submit"> 
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    </div>
    )
}

export default Form
