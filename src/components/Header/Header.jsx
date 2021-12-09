import style from './Header.module.sass'
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

function Header () {
    // style
    let { header, inner } = style;

    return (
        <header className={header}>
            <div className="container">
                <div className={inner}>
                    <Logo/>
                    <Menu/>
                </div>
            </div>
        </header>
    );
}

export default Header;