import { Link } from "react-router-dom";
import "../styles/CategoryGridItem.css";
export default function CategoryGrid({ categories }) {
  const items = categories.flatMap((g) => g.items);
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}
    >
      {items.map((c) => (
        <Link
          className="CategoryGridItem"
          key={c.slug}
          to={`/search?category=${c.slug}`}
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}
