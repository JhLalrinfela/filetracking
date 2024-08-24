import React from "react";
import LoginForm from "./loginform";
function LoginModals() {
  return (
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">User Login</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <LoginForm />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModals;
