

import React,{useState} from "react";
import Select from "react-select";
import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  Card,
  CardBody,
  Badge,
 CustomInput,
} from "reactstrap";
import {Trash,
  Grid,
  List,
  Search,
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "react-feather";
import { data } from "./shopData";
import { Link } from "react-router-dom";
import "../../../../assets/scss/plugins/forms/react-select/_react-select.scss";
import Tshirt from '../../../../assets/img/png/WT-shirt.png';



const ShopContent = () =>{

    const data = [{
        name:'Champions Martial Arts T-shirt',
        price:'$50.00',
    },{
        name:'Champions Martial Arts T-shirt',
        price:'$50.00',
    },{
        name:'Champions Martial Arts T-shirt',
        price:'$50.00',
    },{
        name:'Champions Martial Arts T-shirt',
        price:'$50.00',
    }
]
   return(<> <div className="d-flex justify-content-around">
  <div className="d-flex m-1">
{data?.map((element)=><div>
    <Card style={{marginBottom:'0',borderRadius:'0',margin:'7px'}}>
    <CardBody >
    <Badge
    style={{top:'6px',right:"0.5rem"}}
    // color="primary"
    className="badge-sm badge-up"
    pill
  ><Trash size={15} /></Badge>
    <img src={Tshirt} alt="cake" width="100%" />
    </CardBody></Card>
    <div  style={{ marginLeft:'11px'}}>
      <p style={{fontSize:'smaller',marginBottom:"0",}}>{element.name}</p>
      <b className="mb-1">Price: {element.price}</b>
      <div className="d-flex justify-content-around my-1">
        <buton  className="btn btn-primary btn-sm round" style={{ padding:'8px 6px'}}>
          Add to Contact
        </buton>
        <buton
          color="primary"
          className="btn btn-sm  bg-t round "
          style={{
            background: "#333333",
            opacity: "1",
            color: "#fff",
            padding:'8px 6px'
          }}
        >
          Move to Folder
        </buton>
      </div>
    </div>
  </div>)}
  
</div>
 
  </div></>)
}

export default ShopContent;
