import style from './Home.module.sass'

function Home (props) {
  // style
  let {home} = style;
  return (
    <section className={home}>
      <h1>HOME PAGE</h1>
    </section>
  )
}

export default Home