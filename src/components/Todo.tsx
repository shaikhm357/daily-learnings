import { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    case "EDIT":
      return state.map((todo) => {
        if (todo.id == action.id) {
          return { ...todo, text: action.text };
        }
      });
    case "DEL":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputTodo, setInputTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    // console.log("clicked Add");
    if (!inputTodo.trim()) return;
    dispatch({ type: "ADD", text: inputTodo.trim() });
    setInputTodo("");
  };

  const filtered = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });
  console.log(filtered);

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      dispatch({ type: "EDIT", id, text: editText.trim() });
    }
    setEditingId(null);
  };

  return (
    <div>
      {/* input box for todos  */}
      <div>
        <input
          type="text"
          name=""
          id=""
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* filter options  */}
      <div>
        {["all", "active", "completed"].map((fil) => (
          <button
            onClick={() => setFilter(fil)}
            key={fil}
            style={{ fontWeight: filter == fil ? "bold" : "normal" }}
          >
            {fil.charAt(0).toUpperCase() + fil.slice(1)}
          </button>
        ))}
      </div>

      {/* list todos  */}
      {filtered.length === 0 ? (
        <p>
          {filter == "all"
            ? "No todos yet. Add one above"
            : `No ${filter} todos.`}
        </p>
      ) : (
        <ul>
          {filtered.map((todo) => (
            <li key={todo.id}>
              {editingId == todo.id ? (
                <>
                  <input
                    type="text"
                    name="editInput"
                    id=""
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
                    autoFocus
                  />
                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                  <button>Cancel</button>
                </>
              ) : (
                <>
                  <span
                    onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
                    style={{
                      cursor: "pointer",
                      paddingRight: "1rem",
                      textDecoration: todo.done ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                  <button onClick={() => handleEdit(todo)}>Edit</button>
                  <button
                    onClick={() => dispatch({ type: "DEL", id: todo.id })}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;

// create input and add button template
// create input state
// create usereducer
// create first action ADD
// dispatch action to add button
// show list
// implement toggle
// create filter template
// shove active filter
