import globe from '../../assets/globe.png'
import './index.css'


const Header = () => {
  return (
    <header>
    <div>
      <img src={globe} alt="Globe Image" className='globe' />
      </div>
      <h1>my travel journal</h1>
    </header>
  )
}

export default Header
