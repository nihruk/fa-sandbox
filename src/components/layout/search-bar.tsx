import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <section className="full-width-container-wrapper py-5 bg-primary text-white">
      {currentRoute === '/' && (
        <div className="container-md">
          <div className="justify-content-center row">
            <div className="text-center col-xl-7">
              <h1 className="fw-bold text-white">NIHR Funding and Awards</h1>
              <p className="mb-5">
                Search for and analyse information on NIHR supported activity in health and care
                research, including expenditure and research findings
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Visible only on the homepage*/}

      <div className="container">
        <form className="search-component">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div className="input-group input-group-lg">
              <input type="text" className="form-control" placeholder="Search" />
              <button type="button" className="btn-close" disabled aria-label="Close"></button>
              <button type="button" id="search-btn" className="btn btn-btn-outline-secondary">
                <i className="fas fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
        {/* end of form */}

        <div className="search-controls">
          <div className="col">
            <button type="button" role="button" className="csvButton disabled btn btn-primary">
              Download Results
            </button>
            <div role="group" className="dropdown btn-group">
              <button
                type="button"
                id="bg-nested-dropdown"
                aria-expanded="false"
                className="dropdown-toggle btn btn-primary">
                Shortlist
              </button>
            </div>
            <Link href="/advanced-search">
              <button type="button" className="btn btn-primary">
                Advanced Search
              </button>
            </Link>
          </div>
        </div>
        {/* end of search-control */}
      </div>
      {/* end of container */}
    </section>
  );
}
