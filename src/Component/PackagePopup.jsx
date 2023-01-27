import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { postRequest } from "../Services/ApiServices";
import { toast } from "react-toastify";

const PackagePopup = () => {
  const moduleBase = "api/Package";
  const [modal, setModal] = useState(true);
  const [input, setInput] = useState();

  useEffect(() => {
    packageProfi();
  }, []);

  const close = () => {
    setModal(false);
  };

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
      const res = await postRequest(`${moduleBase}/Add`, {
        ...input,
        isActive: true,
        entryOn: "",
        modifyOn: "",
      });
      //  console.log("rashmi", res);
      // if (res.result) {

      //   return navigate("/Dashboard", { replace: true });
      // } else {
      //   toast.error("Credentials invalid");
      // }
    } catch (error) {
      toast.error("Something went wrong!!!");
      console.error(error);
    }
  };
  const packageProfi = async () => {
    const moduleBase = "api/Package";
    const res = await postRequest(`${moduleBase}/Get`);
    //console.log("fhfghwrfghw", res.result);
    if (res.result) {
      setInput(res.result);
    } else {
      toast.error("Credentials invalid");
    }
  };

  return (
    <>
      {modal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", background: " #0000009e" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  Package
                </h4>

                <MDBBtn
                  className="btn-close"
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                  }}
                  onClick={close}
                ></MDBBtn>
              </div>
              <div className="modal-body">
                <div className="form-popup" id="myForm">
                  <form className="form-container w-100">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="signup_label" htmlFor="packageName">
                            Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="packageName"
                            name="packageName"
                            value={input?.packageName}
                            // defaultValue={input?.packageName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="signup_label" htmlFor="packageCost">
                            Cost:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="packageCost"
                            name="packageCost"
                            value={input?.packageCost}
                            // defaultValue={input?.packageCost}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label
                            className="signup_label"
                            htmlFor="canChooseOnly"
                          >
                            ChooseOnly:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="canChooseOnly"
                            name="canChooseOnly"
                            value={input?.canChooseOnly}
                            // defaultValue={input?.canChooseOnly}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label
                            className="signup_label"
                            htmlFor="maxAvailableChoice"
                          >
                            MaxAvailable:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="maxAvailableChoice"
                            name="maxAvailableChoice"
                            value={input?.maxAvailableChoice}
                            //   defaultValue={input?.maxAvailableChoice}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="signup_label" htmlFor="description">
                            Description:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={input?.desciption}
                            //  defaultValue={input?.desciption}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="signup_label" htmlFor="expiredIn">
                            ExpiredIn:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="expiredIn"
                            name="expiredIn"
                            value={input?.expiredIn}
                            //  defaultValue={input?.expiredIn}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>&nbsp;</label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <input
                                type="checkbox"
                                name="isActive"
                                id="isActive"
                                className="mr-2"
                                value={input?.isActive}
                                // defaultValue={input?.isActive}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="input-group-append">
                              <label
                                className="form-control"
                                htmlFor="isActive"
                              >
                                isActive
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  data-dismiss="modal"
                  onClick={close}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackagePopup;
