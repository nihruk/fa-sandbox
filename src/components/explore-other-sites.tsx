import Link from "next/link";

export default function ExploreOtherSites() {
  return (
    <>
      <section id="explore-other-sites" className="bg-white">
        <div className="container overflow-hidden">
          <h5 className="display-2">Explore our other sites</h5>
          <div className="row gy-3 gy-sm-3 g-md-4 g-lg-5">
            <div className="col-lg-4">
              <div className="wrapper">
                <h6 className="fw-bold">NIHR</h6>
                <ul>
                  <li>
                    <Link href="#">Research funding</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                  <li>
                    <Link href="#">Career development</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                  <li>
                    <Link href="#">Infrastructure funding</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                  <li>
                    <Link href="#">Funding opportunities</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wrapper">
                <h6 className="fw-bold">NIHR Open Data</h6>
                <ul>
                  <li>
                    <Link href="#">About HIHR Open Data</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                  <li>
                    <Link href="#">NIHR Data</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                  <li>
                    <Link href="#">NIHR Awards</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                  <li>
                    <Link href="#">NIHR Maps</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wrapper">
                <h6 className="fw-bold">Journals Library</h6>
                <ul>
                  <li>
                    <Link href="#">Five open access journals</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                  <li>
                    <Link href="#">For authors</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                  <li>
                    <Link href="#">For reviewers</Link>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

