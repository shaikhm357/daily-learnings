import { useState } from "react";

const CheckBoxGroup = () => {
  // create state having check options options
  const [items, setItems] = useState([
    { id: 1, label: "angular", checked: false },
    { id: 2, label: "react", checked: true },
    { id: 3, label: "node", checked: false },
  ]);

  // figure out if all are checked
  const allSelected = items.every((item) => item.checked);
  // filter selected items
  const selectedItem = items.filter((item) => item.checked);

  // toggle all, get all options checked if all are not checked
  const toggleAll = () => {
    let newState = !allSelected;
    setItems((prev) => prev.map((item) => ({ ...item, checked: newState })));
  };

  // check opttons manually based on id
  const handleToggle = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        return item.id == id ? { ...item, checked: !item.checked } : item;
      })
    );
  };

  return (
    <div>
      {items.map((item) => (
        <label htmlFor="" key={item.id} style={{ display: "block" }}>
          <input
            type="checkbox"
            name={item.label}
            checked={item.checked}
            onChange={() => handleToggle(item.id)}
          />
          {item.label}
        </label>
      ))}
      <button onClick={toggleAll} disabled={allSelected}>
        {allSelected ? "All Selected" : "Select All"}
      </button>
      <p>
        Selected ({selectedItem.length}):{" "}
        {selectedItem.map((item) => item.label).join(", ")}
      </p>
    </div>
  );
};

export default CheckBoxGroup;
