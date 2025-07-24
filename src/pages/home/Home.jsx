import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import styles from './home.module.css'

function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <button className={styles.btn}><i class="fa-solid fa-play"></i></button>
            <h1>TRUE FITNESS - ПРЕМИУМ <br /> ТРЕНАЖЕРЫ ИЗ США</h1>
          </div>
        </section>
        <section className={styles.true}>
          <div className={styles.container}>
            <h1>TRUE - ведущий мировой <br /> производитель премиального фитнес <br /> оборудования</h1>
          </div>
        </section>
        <section className={styles.fitness}>
          <div className={styles.container}>
            <div>
              <h1>TRUE <br /> <span>FITNESS</span></h1>
              <h3>Современное и <br /> надежное <br /> оборудование для <br /> фитнес-клубов</h3>
              <h2>КАРдио <br /> тренажеры <i class="fa-solid fa-right-long"></i></h2>
            </div>
            <img src="./home2.png" alt="" />
          </div>
        </section>
        <section className={styles.service}>
            <div>
              <img src="./home3.png" alt="" />
              <div className={styles.gg}>
                <h1>ВЫСОКОЕ КАЧЕСТВО И <br /> НАДЕЖНОСТЬ</h1>
                <hr />
                <p>Высокое качество тренажеров - это визитная карточка <br /> TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на <br /> кардиотренажеры.</p>
              </div>
            </div>
            <div>
              <div className={styles.gg}>
                <h1>ВЫСОКОЕ КАЧЕСТВО И <br /> НАДЕЖНОСТЬ</h1>
                <hr />
                <p>Высокое качество тренажеров - это визитная карточка <br /> TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на <br /> кардиотренажеры.</p>
              </div>
              <img src="./home4.png" alt="" />
            </div>
        </section>
        <section className={styles.email}>
            <div className={styles.container}>
              <div className={styles.inp}>
                  <h1>Получите эксклюзивное <br /> предложение на тренажеры <br /> TRUE FITNESS</h1>
                  <p>Мы будем рады проконсультировать Вас и помочь с <br /> подбором оборудования</p>
                  <input type="text" placeholder='имя' /> <br />
                  <input type="text" placeholder='email' /> <br />      
                  <input type="text" placeholder='+998-77-777-77-77' /> <br />
                  <button className={styles.btn1}>ОТПРАВИТЬ</button>
                  <h4>Нажимая на кнопку, вы даете согласие на обработку <br /> персональных данных и соглашаетесь c политикой <br /> конфиденциальности</h4>
              </div>
            </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default Home