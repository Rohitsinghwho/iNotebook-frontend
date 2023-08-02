import Notes from "./Notes";

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>Add Notes</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your Notes with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  gen
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  tech
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Science
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary  my-3 ">
              Submit
            </button>
          </div>
        </form>
        {/* imported Notes components */}
        <Notes/>
      </div>
    </div>
  );
};

export default Home;
