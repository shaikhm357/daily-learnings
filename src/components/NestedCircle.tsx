import { useState } from "react";

// recursive component
const Circle = ({ depth, maxDepth }) => {
  if (depth > maxDepth) return null;
  const size = (maxDepth - depth + 1) * 40;
  const colors = ["red", "green", "blue", "cyan", "yellow"];
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid ${colors[depth % colors.length]}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Circle depth={depth + 1} maxDepth={maxDepth} />
    </div>
  );
};

// main componenet
const NestedCircle = () => {
  const [count, setCount] = useState("0");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <input
        type="number"
        min={1}
        max={10}
        value={count}
        onChange={(e) => setCount(e.target.value)}
        width={200}
      />
      <div style={{ marginTop: 20 }}>
        <Circle depth={1} maxDepth={Number(count)} />
      </div>
    </div>
  );
};

export default NestedCircle;
