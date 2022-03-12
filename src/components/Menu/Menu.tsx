import style from './Menu.module.sass'
import { NavLink } from 'react-router-dom'

function Menu () {
	return (
		<nav>
			<ul className={style.list}>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/dialogs">Dialogs</NavLink></li>
				<li><NavLink to="/people">People</NavLink></li>
			</ul>
		</nav>
	)
}

export default Menu