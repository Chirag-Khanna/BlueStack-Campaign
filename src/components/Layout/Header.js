import logoImage from '../../assets/logo.png';
import classes from './Header.module.css';

const Header = (props) => {
  return (  
      <div className={classes['header']}>
        <img src={logoImage} alt='Logo!!' />
      </div>
  );
};

export default Header;
