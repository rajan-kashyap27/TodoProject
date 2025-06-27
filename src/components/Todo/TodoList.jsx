import { MdCheck, MdDeleteForever } from "react-icons/md";
export const TodoList = ({data, onDelete, checked, checkTodo}) => {
  return (
    <>
      <li  className="items">
        <span className={checked ? "checkList" : "notChecklist"}>{data}</span>
        <div className="buttons">
          <button className="check-btn" onClick={() => checkTodo(data)}>
            <MdCheck />
          </button>
          <button
            className="delete-btn"
            onClick={() => onDelete(data)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </li>
    </>
  );
};
