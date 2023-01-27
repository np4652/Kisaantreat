import { React, useState } from "react";
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
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { postRequest } from "../Services/ApiServices";
import { useNavigate } from "react-router-dom";

function LoginOtp() {
  const moduleBase = "api";

  const navigate = useNavigate();
  const [viewOtpForm, setViewOtpForm] = useState(false);
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

  const sendOTP = async (e) => {
    e.preventDefault();

    try {
      const res = await postRequest(
        `${moduleBase}/SendLoginOTP?mobileNo=${input.mobileNo}`
      );
      if (res) {
        console.log("fgf", res);
        setViewOtpForm(true);
        toast.success("OTP Send Successfully.....");
      } else {
        toast.error("Credentials invalid");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const otpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postRequest(
        `${moduleBase}/LoginWithOTP?mobileNo=${input.mobileNo}&otp=${input.otp}`
      );
      if (res.result) {
        toast.success("SignIn Successfully");
        return navigate("/Dashboard", { replace: true });
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      toast.error("something went wrong!!!");
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
                Sign into account with OTP
              </h5>
              <label>MOBILE NUMBER</label>
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLg"
                type="text"
                size="lg"
                name="mobileNo"
                onChange={handleChange}
              />

              {!viewOtpForm ? (
                <>
                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    type="submit"
                    onClick={sendOTP}
                  >
                    SEND OTP
                  </MDBBtn>
                </>
              ) : (
                <>
                  <label>OTP</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    id="formControlLg"
                    type="number"
                    size="lg"
                    name="otp"
                    onChange={handleChange}
                  />

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    type="submit"
                    onClick={otpSubmit}
                  >
                    Verify OTP
                  </MDBBtn>
                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    type="submit"
                    onClick={""}
                  >
                    Resend OTP
                  </MDBBtn>
                </>
              )}

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                <NavLink
                  to="/Login"
                  className="nav-link"
                  style={{ color: "#0000ff" }}
                >
                  <span>LOGIN with Password</span>
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

export default LoginOtp;
