import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

class Form extends React.Component {
  state = {
    name: '',
    message: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" 
      name="contact" method="POST" data-netlify="true">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
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
