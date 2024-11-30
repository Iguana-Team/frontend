import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column left">
          <p>Участники команды:</p>
          <ul className="footer-list">
            <li className="footer-list-item">Крикунов Олег</li>
            <li className="footer-list-item">Туркин Николай</li>
            <li className="footer-list-item">Ведерников Антон</li>
            <li className="footer-list-item">Литвинов Иван</li>
            <li className="footer-list-item">Попов Алексей</li>
          </ul>
        </div>

        <div className="footer-column footer-center">
          <div className="footer-logo">
            <picture>
              <source srcSet="/img/logo/ITMO_logo.webp" type="image/webp" />
              <source srcSet="/img/logo/ITMO_logo.png" type="image/png" />
              <img
                id="itmo"
                src="/img/logo/ITMO_logo.jpg"
                alt="ITMO logo"
              />
            </picture>

            <object
              id="polytech"
              data="/img/logo/Polytech_logo.svg"
              type="image/svg+xml"
              aria-label="Polytech logo"
            />
          </div>
        </div>

        <div className="footer-column right">
          <nav className="footer-nav">
            <a
              href="https://opensource.org/license/bsd-3-clause"
              className="footer-link"
            >
              Условия использования
            </a>
            <a
              href="https://mts-link.ru/privacy-policy/"
              className="footer-link"
            >
              Политика конфиденциальности
            </a>
          </nav>
          <p>&copy; {currentYear} MTS Link. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
