import { useRef, useEffect } from "react";

export default function Wheel({ values, value, onChange }) {
  const ref = useRef(null);
  const ITEM_HEIGHT = 40;
  const LOOP = values.length;

  useEffect(() => {
    const el = ref.current;
    el.scrollTop = LOOP * ITEM_HEIGHT;
  }, []);

  const handleScroll = () => {
    const el = ref.current;
    const index = Math.round(el.scrollTop / ITEM_HEIGHT) % LOOP;
    onChange(values[index]);

    // snap back to center loop
    if (el.scrollTop < ITEM_HEIGHT) {
      el.scrollTop += LOOP * ITEM_HEIGHT;
    }
    if (el.scrollTop > LOOP * ITEM_HEIGHT * 2) {
      el.scrollTop -= LOOP * ITEM_HEIGHT;
    }
  };

  return (
    <div className="wheel-container">
      <div
        ref={ref}
        onScroll={handleScroll}
        className="wheel"
      >
        {[...values, ...values, ...values].map((v, i) => (
          <div
            key={i}
            className={`wheel-item ${v === value ? "active" : ""}`}
          >
            {v}
          </div>
        ))}
      </div>
      <div className="wheel-mask" />
    </div>
  );
}
