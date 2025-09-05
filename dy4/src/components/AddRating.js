export default function AddRating({ current, onChange }) {
  return (
    <div>
      <p>Rate the movie:</p>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          style={{
            margin: "10px",
            padding: "6px 12px",
            background: current === n ? "black" : "white",
            color: current === n ? "white" : "black",
            border: "1px solid #aaaaaaff",
            cursor: "pointer",
          }}
        >
          {n}
        </button>
      ))}
    </div>
  );
}
