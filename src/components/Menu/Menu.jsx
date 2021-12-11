import style from './Menu.module.sass'
import { NavLink } from 'react-router-dom'

function Menu (props) {
	// style
	let {list} = style;

	return (
		<nav>
			<ul className={list}>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/dialogs">Dialogs</NavLink></li>
				<li><NavLink to="/people">People</NavLink></li>
			</ul>
		</nav>
	)
}

export default Menu