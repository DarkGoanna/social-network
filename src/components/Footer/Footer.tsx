import style from './Footer.module.sass'

function Footer () {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.inner}>
                    <p className={style.copyright}>Social Network</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;