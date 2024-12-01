import './Header.css'

function Header() {
    return (
        <div>
            <div className="header">
                <object data="/img/logo/MTS_logo.svg" type="image/svg+xml" alt="MTS logo"/>
                <img src='/img/portrait/portrait.jpg' alt='profile picture'/>
            </div>
            <div>
                <h1>Поиск коллеги</h1>
            </div>
        </div>
    );
  }

export default Header
  