import React from 'react'
import { Row, Card, Col,Container, Button } from "react-bootstrap";
import Imges1 from '../imges/logo (1).png'
import { Link } from 'react-router-dom';
const Navbar = ({search}) => {
  const onchange=(searching)=>{

search(searching);



  }
  
  return (
    <div >
    
    <Row className="pt-3 px-4" style={{ backgroundColor: '#f8f9fa' }}>
  <Col xs="12" md="3" lg="2" className="d-flex align-items-center mb-2 mb-md-0">
    <a href="/" style={{ textDecoration: 'none' }}>
      <Button 
        style={{ 
          backgroundColor: '#343a40', 
          color: '#fff', 
          fontWeight: 'bold', 
          padding: '20px 20px',
          borderRadius: '8px',
          border: 'none'
        }}
      >
        🎬 CinemaSpot
      </Button>
    </a>
  </Col>

  <Col xs="12" md="9" lg="10" className="d-flex align-items-center">
    <div className="search w-100 d-flex align-items-center position-relative">
      <i className="fa fa-search position-absolute" style={{ left: '15px', color: '#6c757d' }}></i>
      <input 
        onChange={(e) => onchange(e.target.value)} 
        type="text" 
        className="form-control ps-5" 
        placeholder="ابحث" 
        style={{ 
          borderRadius: '8px',
          border: '1px solid #ced4da',
          boxShadow: 'none',
          backgroundColor: '#ffffff',
          color: '#212529'
        }} 
      />
    </div>
  </Col>
</Row>

    
  </div>
  )
}

export default Navbar