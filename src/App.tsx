import { useState } from "react";
import Typography from "@/components/Typography";
import "@/css/app.css";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = () => {
    if (inputValue === "") return;

    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  return (
    <>
      <div className="main-content">
        <Typography>TODO LIST</Typography>

        <input
          type="text"
          className="custom-input"
          placeholder="add todos..."
          value={inputValue}
          onChange={e =>setInputValue(e.target.value)}
        />

        <button onClick={addTodo}>ADD</button>

        <div className="list-of-todos">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              {todo}

              <div className="todo-actions">
                <button
                  onClick={() => {
                    setTodos(todos.filter((_, i) => i !== index));
                  }}
                >
                  DELETE
                </button>

                <button
                  onClick={() => {
                    const newTodo = prompt("Edit todo", todo);

                    if (todos.filter(t => t === newTodo).length > 0) {
                      alert("Todo already exists");
                      return;
                    }

                    if (newTodo) {
                      setTodos(todos.map((t, i) => (i === index ? newTodo : t)));
                    }
                  }}
                >
                  EDIT
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      
    </>
  )
};

export default App;
