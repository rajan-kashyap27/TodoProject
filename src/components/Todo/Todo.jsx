import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
const reactTodoData = "reactTodo";
const Todo = () => {
  // use this state to display data into new array
  const [task, setTask] = useState(() => {
    const todoRaw = localStorage.getItem(reactTodoData);
    return todoRaw ? JSON.parse(todoRaw) : [];
  });
  const handleOnSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    // Agar inputValue empty hai ya false hai, to function ko yahin rok do.
    if (!content) return;

    // if (task.includes(inputValue)) return;
    const checkContentMatched = task.find(
      (currItem) => currItem.content === content
    );
    if (checkContentMatched) return;
    // spread operatror ka ue karke previous item ko bhi display karega
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };
  // Add data localstorage
  useEffect(() => {
    localStorage.setItem(reactTodoData, JSON.stringify(task));
  }, [task]); // Sirf jab task change hoga tabhi chalega

  // delent single item into the list
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currItem) => currItem.content !== value);
    setTask(updatedTask);
  };
  // dlete all item into the list

  const handleDeleteTodoList = () => {
    setTask([]);
  };
  // check and uncheck toto list

  const handleCheckTodo = (content) => {
    const updateTask = task.map((currItem) => {
      if (currItem.content === content) {
        return { ...currItem, checked: !currItem.checked };
      } else {
        return currItem;
      }
    });
    setTask(updateTask);
  };

  return (
    <>
      <header className="heading">Todo List</header>
      <TodoDate />
      <div className="form">
        <TodoForm onAddTodo={handleOnSubmit} />
        <div>
          <ul className="uList">
            {task.map((currItem) => {
              return (
                <TodoList
                  key={currItem.id}
                  data={currItem.content}
                  checked={currItem.checked}
                  onDelete={handleDeleteTodo}
                  checkTodo={handleCheckTodo}
                />
              );
            })}
          </ul>
        </div>

        <div>
          <button className="clear-btn" onClick={handleDeleteTodoList}>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;