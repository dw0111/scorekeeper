import './Navigation.css'

export default function Navigation({ onNavigate, pages, activeIndex }) {
  return (
    <nav className="Navigation">
      {pages.map((page, index) => (
        <button
          key={page}
          onClick={() => onNavigate(page, index)}
          className={`Navigation__btn ${
            index === activeIndex && 'Navigation__btn--active'
          }`}
        >
          {page}
        </button>
      ))}
    </nav>
  )
}
