import style from './Footer.module.sass'

function Footer () {
    // style
    let {footer, inner, copyright} = style
    return (
        <footer className={footer}>
            <div className="container">
                <div className={inner}>
                    <p className={copyright}>made with love</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;