import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="header">
        <input type="checkbox" id="chk1" />
        <div className="logo">
          <h1>Social Influencer</h1>
        </div>
        <div className="search-box">
          <input type="text" name="search" id="srch" placeholder="Search" />
          <button type="submit">
            <BsSearch />
          </button>
        </div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          {!user.currentUser.hasOwnProperty("id") ? (
            <>
              <li>
                <Link to="/login">Login </Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                onClick={() => {
                  dispatch(clearUser());
                  localStorage.clear();
                }}
              >
                SignOut
              </Link>
            </li>
          )}
          {user.currentUser.id ? (
            <>
              <li>
                <Link to="/post">Posts</Link>
              </li>
              <li>
                <Link to="/createpost">createpost </Link>
              </li>
            </>
          ) : null}
          <li className="icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
        </ul>
        <div className="menu">
          <label htmlFor="chk1">
            <FaBars />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
