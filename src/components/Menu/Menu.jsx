import classes from './Menu.module.css'
import { NavLink } from 'react-router-dom'


function Menu (props) {
    return (
        <nav>
            <ul className={classes.list}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dialogs">Dialogs</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu