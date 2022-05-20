/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './Home.css';
import './IconMenu.css';
import './Menu.css';
import './ButtonSearch.css';
import Logo from './Logo';
import Menu from './Menu';
import ButtonSearch from './ButtonSearch';

function Home(props) {
  const {
    classInitial, openMenu, closeMenu, modalMenu,
  } = props;
  return (
    <div className="home">
      <div className={`${classInitial}`}>
        <img
          className="iconMenu"
          onClick={() => openMenu()}
          src="../assets/menu.png"
          alt="menu"
        />
      </div>
      <Menu modalMenu={modalMenu} closeMenu={closeMenu} />
      <Logo />
      <div className="welcomePokedex">
        <p className="welcomeText">¡Welcome to the Pokedex!</p>
      </div>
      <ButtonSearch />
    </div>

  );
}
export default Home;
