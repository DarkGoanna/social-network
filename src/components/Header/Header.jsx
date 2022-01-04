import style from './Header.module.sass'
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';

function Header (props) {
    // style
    const { header, inner } = style;

    // props
    const {isAuthorized, name, id} = props;

    return (
        <header className={header}>
            <div className="container">
                <div className={inner}>
                    <Logo/>
                    <Menu/>
                    <div>
                        {isAuthorized ? 
                            <NavLink to={`/profile/${id}`}>{name}</NavLink> : 
                            <NavLink to={'/login'}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;