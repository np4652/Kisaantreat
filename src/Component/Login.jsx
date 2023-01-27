import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { setCookie } from "../Services/Cookies";
import { postRequest } from "../Services/ApiServices";
import { DATACONSTANT } from "../Services/DataConstant";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const moduleBase = "api";
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postRequest(`${moduleBase}/Login`, {
        ...input,
        rememberMe: true,
        isTwoFactorEnabled: true,
        gAuthPin: "",
      });
      if (res.result) {
        setCookie(DATACONSTANT.COOKIE_NAME, res.result.token, 30);
        toast.success("Login Successfully");
        return navigate("/Dashboard", { replace: true });
      } else {
        toast.error("Credentials invalid");
      }
    } catch (error) {
      toast.error("Something went wrong!!!");
      console.error(error);
    }
  };
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="assets/img/login-img.webp"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <label>MOBILE NUMBER</label>
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                type="number"
                size="lg"
                name="mobileNo"
                onChange={handleChange}
              />
              <label>Password</label>
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                type="password"
                name="password"
                size="lg"
                onChange={handleChange}
              />

              {/* <MDBBtn
                className="mb-4 px-5"
                color="dark"
                size="lg"
                onclick={handleSubmit}
              > */}
              <form onSubmit={(e) => handleSubmit(e)}>
                <button
                  className="mb-4 px-5"
                  type="submit"
                  color="dark"
                  size="lg"
                >
                  Login
                </button>
              </form>

              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                <NavLink
                  to="/LoginOtp"
                  className="nav-link"
                  style={{ color: "#0000ff" }}
                >
                  <span>LOGIN with OTP</span>
                </NavLink>
              </p>

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
