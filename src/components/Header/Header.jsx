import classes from './Header.module.css'
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

function Header () {
  return (
    <header className={classes.header}>
        <div className="container">
            <div className={classes.inner}>
                <Logo/>
                <Menu/>
            </div>
        </div>
    </header>
    );
}

export default Header;