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
import { setUser } from '../redux/user-actions';
import '../style/form.css';
import { db } from '../style/firebase';
import firebase from 'firebase';

const initialValues = {
  name: '',
  village: '',
  contact: '',
};

function UserForm(props) {
  const formik = useFormik({
    initialValues: initialValues,
  });

  const addUserToDB = (user) => {
    db.collection('user').add({
      userDetails: user,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const { name, village, contact } = formik.values;
  return (
    <div>
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
          onClick={(e) => {
            e.preventDefault();
            addUserToDB(formik.values);
          }}
        >
          Add To Records
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { users: state };
};

const mapDisptachToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(UserForm);
