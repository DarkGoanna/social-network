import classes from './Footer.module.css'

function Footer () {
  return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.inner}>
                    <p className={classes.copyright}>made with love</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;