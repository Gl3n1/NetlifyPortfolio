import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { navigateTo } from "gatsby-link";

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit,
    width: 100
  },
  input: {
    display: 'none',
  }
});

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Form extends React.Component {
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    console.log(this.state)
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const { classes } = this.props;

    return (
      <form 
      className={classes.container} 
      autoComplete="off" 
      name="contact" 
      method="POST"
      validate="true"
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      onSubmit={this.handleSubmit}>
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
        <TextField
          id="standard-name"
          name="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          required={true}
        />
        <TextField
          id="standard-email"
          name="email"
          label="Email"
          type="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          required={true}
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          required={true}
          onChange={this.handleChange('message')}
          value={this.state.message}
        />
        <Button variant="contained" color="primary" className={classes.button} type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
