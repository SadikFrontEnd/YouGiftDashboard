import React from "react";
import { Card, CardBody, Button, CustomInput} from "reactstrap";
import Slider from "rc-slider";
import { Check, Star } from "react-feather";
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import "rc-slider/assets/index.css";

import "../../../../assets/scss/plugins/extensions/slider.scss";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class ShopSidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h6 className="filter-heading d-none d-lg-block">Filters</h6>
       <div className="multi-range-price">
            <ul className="list-unstyled price-range" style={{width:"120px"}}>
                <li className="d-flex justify-content-between">
                  <span>Customize</span>
                  <CustomInput
              type="switch"
              className="d-block mb-2"
              id="article"
              name="article"
             block
            ></CustomInput>
               </li>
               </ul>
            </div>
            <hr />
            <div className="product-categories">
              <div className="product-category-title">
                <span className="filter-title mb-1">All Categories</span>
              </div>
              <ul className="list-unstyled categories-list">
                <li>
                <span>All</span>
                </li>
                <li>
                 <span>Birthday</span>
                </li>
                <li>
                  <span>Anniversary</span>
                </li>
                <li>
                  <span>Holidays</span>
                </li>
                <li>
                <span>Friends & Family</span>
                </li>
                <li>
                <span>Work</span>
                </li>
              </ul>
            </div>
         </React.Fragment>
    );
  }
}
export default ShopSidebar;


// <Card>
// <CardBody className="">
//   <div className="multi-range-price">
//     {/* <div className="multi-range-title pb-75">
//       <h6 className="filter-title mb-0">Multi Range</h6>
//     </div> */}
//     <ul className="list-unstyled price-range" style={{width:"120px"}}>
//       <li>
//         <span>Customize</span>
//      </li>
    
//     </ul>
//   </div>
//   {/* <hr /> */}
//   {/* <div className="price-slider"> */}
//   {/* <div className="price-slider-title mt-1">
//       <h6 className="filter-title mb-0">Slider</h6>
//     </div> */}
//   {/* <div className="price-slider mt-1">
//       <Range
//         min={0}
//         max={500}
//         defaultValue={[100, 250]}
//         tipFormatter={value => `${value}%`}
//       /> 
//     </div>*/}
//   {/* </div> */}
//   <hr />
//   <div className="product-categories">
//     <div className="product-category-title">
//       <span className="filter-title mb-1">All Categories</span>
//     </div>
//     <ul className="list-unstyled categories-list">
//       <li>
//         {/* <Radio
//           label="All"
//           // defaultChecked={true}
//           name="categories-filter"
//           className="py-25"
//         /> */}
//         <span>All</span>
//       </li>
//       <li>
//         {/* <Radio
//           label="Birthday"
//           // defaultChecked={false}
//           name="categories-filter"
//           className="py-25"
//         /> */}
//         <span>Birthday</span>
//       </li>
//       <li>
//         {/* <Radio
//           label="Anniversary"
//           // defaultChecked={false}
//           name="categories-filter"
//           className="py-25"
//         /> */}
//         <span>Anniversary</span>
//       </li>
//       <li>
//         {/* <Radio
//           label="Holidays"
//           // defaultChecked={false}
//           name="categories-filter"
//           className="py-25"
//         /> */}
//         <span>Holidays</span>
//       </li>
//       <li>
//         {/* <Radio
//           label="Friends & Family"
//           // defaultChecked={false}
//           name="categories-filter"
//           className="py-25"
//         /> */}
//         <span>Friends & Family</span>
//       </li>
//       <li>
//         {/* <Radio
//           label="Work"
//           // defaultChecked={false}
//           name="categories-filter"
//           className="py-25"
//         /> */}
//         <span>Work</span>
//       </li>
//       {/* <li>
//         <Radio
//           label="Office & School Supplies"
//           defaultChecked={false}
//           name="categories-filter"
//           className="py-25"
//         />
//       </li>
//       <li>
//         <Radio
//           label="TV & Home Theater"
//           defaultChecked={false}
//           name="categories-filter"
//           className="py-25"
//         />
//       </li>
//       <li>
//         <Radio
//           label="Video Games"
//           defaultChecked={false}
//           name="categories-filter"
//           className="py-25"
//         />
//       </li> */}
//     </ul>
//   </div>
//   {/* <hr />
//   <div className="brands">
//     <div className="brand-title mt-1 pb-1">
//       <h6 className="filter-title mb-0">Brands</h6>
//     </div>
//     <div className="brand-list">
//       <ul className="list-unstyled brand-list">
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="Insignia™"
//             defaultChecked={false}
//           />
//           <span>746</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="Samsung"
//             defaultChecked={false}
//           />
//           <span>633</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="Metra"
//             defaultChecked={false}
//           />
//           <span>591</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="HP"
//             defaultChecked={false}
//           />
//           <span>530</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="Apple"
//             defaultChecked={false}
//           />
//           <span>442</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="GE"
//             defaultChecked={false}
//           />
//           <span>394</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="Sony"
//             defaultChecked={false}
//           />
//           <span>350</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="Incipio"
//             defaultChecked={false}
//           />
//           <span>320</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="KitchenAid"
//             defaultChecked={false}
//           />
//           <span>318</span>
//         </li>
//         <li className="d-flex justify-content-between align-items-center py-25">
//           <Checkbox
//             color="primary"
//             icon={<Check className="vx-icon" size={16} />}
//             label="Whirpool"
//             defaultChecked={false}
//           />
//           <span>298</span>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <hr />
//   <div className="ratings">
//     <div className="ratings-title mt-1 pb-75">
//       <h6 className="filter-title mb-0">Ratings</h6>
//     </div>
//     <div className="d-flex justify-content-between">
//       <ul className="unstyled-list list-inline ratings-list mb-0">
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li>& up</li>
//       </ul>
//       <div className="stars-received">(160)</div>
//     </div>
//     <div className="d-flex justify-content-between">
//       <ul className="unstyled-list list-inline ratings-list mb-0">
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li>& up</li>
//       </ul>
//       <div className="stars-received">(176)</div>
//     </div>
//     <div className="d-flex justify-content-between">
//       <ul className="unstyled-list list-inline ratings-list mb-0">
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li>& up</li>
//       </ul>
//       <div className="stars-received">(291)</div>
//     </div>
//     <div className="d-flex justify-content-between">
//       <ul className="unstyled-list list-inline ratings-list mb-0">
//         <li className="ratings-list-item">
//           <Star size={23} className="text-warning" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li className="ratings-list-item">
//           <Star size={23} className="text-light" />
//         </li>
//         <li>& up</li>
//       </ul>
//       <div className="stars-received">(190)</div>
//     </div>
//   </div>
//   <hr /> */}
//   {/* <div className="clear-filters">
//     <Button.Ripple block className="btn-block" color="primary">
//       CLEAR ALL FILTERS
//     </Button.Ripple>
//   </div> */}
// </CardBody>
// </Card>