import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormTwo = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       'service_yj5dgzp',
  //       'template_hfduayo',
  //       form.current,
  //       'WLENsTkBytC0yvItS'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   form.current.reset();
  //   showresult(true);
  // };

  // setTimeout(() => {
  //   showresult(false);
  // }, 5000);

  // ----------------------------------------------
  const [result, showresult] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      // alert('Form Submited');

      await axios
        .post('https://admin.onlinemarketingcompany.online/api/form', {
          name,
          email,
          phone,
          company,
          service,
        })
        .then(showresult(true));
      setTimeout(() => {
        showresult(false);
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form ref={form} className="axil-contact-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="contact-name" 
          placeholder="John Smith"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="contact-email" 
          placeholder="example@mail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          className="form-control"
          name="contact-phone" 
          placeholder="+123456789"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group ">
        <label>Company</label>
        <input
          type="text"
          className="form-control"
          name="contact-phone"
          placeholder="Company Name"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group mb--40">
        <label>Service</label>
        <Form.Select
          placeholder="Choose Your Service"
          className="form-control"
          onChange={(e) => {
            setService(e.target.value);
          }}
          name="service-drop"
          id="cars"
          required
        >
          <option disabled selected hidden>Choose Your Service</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Web Development">Web Development</option>
          <option value="Branding">Branding</option>
        </Form.Select>
      </div>
      <div className="form-group">
        <button
          type="submit"
          onClick={submit}
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
        >
          Get Pricing Now
        </button>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormTwo;
