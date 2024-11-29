import './Logo.css'

function Logo() {
    return (
        <section>
            <picture>
                <source srcSet="/pictures/logo/MTS_logo.webp" type="image/webp"/>
                <source srcSet="/pictures/logo/MTS_logo.png" type="image/png"/>
                <img src="/pictures/logo/MTS_logo.jpg" alt="MTS logo"/>
            </picture>

            <picture>
                <source srcSet="/pictures/logo/ITMO_logo.webp" type="image/webp"/>
                <source srcSet="/pictures/logo/ITMO_logo.png" type="image/png"/>
                <img src="/pictures/logo/ITMO_logo.jpg" alt="ITMO logo"/>
            </picture>

            <object data="https://www.spbstu.ru/upload/branding/logo_main_sm.svg" type="image/svg+xml" width="125" />
        </section>
    );
  }

export default Logo
  