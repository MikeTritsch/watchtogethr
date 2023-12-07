import Poster from "../assets/images/startrek-placeholder.jpg";

const Profile = () => {
  return (
    <>

      <div className="profile-container">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">My Movies</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">My Friends</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          {/* <div className="profile-search container-fluid">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Find A Movie" aria-label="Search"/>
                  <button className="btn btn-outline-danger" type="submit">Search</button>
              </form>
            </div> */}
            <ul className="profile-ul">
              <li className="profile-card card mb-3">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="poster-container col-md-4">
                      <img src={Poster} className="profile-poster img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Star Trek</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Genre: Genre</small></p>
                        <p className="card-text"><small className="text-muted">Starring: Genre</small></p>
                        <p className="card-text"><small className="text-muted">Year: Genre</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            {/* <div className="profile-search container-fluid">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Find Your Friends" aria-label="Search"/>
                  <button className="btn btn-outline-danger" type="submit">Search</button>
              </form>
            </div> */}
            <ul>
              <li className="profile-card card mb-3">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title 2</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile