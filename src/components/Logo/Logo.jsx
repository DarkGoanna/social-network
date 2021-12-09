import style from './Logo.module.sass'

function Logo (props) {
  // style
  let {logo} = style;

  return (
    <div className={logo}>
      <a href="/">
        <img src="http://assets.stickpng.com/images/585990234f6ae202fedf28cf.png" alt="logo" />
      </a>
    </div>
  )
}

export default Logo