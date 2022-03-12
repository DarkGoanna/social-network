import style from './Logo.module.sass'
import logo from '../../images/social-network.svg'

function Logo () {
  return (
    <div className={style.logo}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}

export default Logo