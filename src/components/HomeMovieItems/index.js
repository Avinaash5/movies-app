import {Link} from 'react-router-dom'

import './index.css'

const HomeMovieItems = props => {
  const {eachMovie} = props
  const {title, posterPath, id} = eachMovie
  return (
    <Link to={`/movies/${id}`} key={id}>
      <li testid="MovieCard" key={id}>
        <img className="thumbnail-img" alt={title} src={posterPath} />
      </li>
    </Link>
  )
}
export default HomeMovieItems
