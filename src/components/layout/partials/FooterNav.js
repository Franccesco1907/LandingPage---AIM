import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="#0">Ayuda</Link>
        </li>
        <li>
          <Link to="#0">Política de privacidad</Link>
        </li>
        <li>
          <Link to="#0">Política de cookies</Link>
        </li>
        <li>
          <Link to="#0">Configuración de Cookies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;