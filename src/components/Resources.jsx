import ressurser from '../resources/ressurser';

export default function Resources({ category }) {
  const filtered = ressurser.filter(item => 
    item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <section className="category-content">
      {filtered.map((res, index) => (
        <div key={index}>
          <h2>{res.title}</h2>
          <ul>
            <li>
              <a href={res.url} target="_blank" rel="noreferrer">
                {res.url}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}
