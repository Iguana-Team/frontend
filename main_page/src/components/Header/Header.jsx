import './Header.css'

function Header({ onLogout }) {
    return (
        <div>
            <div className="header">
                <object data="/img/logo/MTS_logo.svg" type="image/svg+xml" alt="MTS logo"/>
                <img className='profile_picture' src='/img/portrait/portrait.webp' alt='profile picture'/>
            </div>
            <div>
                <h1>Поиск коллег</h1>
            </div>
        </div>
    );
  }

export default Header
  