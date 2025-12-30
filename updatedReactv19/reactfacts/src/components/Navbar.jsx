import Logo from '../assets/react.svg'

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="React Logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  )
}