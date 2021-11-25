import classes from './Logo.module.css'

function Logo (props) {
  return (
    <div className={classes.logo}>
      <a href="/">
        <img src="http://assets.stickpng.com/images/585990234f6ae202fedf28cf.png" alt="logo" />
      </a>
    </div>
  )
}

export default Logo