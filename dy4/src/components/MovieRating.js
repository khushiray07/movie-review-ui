export default function MovieRating({ rating }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <h3>Current Rating: {rating || "Not rated yet"}</h3>
      <div style={{ fontSize: 24 }}>
        {Array.from({ length: 5 }, (_, i) => (i < rating ? "★" : "☆"))}
      </div>
    </div>
  );
}
