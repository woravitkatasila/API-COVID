import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Header extends Component {


  render() {
    return (

      <div className="container-fluid bgHead">
        <div className="row ">
          <div className="col-12">
            <h1 className="text-white mt-md-4 mt-2 text-center">COVID-19 situation update worldwide  <Link className="text-success" to="" > <FontAwesomeIcon icon={['fas', 'viruses']} /></Link></h1>
          </div>
  
        </div>
      </div>
    );
  }
}

export default Header;
