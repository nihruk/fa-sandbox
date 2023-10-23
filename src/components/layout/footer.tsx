import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-stretch justify-content-between flex-column">
            <ul className="social-media-links mb-3">
              <li>
                <Link href="https://en-gb.facebook.com/OfficialNIHR/" title="Facebook">
                  <i className="fa-brands fa-facebook-f">
                    <span className="visually-hidden">Facebook</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link href="https://www.linkedin.com/company/nihr-research" title="LinkedIn">
                  <i className="fa-brands fa-linkedin-in">
                    <span className="visually-hidden">LinkedIn</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link href="https://twitter.com/NIHRresearch" title="Twitter">
                  <i className="fa-brands fa-twitter">
                    <span className="visually-hidden">Twitter</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link href="https://www.youtube.com/NIHRtv" title="Youtube">
                  <i className="fa-brands fa-youtube">
                    <span className="visually-hidden">Youtube</span>
                  </i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-auto">
            <Link
              href="https://www.gov.uk/government/organisations/department-of-health-and-social-care"
              className="funded-by-department-of-health-and-social-care-logo">
              <Image
                src="/logo-dhsc-reversed.png"
                alt="Logo of the Department of Health & Social Care"
                width={163}
                height={195}
                priority={true}
              />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="bottom-nav">
              <li>© NIHR</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
