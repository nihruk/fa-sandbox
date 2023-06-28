import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MainNavigation() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav id="main-navigation" className="navbar navbar-expand-lg navbar-light bg-light bg-grey-20">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={currentRoute === '/' ? 'active nav-link' : 'nav-link'} href="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  currentRoute === '/awards-and-outputs' ||
                  currentRoute === '/awards-and-outputs/awards/[awardId]' ||
                  currentRoute === '/awards-and-outputs/outputs/[outputId]'
                    ? 'active nav-link'
                    : 'nav-link'
                }
                href="/awards-and-outputs">
                Awards and Outputs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={currentRoute === '/apply-for-funding' ? 'active nav-link' : 'nav-link'}
                aria-current="page"
                href="#">
                Apply for funding
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  currentRoute === '/contact-and-feedback' ? 'active nav-link' : 'nav-link'
                }
                href="#">
                Contact and feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
