import React from "react";
import Sidebar from "react-sidebar";
import ShopSidebar from "./Sidebar";
import ShopContent from "./ShopContent";
import Breacrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";

import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import { Col, Container, Row, Button } from "reactstrap";

const mql = window.matchMedia(`(min-width: 992px)`);
class Shop extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false,
  };
  UNSAFE_componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  };

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  };
  render() {
    return (
      <React.Fragment>
        {/* <Breacrumbs
          breadCrumbTitle="Shop"
          // breadCrumbParent="eCommerce"
          // breadCrumbActive="Shop"
        /> */}

        <Row>
          <Col md="12">
            <div className="sh-head">
              <h2 className="">
                Shop
                <span>
                  <Button className="btn-block" color="primary">
                    Request a Gift
                  </Button>
                </span>
              </h2>

              {/* <Button.Ripple block className="btn-block" color="primary">
                CLEAR ALL FILTERS
              </Button.Ripple> */}
            </div>
          </Col>
        </Row>

        {/* <div className="shop-heading">
          <h2 className="shop-heading">Shop</h2>
        </div> */}

        <div className="ecommerce-application">
          <div
            className={`shop-content-overlay ${
              this.state.sidebarOpen ? "show" : ""
            }`}
            onClick={() => this.onSetSidebarOpen(false)}
          ></div>
          <div className="sidebar-section">
            <Sidebar
              sidebar={<ShopSidebar />}
              docked={this.state.sidebarDocked}
              open={this.state.sidebarOpen}
              sidebarClassName="sidebar-shop"
              touch={true}
              contentClassName="sidebar-children d-none"
            >
              ""
            </Sidebar>
          </div>
          <ShopContent
            mainSidebar={this.onSetSidebarOpen}
            sidebar={this.state.sidebarOpen}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default Shop;
