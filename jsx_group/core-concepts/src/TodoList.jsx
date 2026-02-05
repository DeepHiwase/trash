import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build an app", done: false },
  ]);

  console.log("Rendering with items: ", items);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: "Deploy to production",
      done: false,
    };
    setItems(items.concat(newItem)); //✅
    // setItems([...items, newItem]);// ✅
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((i) => i.id !== id);
    setItems(updatedItems);
  };

  const toggleDone = (id) => {
    setItems(
      items.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            done: !i.done,
          };
        } else {
          return i;
        }
      })
    );
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              {item.text}
            </span>
            <button onClick={() => toggleDone(item.id)}>
              {item.done ? "Mark as not done" : "Mark as done"}
            </button>
            <button onClick={() => removeItem(item.id)}>Remove Item</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add item</button>
    </div>
  );
};
