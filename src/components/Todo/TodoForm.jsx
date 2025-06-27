import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({
    id: "",
    content: "",
    checked: false,
  });

  // inputValue ko is Value se change kardega
  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };
  const handleOnSubmit = (event) => {
    // check karna hai value dene ke bad refresh na ho preventDefault karna hai
    event.preventDefault();

    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <>
      <form className="d-flex" onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};
