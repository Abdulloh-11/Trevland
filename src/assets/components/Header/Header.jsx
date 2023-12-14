import '../Header/Header.scss'

export default function Header() {
  return (
    <div className="nav">
    <h3 className="logo">
    Trevland
    </h3>
    <ul className='list'>
      <li className='list_nav'><a href="#">Home</a></li>
      <li className='list_nav'><a href="#">Location</a></li>
      <li className='list_nav'><a href="#">Blog</a></li>
      <li className='list_nav'><a href="#">About</a></li>
      <li className='list_nav'><a href="#">Contact</a></li>

     
    </ul>

    <button><a href="#" className='btn2'>Booking now</a></button>
    
    </div>
  )
}
