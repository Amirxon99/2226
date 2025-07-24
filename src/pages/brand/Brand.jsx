import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import styles from './brand.module.css'

function Brand() {
  return (
    <div>
      <Header></Header>
      <main className='container'>
        <div className={styles.text}>
          <h5>О НАШЕМ БРЕНДЕ</h5>
          <h1>TRUE - СОВЕРШЕННОE <br /> ФИТНЕС-ОБОРУДОВАНИЕ</h1>
        </div>
        <section className={styles.section1}>
          <div className={styles.div}>
            <p><span>     Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей преданности клиентам и их потребностям.</span>
            </p><br /><br />
            <p>Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.</p><br /><br />
            <p>Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.</p><br /><br />
            <p><span>     Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей преданности клиентам и их потребностям.</span><br /><br />
            </p>
          </div>
        </section>
        <h1 className={styles.hh} >Наши инновации</h1>
        <section>
          <div className={styles.card}>
            <img src="./oneyni.png" alt="" />
            <h2>Тренажер Лестница TRUE <br /> Palisade</h2>
          </div>
          <div className={styles.card}>
            <img src="./oneyni.png" alt="" />
            <h2>Тренажер Лестница TRUE <br /> Palisade</h2>
          </div>
          <div className={styles.card}>
            <img src="./oneyni.png" alt="" />
            <h2>Тренажер Лестница TRUE <br /> Palisade</h2>
          </div>
          <div className={styles.card}>
            <img src="./oneyni.png" alt="" />
            <h2>Тренажер Лестница TRUE <br /> Palisade</h2>
          </div>
          <div className={styles.card}>
            <img src="./oneyni.png" alt="" />
            <h2>Тренажер Лестница TRUE <br /> Palisade</h2>
          </div>
          <div className={styles.card}>
            <img src="./oneyni.png" alt="" />
            <h2>Тренажер Лестница TRUE <br /> Palisade</h2>
          </div>
        </section>
        <div className={styles.lll}>
          <div className={styles.lox}>
            <p>TRUE FITNESS</p>
            <h1 className={styles.k}>Получите<br /><span> эксклюзивное <br /> предложение</span>  на <br /> тренажеры <span>  TRUE FITNESS</span></h1>
            <br />   <p>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Brand