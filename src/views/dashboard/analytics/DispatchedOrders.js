import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  Table,
  Container,
} from "reactstrap";
// import avatar1 from "../../../assets/img/portrait/small/avatar-s-5.jpg"
// import avatar2 from "../../../assets/img/portrait/small/avatar-s-7.jpg"
// import avatar3 from "../../../assets/img/portrait/small/avatar-s-10.jpg"
// import avatar4 from "../../../assets/img/portrait/small/avatar-s-8.jpg"
// import avatar5 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
// import avatar6 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
// import avatar7 from "../../../assets/img/portrait/small/avatar-s-3.jpg"
// import avatar8 from "../../../assets/img/portrait/small/avatar-s-4.jpg"
import { Edit, Trash } from "react-feather";
import { Link } from "react-router-dom";

class DispatchedOrders extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle>
                  Upcoming Gifts
                  <span>
                    <button className="btn btn-primary ml-2">Pay All</button>
                  </span>
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <Table
                responsive
                className="dashboard-table table-hover-animation "
              >
                <thead>
                  <tr>
                    <th>Contact</th>
                    <th>Account</th>
                    <th>Events</th>
                    <th>Event Date</th>
                    <th>Reminder</th>
                    <th>Status</th>
                    <th>Edit Order</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ramil</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-success bg-t"
                        outline
                      >
                        Family
                      </button>
                    </td>
                    <td>Birthday</td>
                    <td>6-03-2023</td>
                    <td>9-03-2023</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-primary"
                        outline
                      >
                        View
                      </button>
                    </td>
                    <td>
                      {" "}
                      {
                        <div className="column-action d-flex align-items-center">
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            {" "}
                            <Edit size={15} className="me-50" />
                          </Link>
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            <Trash size={15} className="me-50" />
                          </Link>
                          <button
                            color="primary"
                            className="btn btn-sm btn-primary"
                            outline
                          >
                            Pay Now
                          </button>
                        </div>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Ramil</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-success bg-t"
                        outline
                      >
                        Family
                      </button>
                    </td>
                    <td>Birthday</td>
                    <td>6-03-2023</td>
                    <td>9-03-2023</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-success"
                        outline
                      >
                        View
                      </button>
                    </td>
                    <td>
                      {" "}
                      {
                        <div className="column-action d-flex align-items-center">
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            {" "}
                            <Edit size={15} className="me-50" />
                          </Link>
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            <Trash size={15} className="me-50" />
                          </Link>
                          <button
                            color="primary"
                            className="btn btn-sm btn-primary"
                            outline
                          >
                            Pay Now
                          </button>
                        </div>
                      }
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>Ramil</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-success bg-t"
                        outline
                      >
                        Family
                      </button>
                    </td>
                    <td>Birthday</td>
                    <td>6-03-2023</td>
                    <td>9-03-2023</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-primary"
                        outline
                      >
                        View
                      </button>
                    </td>
                    <td>
                      {" "}
                      {
                        <div className="column-action d-flex align-items-center">
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            {" "}
                            <Edit size={15} className="me-50" />
                          </Link>
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            <Trash size={15} className="me-50" />
                          </Link>
                          <button
                            color="primary"
                            className="btn btn-sm btn-primary"
                            outline
                          >
                            Pay Now
                          </button>
                        </div>
                      }
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>Ramil</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-success bg-t"
                        outline
                      >
                        Family
                      </button>
                    </td>
                    <td>Birthday</td>
                    <td>6-03-2023</td>
                    <td>9-03-2023</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-primary"
                        outline
                      >
                        View
                      </button>
                    </td>
                    <td>
                      {" "}
                      {
                        <div className="column-action d-flex align-items-center">
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            {" "}
                            <Edit size={15} className="me-50" />
                          </Link>
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            <Trash size={15} className="me-50" />
                          </Link>
                          <button
                            color="primary"
                            className="btn btn-sm btn-primary"
                            outline
                          >
                            Pay Now
                          </button>
                        </div>
                      }
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>Ramil</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-success bg-t"
                        outline
                      >
                        Family
                      </button>
                    </td>
                    <td>Birthday</td>
                    <td>6-03-2023</td>
                    <td>9-03-2023</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-primary"
                        outline
                      >
                        View
                      </button>
                    </td>
                    <td>
                      {" "}
                      {
                        <div className="column-action d-flex align-items-center">
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            {" "}
                            <Edit size={15} className="me-50" />
                          </Link>
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            <Trash size={15} className="me-50" />
                          </Link>
                          <button
                            color="primary"
                            className="btn btn-sm btn-primary"
                            outline
                          >
                            Pay Now
                          </button>
                        </div>
                      }
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>Ramil</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-success bg-t"
                        outline
                      >
                        Family
                      </button>
                    </td>
                    <td>Birthday</td>
                    <td>6-03-2023</td>
                    <td>9-03-2023</td>
                    <td>
                      <button
                        color="primary"
                        className="btn btn-sm btn-success"
                        outline
                      >
                        View
                      </button>
                    </td>
                    <td>
                      {" "}
                      {
                        <div className="column-action d-flex align-items-center">
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            {" "}
                            <Edit size={15} className="me-50" />
                          </Link>
                          <Link to={`/apps/invoice/preview`} id={`pw-tooltip`}>
                            <Trash size={15} className="me-50" />
                          </Link>
                          <button
                            color="primary"
                            className="btn btn-sm btn-primary"
                            outline
                          >
                            Pay Now
                          </button>
                        </div>
                      }
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <div className="content-bx">
                <h3>Start Gifing in 5 Easy Steps</h3>
                <ul>
                  <li>
                    <div className="main-bx">
                      <div className="bx-date">
                        <p>Sept</p>
                        <h2>01</h2>
                      </div>
                      <div className="bx-right">
                        <h5>lorm lorm </h5>
                        <p>lorm</p>
                      </div>
                    </div>
                  </li>

                  {/* <li>
                    <div className="main-bx">
                      <div className="bx-date">
                        <p>Sept</p>
                        <h2>01</h2>
                      </div>
                      <div className="bx-right">
                        <h5>lorm lorm </h5>
                        <p>lorm</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="main-bx">
                      <div className="bx-date">
                        <p>Sept</p>
                        <h2>01</h2>
                      </div>
                      <div className="bx-right">
                        <h5>lorm lorm </h5>
                        <p>lorm</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="main-bx">
                      <div className="bx-date">
                        <p>Sept</p>
                        <h2>01</h2>
                      </div>
                      <div className="bx-right">
                        <h5>lorm lorm </h5>
                        <p>lorm</p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default DispatchedOrders;
