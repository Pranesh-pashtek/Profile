import React, { Component } from "react";
import {Button,Form, FormGroup, Label, Input, FormText, Spinner  } from "reactstrap";
import axios from "axios";
// const nodemailer = require("nodemailer");
import Box from '@mui/material/Box';
import "./mail.css";
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from 'react-bootstrap/Modal';
import { Alert } from 'reactstrap';

// var http = require('http');
class mail extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(`${e.target.name}:${e.target.value}`);
  };
  async handleSubmit(e) {  
    e.preventDefault();
    const { name, email, subject } = this.state;
    // https://mail-pvc5.onrender.com
    const form = await axios.post("https://mail-pvc5.onrender.com/api/form", {
      name,
      email,
      subject
    }).then((data) => {
      console.log(data.status);
        
    if(!alert("Mail Sended")) document.location = '/mail';
      if (data.status == 200) {
        // window.location.href = "assets/img/gif1.gif";  
      //  <div>
      //   <Alert color="primary">
      //   This is a primary alert — check it out!
      // </Alert>
      //  </div>
        // window.location.href = "/mail";
        // if(!alert("Mail Sended")) document.location = '/mail';
        // if (window.confirm('Mail Sended'))
        //  {
        //   window.location.href = "/mail";
        //   }
        // else
        //  {
        //     // They clicked no
        //  }
        // if(confirm("my text here")) document.location = 'http://stackoverflow.com/';
    }
    }).catch((err) => {
      alert(err);
      // <form>
      //     <input type="button" value="Click Me" onclick={window.location.href = "/"} />
      // </form>
  });
  }

  render() {
    return (
      
       <React.StrictMode>
         <div className="main-title text-center wow fadeIn" style={{ marginTop : "90px"}}>
                      <h3>Send Mail </h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
        <div>
        <Box sx={{bgcolor: 'background.default',color: 'text.primary', marginTop:"10px", marginBottom:"145px"}}>
        <Container maxWidth="sm">
        <Box sx={{height: '45vh' }}> 
         {/* bgcolor: '#cfe8fc', */}
      <Form onSubmit={this.handleSubmit} >
        <FormGroup>
          <Label for="Name">Name:</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleEmail">Email:</Label>
          <Input type="email" name="email" onChange={this.handleChange} />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Input type="textarea" name="subject" onChange={this.handleChange} />
        </FormGroup>        
        {/* <Button>Submit</Button> */}
        <br />
        <br />
        {/* <div className="Button_submit">
        <Button variant="contained" disableElevation>
        Submit
        </Button>
        </div> */}
        <div className="Button_submit">
         <Button className="Button_submit3" >Submit </Button>
        </div>
      </Form>
      </Box>
      </Container>
      </Box>
      </div>
      </React.StrictMode>
    );
  }
}

export default mail;
