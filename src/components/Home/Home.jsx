import style from './Home.module.sass';
import Auth from '../Auth/Auth';

function Home (props) {
  // style
  let {home} = style;
  return (
    <section className={home}>
      <h1>HOME PAGE</h1>
      <Auth/>
    </section>
  )
}

export default Home