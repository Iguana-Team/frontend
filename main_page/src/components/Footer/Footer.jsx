import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column left">
          <ul className="footer-list">
            <li className="footer-list-item">Веб-приложение подготовила команда Игуана:</li>
            <li className="footer-list-item">Крикунов Олег</li>
            <li className="footer-list-item">Литвинов Иван</li>
            <li className="footer-list-item">Попов Алексей</li>
            <li className="footer-list-item">Туркин Николай</li>
            <li className="footer-list-item">Ведерников Антон</li>
          </ul>
        </div>

        <div className="footer-column right">
          <nav className="footer-nav">
            <a
              href="https://mts-link.ru/privacy-policy/"
              className="footer-link"
            >
              Политика конфиденциальности
            </a>
            <a
              href="https://opensource.org/license/bsd-3-clause"
              className="footer-link"
            >
              Условия использования
            </a>
          </nav>
        </div>
      </div>
      <div>
      <p className='copyright'>&copy; {currentYear} MTS Link. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
