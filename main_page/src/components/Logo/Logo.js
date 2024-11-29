import './Logo.css'

function Logo() {
    return (
        <section>
            <object data="/pictures/logo/MTS_logo.svg" type="image/svg+xml" alt="MTS logo"/>

            <picture>
                <source srcSet="/pictures/logo/ITMO_logo.webp" type="image/webp"/>
                <source srcSet="/pictures/logo/ITMO_logo.png" type="image/png"/>
                <img src="/pictures/logo/ITMO_logo.jpg" alt="ITMO logo"/>
            </picture>

            <object data="/pictures/logo/Polytech_logo.svg" type="image/svg+xml" alt="Polytech logo"/>
        </section>
    );
  }

export default Logo
  