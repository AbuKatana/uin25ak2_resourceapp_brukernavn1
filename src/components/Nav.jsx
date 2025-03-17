import { NavLink } from 'react-router-dom';

export default function Nav() {
  const categories = ["html", "css", "javascript", "react", "sanity"];
  
  return (
    <nav id="categories">
      {categories.map((category) => (
        <NavLink
          key={category}
          to={`/${category}`}
          className={({ isActive }) => 
            `categorybtn ${isActive ? 'active' : ''}`
          }
        >
          {category.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
}