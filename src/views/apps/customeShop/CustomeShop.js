import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import { Col, Container, Row, Button } from "reactstrap";
// import Breacrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import ShopItem from "../ecommerce/shop/ShopItem";
import ShopSidebar from "../ecommerce/shop/Sidebar";
const mql = window.matchMedia(`(min-width: 992px)`);
const CustomeShop = () => {
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    mql.addListener(mediaQueryChanged());
  }, []);
  useEffect(() => {
    mql.removeListener(mediaQueryChanged());
  }, []);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const mediaQueryChanged = () => {
    setSidebarDocked(mql.matches);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* <Breacrumbs
      breadCrumbTitle="Shop"
      // breadCrumbParent="eCommerce"
      // breadCrumbActive="Shop"
    /> */}

      <Row>
        <Col md="12">
          <div className="sh-head sh-headClr">
            <h2 className="">
              Custom Shop
              <span>
                <Button className="btn-block" color="primary">
                  Request a Gift
                </Button>
              </span>
            </h2>
          </div>
        </Col>
      </Row>

      <div className="ecommerce-application">
        <div
          className={`shop-content-overlay ${sidebarOpen ? "show" : ""}`}
          onClick={() => onSetSidebarOpen(false)}
        ></div>
       <Row>
       <Col md='2'>
       <div className="sidebar-section">
       <Sidebar
         sidebar={<ShopSidebar />}
         docked={sidebarDocked}
         open={sidebarOpen}
         sidebarClassName="sidebar-shop"
         touch={true}
         contentClassName="sidebar-children d-none"
       >
         ""
       </Sidebar>
     </div>
       </Col>
       <Col md='10'>
       <ShopItem mainSidebar={onSetSidebarOpen} sidebar={sidebarOpen} />
       </Col>
       </Row>
       
      </div>
    </>
  );
};

export default CustomeShop;
