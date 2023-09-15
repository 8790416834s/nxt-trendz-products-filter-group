import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList} = props

  return (
    <div className="filters-container">
      <h2>Category</h2>
      <ul className="filter-group-container">
        {categoryOptions.map(each => (
          <li key={each.categoryId} className="filter-item">
            {each.name}
          </li>
        ))}
      </ul>
      <h2>Ratings</h2>
      <ul>
        {ratingsList.map(each => (
          <li key={each.ratingId} className="rating-item">
            <img src={each.imageUrl} alt="rating" className="rating-img" />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default FiltersGroup
