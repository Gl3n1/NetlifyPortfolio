import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const FormInputs = styled.input`
  height: 30px;
  width: 400px;

  @media(max-width: 768px) {
    width: 100%;
  }
`

const FormTextArea = styled.textarea`
  height: 100px;
  width: 400px;

  @media(max-width: 768px) {
    width: 100%;
  }
`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const FormText = styled.p`
  font-size: 2rem;
  color: #fff;

  span {
    font-size: 1.6rem;
  }
`

const FormTitle = styled.h2`
  color: #fff;
`

const Form = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <FormTitle>Contact me</FormTitle>
      <form
      autoComplete="off" 
      name="contact" 
      method="POST"
      validate="true"
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      action="/"
    >
    <FormInputs type="hidden" name="form-name" value="contact" />
    <p hidden> <label htmlFor="bot-field">Don’t fill this out:{' '}<input name="bot-field" /> </label> </p>
    <FormText>Name:</FormText>
    <FormInputs name="name" type="text" required />
    <FormText>Email:</FormText>
    <FormInputs name="email" type="email" required />
    <FormText>Message:</FormText>
    <FormTextArea name="message" type="text"  required />
    <Button variant="contained" color="primary" className={classes.button} type="submit">
      Submit
    </Button>
    </form>
    <FormText><span>Alternatively, You can contact me at glenwan@gmail.com</span></FormText>
    </React.Fragment>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
