import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import React from 'react';
import { addUser } from '../redux/user-actions';
import '../style/form.css';

const initialValues = {
  name: '',
  village: '',
  contact: '',
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log('this is the running onsubmit');
};

function UserForm(props) {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  console.log('the state is props==>', props.user);

  const { name, village, contact } = formik.values;
  return (
    <>
      <form className="form">
        <FormControl>
          <InputLabel className="inputs" htmlFor="name">
            Enter Name
          </InputLabel>
          <Input
            aria-describedby="nameHelper"
            className="inputs"
            id="name"
            name="name"
            color="secondary"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel className="inputs" htmlFor="village">
            Village Name
          </InputLabel>
          <Input
            aria-describedby="villageHelper"
            className="inputs"
            id="village"
            name="village"
            value={formik.values.village}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel className="inputs" htmlFor="contact">
            Enter Email
          </InputLabel>
          <Input
            type="email"
            className="inputs"
            id="contact"
            name="contact"
            aria-describedby="contact-helper"
            value={formik.values.contact}
            onChange={formik.handleChange}
          />
          <FormHelperText className="inputs" id="contact-helper">
            We will keep your Email secured.
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          size="large"
          color="primary"
          variant="contained"
          disabled={!(name && village && contact)}
        >
          Add To Records
        </Button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state };
};

const mapDisptachToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(UserForm);
