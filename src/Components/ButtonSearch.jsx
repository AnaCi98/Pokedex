import { Link } from 'react-router-dom';

function ButtonSearch() {
  return (
    <div className="buttonSearch">
      <Link to="/search-pokemon">
        <div className="navigateSearch">
          <img
            className="iconSearch"
            src="../assets/search.png"
            alt="search"
          />
        </div>
      </Link>
    </div>
  );
}
export default ButtonSearch;
