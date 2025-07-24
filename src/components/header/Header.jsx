
import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
  return (
    <div className='container'>
        <header className={styles.header}>
              <img src="./logo.png" alt="logo" />
              <hr />
              <nav>
                <ul className={styles.menu}>
                
                    <Link to='/'>Home</Link>
                    <Link to='/brand'>Brand</Link>
                    <Link to='/advantages'>Advantages</Link>
                    <Link to='/club'>Club</Link>
                    <Link to='/contact'>Contact</Link>
                   
                </ul>
              </nav>
        </header>
    </div>
  )
}

export default Header