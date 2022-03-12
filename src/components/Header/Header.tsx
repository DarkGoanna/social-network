import style from './Header.module.sass'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import { NavLink } from 'react-router-dom'
import logoutIcon from '../../images/logout.svg'
import { FC } from 'react'

type HeaderType = {
    isAuthorized: boolean
    name: string | null
    logout: () => void
}
const Header:FC<HeaderType> = (props) => {
    // props
    const {isAuthorized, name, logout} = props

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.inner}>

                    <div className={style.logo}>
                        <Logo/>
                    </div>

                    <div className={style.menu}>
                        <Menu/>
                    </div>

                    <div>
                        {isAuthorized ? 
                            <div className={style.logoutWrapper}>
                                <NavLink to={'/profile'}>{name}</NavLink>
                                <button className={style.logout} onClick={logout}>
                                    <img src={logoutIcon} alt="Logout" />
                                </button>
                            </div> :
                            <NavLink to={'/login'}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;