import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { School as SchoolIcon } from '@mui/icons-material';

const StudentAdmission = () => {
  const [formData, setFormData] = useState({
    roll_no: '',
    class_id: '',
    section_id: '',
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    dob: '',
    mobileno: '',
    email: '',
    father_name: '',
    father_phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container fluid style={{ marginTop: '80px' }}>
      <Card className="mb-4 p-4">
        <Card.Body>
     
          <Row className="mb-3">
            <Col xs={12} md={6} className="d-flex align-items-center">
              <SchoolIcon style={{ fontSize: 30, marginRight: 10 }} />
              <h5>Student Admission</h5>
            </Col>
            
          </Row>

    

          <Row>
        
            <Col xs={12} md={4}>
              <Form.Group controlId="formRollNo">
                <Form.Label>Admission No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Reg number"
                  name="roll_no"
                  value={formData.roll_no}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formClass">
                <Form.Label>Class *</Form.Label>
                <Form.Control
                  as="select"
                  name="class_id"
                  value={formData.class_id}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
           
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formSection">
                <Form.Label>Grade *</Form.Label>
                <Form.Control
                  as="select"
                  name="section_id"
                  value={formData.section_id}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
             
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

        
          <Row className="mt-3">
            <Col xs={12} md={4}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formMiddleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  name="middlename"
                  value={formData.middlename}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={12} md={2}>
              <Form.Group controlId="formGender">
                <Form.Label>Gender *</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="formDob">
                <Form.Label>Date of Birth *</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
           
          </Row>

        
          <Row className="mt-5">
            <Col xs={12}>
              <h5>Parent Information</h5>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={12} md={4}>
              <Form.Group controlId="formFatherName">
                <Form.Label>Father/Mother Name</Form.Label>
                <Form.Control
                  type="text"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="formFatherPhone">
                <Form.Label>Father/Mother Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="father_phone"
                  value={formData.father_phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

    
          <Row className="mt-4">
            <Col xs={12}>
              <Button variant="primary" size="lg" block>
                Submit
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StudentAdmission;
