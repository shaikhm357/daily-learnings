import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // create event listerner resize
    const handleResize = () => {
      setSize({ width: innerWidth, height: innerHeight });
    };
    addEventListener("resize", handleResize);

    // cleanup
    return () => removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const LiveWindowSize = () => {
  const { width } = useWindowSize();
  return (
    <div style={{ background: width > 500 && "yellow" }}>
      <p>{width}</p>
    </div>
  );
};

export default LiveWindowSize;
