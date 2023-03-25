import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import * as Icon from "react-feather";
import { Edit, Trash, Plus, AlignCenter } from "react-feather";
import { Link } from "react-router-dom";
import { FaFolderOpen } from "react-icons/fa";
import Tshirt from "../../../assets/img/png/WT-shirt.png";

const MyGifts = () => {
  return (
    <Container>
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between my-1">
                <div className="head" style={{ fontWeight: "500" }}>
                  Organize Your My Gifts
                </div>
                <div>
                  <button
                    style={{ borderRadius: "20px" }}
                    className="btn btn-secondary"
                  >
                    <Plus size={15} className="me-50" />
                    Create New Folder
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-around">
                <div style={{ textAlign: "center" }}>
                  <div className="btnfix">
                    <FaFolderOpen
                      size={100}
                      className="me-50 "
                      style={{ color: "#FF5D4A" }}
                    />
                  </div>
                  <div>
                    <h5>General Clients</h5>
                  </div>
                  <div>
                    <Edit size={15} className="m-1" />
                    <Trash size={15} />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <FaFolderOpen
                      size={100}
                      className="me-50 "
                      style={{ color: "#FF5D4A" }}
                    />
                  </div>
                  <div>
                    <h5>VIP Clients</h5>
                  </div>
                  <div>
                    <Edit size={15} className="m-1" />

                    <Trash size={15} />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <FaFolderOpen
                      size={100}
                      className="me-50 "
                      style={{ color: "#FF5D4A" }}
                    />
                  </div>
                  <div>
                    <h5>Employees</h5>
                  </div>
                  <div>
                    <Edit size={15} className="m-1" />

                    <Trash size={15} />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <FaFolderOpen
                      size={100}
                      className="me-50 "
                      style={{ color: "#FF5D4A" }}
                    />
                  </div>
                  <div>
                    <h5>Leads</h5>
                  </div>
                  <div>
                    <Edit size={15} className="m-1" />

                    <Trash size={15} />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <FaFolderOpen
                      size={100}
                      className="me-50 "
                      style={{ color: "#FF5D4A" }}
                    />
                  </div>
                  <div>
                    <h5>Random</h5>
                  </div>
                  <div>
                    <Edit size={15} className="m-1" />

                    <Trash size={15} />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <FaFolderOpen
                      size={100}
                      className="me-50 "
                      style={{ color: "#FF5D4A" }}
                    />
                  </div>
                  <div>
                    <h5>Friends</h5>
                  </div>
                  <div>
                    <Edit size={15} className="m-1" />

                    <Trash size={15} />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <FaFolderOpen
                      size={100}
                      className="me-50 "
                      style={{ color: "#FF5D4A" }}
                    />
                  </div>
                  <div>
                    <h5>Family</h5>
                  </div>
                  <div>
                    <Edit size={15} className="m-1" />

                    <Trash size={15} />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <FaFolderOpen
                      size={100}
                      className="me-50 "
                      style={{ color: "#FF5D4A" }}
                    />
                  </div>
                  <div>
                    <h5>Other</h5>
                  </div>
                  <div>
                    <Edit size={15} />

                    <Trash size={15} className="m-1" />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Card>
        <CardBody>
          <div>
            <h3>My Favorate Gifts</h3>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex m-1">
              <div>
                <img src={Tshirt} alt="cake" width="100%" />
                <div>
                  <p>Champions Martial Arts T-shirt</p>
                  <b>Price: $50.00</b>
                  <div className="d-flex">
                    <buton className="btn btn-primary btn-sm">
                      Add to Contact
                    </buton>
                    <buton
                      color="primary"
                      className="btn btn-sm  bg-t"
                      style={{
                        background: "#333333",
                        opacity: "1",
                        color: "#fff",
                      }}
                    >
                      Move to Folder
                    </buton>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex m-1">
              <div>
                <img src={Tshirt} alt="cake" width="100%" />
                <div>
                  <p>Champions Martial Arts T-shirt</p>
                  <b>Price: $50.00</b>
                  <div className="d-flex">
                    <buton className="btn btn-primary btn-sm">
                      Add to Contact
                    </buton>
                    <buton
                      color="primary"
                      className="btn btn-sm  bg-t"
                      style={{
                        background: "#333333",
                        opacity: "1",
                        color: "#fff",
                      }}
                    >
                      Move to Folder
                    </buton>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex m-1">
              <div>
                <img src={Tshirt} alt="cake" width="100%" />
                <div>
                  <p>Champions Martial Arts T-shirt</p>
                  <b>Price: $50.00</b>
                  <div className="d-flex">
                    <buton className="btn btn-primary btn-sm">
                      Add to Contact
                    </buton>
                    <buton
                      color="primary"
                      className="btn btn-sm  bg-t"
                      style={{
                        background: "#333333",
                        opacity: "1",
                        color: "#fff",
                      }}
                    >
                      Move to Folder
                    </buton>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex m-1">
              <div>
                <img src={Tshirt} alt="cake" width="100%" />
                <div>
                  <p>Champions Martial Arts T-shirt</p>
                  <b>Price: $50.00</b>
                  <div className="d-flex">
                    <buton className="btn btn-primary btn-sm">
                      Add to Contact
                    </buton>
                    <buton
                      color="primary"
                      className="btn btn-sm  bg-t"
                      style={{
                        background: "#333333",
                        opacity: "1",
                        color: "#fff",
                      }}
                    >
                      Move to Folder
                    </buton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default MyGifts;
