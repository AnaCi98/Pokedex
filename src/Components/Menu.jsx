/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu(props) {
  const { modalMenu, closeMenu } = props;
  if (!modalMenu) return null;
  return (
    <div className="containerMenu">
      <p onClick={() => closeMenu()} className="closeMenu">X</p>
      <nav className="menu">
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => closeMenu()}>
            <li> Home </li>
          </Link>
          <Link to="/search-pokemon" style={{ textDecoration: 'none' }} onClick={() => closeMenu()}>
            <li> Search </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;
