import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function HeaderComp() {
  const [showBasic, setShowBasic] = useState(false);
  const MenuItems = {"/home":"Home", "/about":"About Us", "/contact":"Contact us"}
  const DynamicMenuData = Object.entries(MenuItems).map(
    ([key,value],i)=>{

      return(
        <MDBNavbarItem key={key}>
              <Link className="nav-link" to={key}>{value}</Link>
            </MDBNavbarItem>
      )
      // console.log(key);
      // console.log(value);
      // console.log(i);
    }
  )

  return (
    <>
    
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            {/* <MDBNavbarItem> */}
              {/* <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink> */}
              {/* <Link className="nav-link" to='/'>Home</Link>
            </MDBNavbarItem> */}
              {DynamicMenuData }
            {/* <MDBNavbarItem>
              <Link className="nav-link" to='/about'>about</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to='/examples'>Example</Link>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Account
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem ><Link className="nav-link" to="/login">log in</Link></MDBDropdownItem>
                  {/* <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}