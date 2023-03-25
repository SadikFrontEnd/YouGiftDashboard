import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  FormGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Select from "react-select";
import { Edit, Trash } from "react-feather";
import DataTable from "react-data-table-component";
import { Check } from "react-feather";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import Tshirt from "../../../assets/img/png/WT-shirt.png";
import "../../../assets/scss/pages/custom.scss";
import classnames from "classnames";

const columns = [
  // {
  //   name: "Id",
  //   selector: "id",
  //   sortable: true
  // },
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Type",
    selector: "type",
    sortable: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
  },
  {
    name: "Event",
    selector: "event",
    sortable: true,
  },
  {
    name: "Gifts",
    selector: "gift",
    sortable: true,
  },
  {
    name: "Profile",
    selector: "profile",
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    name: "Alyss",
    type: (
      <button color="primary" className="btn btn-sm btn-success bg-t" outline>
        Family
      </button>
    ),
    email: "alillecrop0@twitpic.com",
    event: (
      <button color="blk" className="btn btn-sm  bg-t btnColor" outline>
        View
      </button>
    ),
    gift: 2,
    profile: (
      <button color="blk" className="btn btn-sm btn-primary bg-t" outline>
        Manage
      </button>
    ),
  },
  {
    id: 2,
    name: "Shep",
    type: (
      <button className="btn btn-sm btn-success bg-t" outline>
        Family
      </button>
    ),
    email: "spentlow1@home.pl",
    event: (
      <button color="primary" className="btn btn-sm btnColor" outline>
        View
      </button>
    ),
    gift: 2,
    profile: (
      <button color="blk" className="btn btn-sm btn-primary bg-t" outline>
        Manage
      </button>
    ),
  },
  {
    id: 3,
    name: "Gasper",
    type: (
      <button color="primary" className="btn btn-sm btn-success bg-t" outline>
        Family
      </button>
    ),
    email: "gmorley2@chronoengine.com",
    event: (
      <button color="primary" className="btn btn-sm btnColor" outline>
        View
      </button>
    ),
    gift: 3,
    profile: (
      <button color="blk" className="btn btn-sm btn-primary bg-t" outline>
        Manage
      </button>
    ),
  },
  {
    id: 4,
    name: "Phaedra",
    width: "250px",
    type: (
      <button color="primary" className="btn btn-sm btn-success bg-t" outline>
        Family
      </button>
    ),
    email: "pjerrard3@blogs.com",
    event: (
      <span>
        <button color="primary" className="btn btn-sm btnColor " outline>
          View
        </button>{" "}
        <button color="primary" className="btn btn-sm  btnColor" outline>
          View
        </button>
      </span>
    ),
    gift: 2,
    profile: (
      <button color="blk" className="btn btn-sm btn-primary bg-t" outline>
        Manage
      </button>
    ),
  },
];

const friends = [
  { value: "ajay", label: "ajay" },
  { value: "vijay", label: "vijay" },
  { value: "arun", label: "Purple" },
  { value: "demo", label: "demo" },
];

const GiftColumn = [
  {
    name: "EventName",
    selector: "eventname",
    sortable: true,
  },
  {
    name: "EventDate",
    selector: "eventdate",
    sortable: true,
  },
  {
    name: "Remainder",
    selector: "remainder",
    sortable: true,
  },
  {
    name: "GiftItem",
    selector: "item",
    sortable: true,
  },
  {
    name: "OrderStatus",
    selector: "status",
    sortable: true,
  },
];

const GiftData = [
  {
    id: 1,
    eventname: "Alyss",
    eventdate: "01 / 01 / 2023",
    remainder: "alillecrop0@twitpic.com",
    item: <img src={Tshirt} alt="cake" width="50%" />,

    status: (
      <div className="d-flex">
        <div>
          <span style={{ background: "yellow" }}>Pending</span>
        </div>
        <div>
          {" "}
          <Edit size={15} />
          <Trash size={15} />
        </div>
      </div>
    ),
  },
];

const DashBoardData = () => {
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleTab = (tab) => {
    console.log("tab", tab);
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <Container>
      <Row>
        <Col md="8">
          <Row className="my-2">
            <Col>
              <button className="btn-secondary buttons" onClick={toggleModal}>
                + New Contact
                <Modal
                  isOpen={modal}
                  toggle={toggleModal}
                  className="modal-dialog-centered"
                >
                  <ModalHeader toggle={toggleModal}>Contact Info</ModalHeader>
                  <div className="views">
                    <Nav tabs className="mt-1">
                      <NavItem className="pl-1">
                        <NavLink
                          className={classnames({
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            toggleTab("1");
                          }}
                        >
                          Contact Info
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "2",
                          })}
                          onClick={() => {
                            toggleTab("2");
                          }}
                        >
                          Event Gift Status
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <ModalBody>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <FormGroup>
                          <Input
                            required
                            type="text"
                            id="name"
                            placeholder="Name"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Input
                            required
                            type="number"
                            id="phone"
                            placeholder="Phone"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Select
                            className="React"
                            classNamePrefix="Type Friend"
                            options={friends}
                          />
                        </FormGroup>
                        <Input type="text" id="address" placeholder="Address" />
                        <Button
                          className="mt-1"
                          style={{ borderRadius: "0" }}
                          color="secondary"
                          onClick={toggleModal}
                        >
                          Update Profile
                        </Button>
                      </TabPane>
                      <TabPane className="component-code" tabId="2">
                        <DataTable
                          data={GiftData}
                          columns={GiftColumn}
                          noHeader
                          selectableRows
                          selectableRowsComponent={Checkbox}
                          selectableRowsComponentProps={{
                            color: "primary",
                            icon: <Check className="vx-icon" size={12} />,
                            label: "",
                            size: "sm",
                          }}
                        />
                      </TabPane>
                    </TabContent>
                  </ModalBody>
                </Modal>
              </button>
            </Col>
            <Col>
              <button className="btn-secondary buttons">+ Bulk Upload</button>
            </Col>
            <Col>
              <button className="btn-secondary buttons">Bulk Event</button>
            </Col>
            <Col>
              <button className="btn-secondary buttons">Delete Contact</button>
            </Col>
          </Row>
        </Col>
        <Col md="4"></Col>
        <Col md="8">
          <Card>
            <CardBody>
              <DataTable
                data={data}
                columns={columns}
                noHeader
                selectableRows
                selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={{
                  color: "primary",
                  icon: <Check className="vx-icon" size={12} />,
                  label: "",
                  size: "sm",
                }}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <div>
            <h3 className="heading">How to you gift</h3>
            <div className="d-flex">
              <span className="spanStyle">Step1:</span>
              <p className="pl-1 paraStyle">
                Add Your Favorite gift items From Shop and custom Shop into "My
                Gifts"
              </p>
            </div>
            <div className="d-flex">
              <span className="spanStyle">Step2:</span>
              <p className="pl-1 paraStyle">
                Add Your Contacts Create Events set reminder and attach git to
                event
              </p>
            </div>
            <div className="d-flex">
              <span className="spanStyle">Step3:</span>
              <p className="pl-1 paraStyle">
                Add funds to your YouGift Account or pay as you go. visit the
                dashboard to see upcoming events or prepay for gift anytime
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default DashBoardData;
