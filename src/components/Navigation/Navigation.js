import './Navigation.css'

export default function Navigation({ onNavigate, pages, activeIndex }) {
  return (
    <nav className="Navigation">
      {pages.map((page, index) => (
        <button
          key={page}
          onClick={() => onNavigate(page, index)}
          className={
            index === activeIndex
              ? 'Navigation__btn--active'
              : 'Navigation__btn'
          }
        >
          {page}
        </button>
      ))}
    </nav>
  )
}
