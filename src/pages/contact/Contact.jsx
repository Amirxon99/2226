import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import styles from './contact.module.css'

function Contact() {
  return (
    <div>
      <Header></Header>
      <main>
        <section className={styles.hero}>
          <div className="container">
            <p>КОНТАКТЫ</p>
            <h1>ШОУ РУМ TRUE В ТАШКЕНТЕ </h1>
            <h4>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В  ТАШКЕНТ СИТИ, BOULEVARD</h4>
          </div>
        </section>
        <div className="container">

          <div className={styles.k}>
            <img src="1.png" alt="dfv" />
          </div>
        </div>
        <section className={styles.hero2}>
          <div className={styles.container}>
            <img src="2.png" alt="sdf" />
            <div className={styles.tex}>
              <h2>Официальный Дистрибьютер в Узбекистане - ProWellness </h2>
              <h5>+998 (90)-606-66-66</h5>
              <h6>INFO@PROWELLNESS.UZ</h6>
              <h3>Адрес: Ташкент Сити, Булевард , <br /> ул. Фурката 2А</h3>
              <h2>ПН-СБ с 9:00-19:00
                ВС НЕ РАБОЧИЙ</h2>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Contact