import React, { Component } from 'react';
import { ChevronDown } from 'react-feather';
import { DropdownItem, DropdownMenu, DropdownToggle, TabContent, TabPane, UncontrolledButtonDropdown } from 'reactstrap';

class NevbarDropBtn extends Component {
  render() {
    return (
      <div>
        <TabContent >
          <TabPane>
            <div className="dropdown mr-1 mb-1 d-inline-block">
              <UncontrolledButtonDropdown>
                <DropdownToggle color="flat-primary" caret>
                  TRY GOLD
                  <ChevronDown size={15} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a">Option 1</DropdownItem>
                  <DropdownItem tag="a">Option 2</DropdownItem>
                  <DropdownItem tag="a">Option 3</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
            <div className="dropdown mr-1 mb-1 d-inline-block">
              <UncontrolledButtonDropdown>
                <DropdownToggle color="flat-success" caret>
                  GET HELP
                  <ChevronDown size={15} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a">Option 1</DropdownItem>
                  <DropdownItem tag="a">Option 2</DropdownItem>
                  <DropdownItem tag="a">Option 3</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
            <div className="dropdown mr-1 mb-1 d-inline-block">
              <UncontrolledButtonDropdown>
                <DropdownToggle color="flat-info" caret>
                 FREE MEMBERSHIP PLAN
                  <ChevronDown size={15} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a">Option 1</DropdownItem>
                  <DropdownItem tag="a">Option 2</DropdownItem>
                  <DropdownItem tag="a">Option 3</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default NevbarDropBtn;
