import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import React from 'react';
import '../style/form.css';
function UserForm() {
  return (
    <>
      <form className="form">
        <FormControl>
          <InputLabel className="inputs" htmlFor="name">
            Enter Name
          </InputLabel>
          <Input className="inputs" id="name" name="name" color="secondary" />
        </FormControl>
        <FormControl>
          <InputLabel className="inputs" htmlFor="village">
            Village Name
          </InputLabel>
          <Input className="inputs" id="village" name="village" />
        </FormControl>
        <FormControl>
          <InputLabel className="inputs" htmlFor="contact">
            Enter Contact
          </InputLabel>
          <Input
            className="inputs"
            id="contact"
            name="contact"
            aria-describedby="contact-helper"
          />
          <FormHelperText className="inputs" id="contact-helper">
            We will keep your contact protected
          </FormHelperText>
        </FormControl>
        <Button size="large" color="primary" variant="contained">
          Add To Records
        </Button>
      </form>
    </>
  );
}

export { UserForm };
