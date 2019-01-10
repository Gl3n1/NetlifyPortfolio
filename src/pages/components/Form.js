import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const FormInputs = styled.input`
  margin-bottom: 20px;
  height: 30px;
  width: 400px;
`

const FormTextArea = styled.textarea`
  height: 100px;
  width: 400px;
`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const Form = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
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
    <FormInputs name="name" placeholder="Your Name" type="text" />
    <br></br>
    <FormInputs name="email" placeholder="Your Email" type="email" />
    <br></br>
    <FormTextArea name="message" placeholder="Message" type="text"/>
    <br></br>
    <Button variant="contained" color="primary" className={classes.button} type="submit">
      Submit
    </Button>
    </form>
    <p>Or Alternatively, You can contact me at glenwan@gmail.com</p>
    </React.Fragment>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
