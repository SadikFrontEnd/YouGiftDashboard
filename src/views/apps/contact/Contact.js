import React, { useState, useEffect } from "react";

import { Row, Col, Card, CardBody } from "reactstrap";

import "../../../assets/scss/pages/dashboard-analytics.scss";
import ContactDispatch from "../../dashboard/analytics/ContactDispatched";

const Contact = () => {
  return (
    <React.Fragment>
      <Row className="match-height">
        <Col lg="3">
          <Card>
            <CardBody className="cardBgColor">
              <div className="chart-info d-flex justify-content-between align-items-center">
                <div className="series-info d-flex">
                  <span className="text-bold-500 txtColor">Total Contacts</span>
                </div>
                <div className="series-info d-flex">
                  <span className="text-bold-700 ">
                    <h1 className="titleColor">4</h1>
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <CardBody className="p-1 cardBgColor2">
              <div className="chart-info d-flex justify-content-between align-items-center">
                <div className="series-info d-flex">
                  <span className="text-bold-500 txtColor">Total My Gift</span>
                </div>
                <div className="series-info d-flex">
                  <span className="text-bold-700 ">
                    <h1 className="titleColor">7</h1>
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <CardBody className="p-1 cardBgColor3">
              <div className="chart-info d-flex justify-content-between align-items-center">
                <div className="series-info d-flex">
                  <span className="text-bold-500 txtColor">
                    Total Gift Sent
                  </span>
                </div>
                <div className="series-info d-flex">
                  <span className="text-bold-700 ">
                    <h1 className="titleColor">1</h1>
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <CardBody className="p-1 cardBgColor4">
              <div className="chart-info d-flex justify-content-between align-items-center">
                <div className="series-info d-flex">
                  <span className="text-bold-500 txtColor">Upcoming Gift</span>
                </div>
                <div className="series-info d-flex">
                  <span className="text-bold-700 ">
                    <h1 className="titleColor">6</h1>
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <div className="header"></div>
      </Row>

      <Row>
        <Col sm="12">
          <ContactDispatch />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Contact;
