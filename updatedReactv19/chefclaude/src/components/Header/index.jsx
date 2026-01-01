import chefClaudeLogo from '../../assets/chef-claude-icon.png'
import './index.css'

const Header = () => {
  return (
    <header>
      <div className="header-container">
      <img src={chefClaudeLogo} alt="" className='logo-img' />
        <span className='logo-text'>Chef Claude</span>
      </div>
    </header>
  )
}

export default Header
