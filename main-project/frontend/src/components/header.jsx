import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
const Header = (props) => {
  let onSuccess = (credentialResponse) => {
    let token = credentialResponse.credential;
    try {
      let data = jwt_decode(token);
      // save in browser
      localStorage.setItem("zc_auth_token", token);
      // reload page
      alert("login successfully");
      window.location.assign("/");
    } catch (error) {
      console.log(error);
      // remove data from local storage
      localStorage.removeItem("zc_auth_token");
    }
  };
  let onError = () => {
    console.log("Login Failed");
  };

  let logout = () => {
    let isLogout = window.confirm("Are you sure logout");
    if (isLogout) {
      localStorage.removeItem("zc_auth_token");
      window.location.reload();
    }
  };
  return (
    <>
      <GoogleOAuthProvider clientId="933278214507-ipqb7snkm4o3b7q9dc50obmq671h13pr.apps.googleusercontent.com">
        <div
          className="modal fade "
          id="login-sign-up"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content d-flex">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Login with Google Account
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <GoogleLogin onSuccess={onSuccess} onError={onError} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end py-2 ">
          {props.logo === false ? <p></p> : <p className="m-0 brand">e!</p>}

          <div>
            {props.user ? (
              <>
                <button className="btn btn-light">
                 {props.user.name}
                </button>
                <button className="btn btn-warning mx-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <button
                className="btn btn-outline-light me-4"
                data-bs-toggle="modal"
                data-bs-target="#login-sign-up"
              >
                Login with Google Account
              </button>
            )}

            {/* <button className="btn btn-outline-light">
            <i className="fa fa-search" aria-hidden="true"></i>Create a Account
          </button> */}
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
};

export default Header;
