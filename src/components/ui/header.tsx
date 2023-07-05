import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className="pt-3 pb-3 bg-white main-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Link
                href="/"
                title="National Institute for Health and Care Research (NIHR)"
                className="main-logo">
                <Image
                  src="/national-institute-for-health-and-care-research-nihr-logo.svg"
                  alt="National Institute for Health and Care Research (NIHR)"
                  width={400}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
