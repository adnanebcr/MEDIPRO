import React, { Component } from "react";
import {
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
} from "mdbreact";
import axios from "axios";
import "../App.css";
import { Redirect } from "react-router-dom";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    societe: "",
    message: "",
    redirect: false,
    modal: false,
  };

  //handle inputs

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleSociete = (e) => {
    this.setState({
      societe: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/Contact" />;
    }
  };

  formSubmit = (e) => {
    e.preventDefault();

    let Data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      societe: this.state.societe,
      message: this.state.message,
    };
    if (Data.name && Data.email && Data.phone && Data.message) {
      axios.post("/Contact", Data).then((res) => {
        this.setState({
          sent: true,
        });
      });
      this.toggle();
    }

    this.resetForm();
  };

  //reseting initial data
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      societe: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <section id="contact-section" className="contact-section pt-4 ">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient" />
          <MDBContainer>
            <MDBCard id="contact-card">
              <MDBRow>
                <MDBCol lg="8">
                  <form onSubmit={this.formSubmit}>
                    <MDBCardBody className="form">
                      <h3 className="mt-4 ">
                        <MDBIcon icon="envelope" className="pr-2" />
                        Contactez-nous .
                      </h3>
                      <MDBRow>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="text"
                              id="form-contact-name"
                              placeHolder=" Nom"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleName}
                              className="black-text"
                              required
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="email"
                              id="form-contact-email"
                              placeHolder=" Adresse mail "
                              name="email"
                              value={this.state.email}
                              onChange={this.handleEmail}
                              className="black-text"
                              required
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="text"
                              id="form-contact-phone"
                              placeHolder=" Téléphone"
                              name="phone"
                              value={this.state.phone}
                              onChange={this.handlePhone}
                              className="black-text"
                              required
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="text"
                              id="form-contact-company"
                              placeHolder=" Société (facultatif)"
                              name="societe"
                              value={this.state.societe}
                              onChange={this.handleSociete}
                              className="black-text"
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="textarea"
                              id="form-contact-message"
                              placeHolder=" Message"
                              name="message"
                              value={this.state.message}
                              onChange={this.handleMessage}
                              className="black-text"
                              required
                            />
                            <MDBBtn type="submit" rounded color="primary">
                              <MDBIcon icon="paper-plane" className="" />{" "}
                              <span className="">Envoyer</span>
                            </MDBBtn>
                            <MDBModal
                              isOpen={this.state.modal}
                              toggle={this.toggle}
                            >
                              <MDBModalHeader toggle={this.toggle}>
                                Message envoyé !
                              </MDBModalHeader>
                              <MDBModalBody>
                                Votre message a bien été envoyé . Nous
                                reviendrons vers vous dans les plus brefs délais
                                . Merci pour votre confiance
                              </MDBModalBody>
                            </MDBModal>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </form>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBCardBody className="contact text-center h-100 ">
                    <h3 className=" my-4 pb-2">Nous contacter</h3>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p className="">
                          <MDBIcon icon="map-marker-alt" className=" pr-2" />
                          100, rue Brahim Annakhai – Mâarif 20370 – Casablanca
                        </p>
                      </li>
                      <li>
                        <p className="">
                          <MDBIcon icon="phone" className=" pr-2" />+ 212 522
                          980 772
                        </p>
                      </li>
                      <li>
                        <p className="">
                          <MDBIcon icon="envelope" className=" pr-2" />
                          contact@example.com
                        </p>
                      </li>
                    </ul>
                    <hr className="hr-light my-4" />
                    <ul className="list-inline text- list-unstyled">
                      <li>
                        <h5>Suivez nous ! </h5>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.facebook.com/mediprogroupe"
                          className="icon p-2 fa-lg w-ic"
                        >
                          <MDBIcon fab icon="facebook-square" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className=" icon p-2 fa-lg w-ic">
                          <MDBIcon fab icon="linkedin-in" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="icon p-2 fa-lg w-ic">
                          <MDBIcon fab icon="instagram" />
                        </a>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBContainer>
          <div className="my-5"></div>
        </MDBView>
      </section>
    );
  }
}
