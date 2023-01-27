import { React, useEffect, useState } from "react";
import { MDBModalHeader } from "mdb-react-ui-kit";
import { postRequest } from "../Services/ApiServices";
import { toast } from "react-toastify";
import PackagePopup from "./PackagePopup";
import { NavLink } from "react-router-dom";

const Package = () => {
  const [packageProf, setPackageProf] = useState([]);
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState({
    status: false,
  });

  useEffect(() => {
    packageProfile();
  }, []);

  const packageProfile = async () => {
    const moduleBase = "api/Package";
    const res = await postRequest(`${moduleBase}/Get`);
    if (res.result) {
      setPackageProf(res.result);
    } else {
      toast.error("Credentials invalid");
    }
  };

  return (
    <div>
      <>
        <main id="main" className="main">
          <MDBModalHeader>
            <h4
              style={{
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Package Master:
            </h4>
            <NavLink to="/PackagePopup" className="btn btn-primary">
              ADD
            </NavLink>
          </MDBModalHeader>
          <section className="section dashboard">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead
                      style={{
                        color: "blue",
                      }}
                    >
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>ChooseOnly</th>
                        <th>MaxAvailable</th>
                        <th>isActive</th>
                        <th>Description</th>
                        <th>EntryOn</th>
                        <th>ModifyOn</th>
                        <th>ExpiredIn</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packageProf.map((d, i) => (
                        <>
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                              {d.packageName}
                              <small className="d-block">{d.id}</small>
                            </td>
                            <td>{d.packageCost}</td>
                            <td>{d.canChooseOnly}</td>
                            <td>{d.maxAvailableChoices}</td>
                            <td>{d.isActive}</td>
                            <td>{d.description}</td>
                            <td>{d.entryOn}</td>
                            <td>{d.modifyOn}</td>
                            <td>{d.expiredIn}</td>
                            <td>
                              {/* <button
                                className="btn btn-primary"
                                onClick={() => {}}
                              >
                                Edit
                              </button> */}

                              <div className="row">
                                <div>
                                  <NavLink
                                    to={{
                                      pathname: "/PackagePopup",
                                    }}
                                    className="btn btn-primary"
                                  >
                                    Edit
                                  </NavLink>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    </div>
  );
};

export default Package;
