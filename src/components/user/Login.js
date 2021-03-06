import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginFetch } from '../../redux/actions';
import { Button, Form, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import ErrorMessage from '../ErrorMessage';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginFetch(this.state);
  }

  render() {
    if (localStorage.token) {
      return <Redirect to="/" />
    }

    return (
      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <Form onSubmit={ event => this.handleSubmit(event) }>
              <h1>Login</h1>
              <Form.Field>
                <label>Username</label>
                <input
                  placeholder='Username'
                  name="username"
                  value={this.state.username}
                  onChange={(event) => this.handleChange(event)}
                  />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder='Password'
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event)}
                  />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
            { this.props.errorMessage
              ? <ErrorMessage message={this.props.errorMessage}/>
              : null
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
    user: state.reducer.user,
    pathname: state.router.location.pathname,
    errorMessage: state.reducer.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
    loginFetch: (userObj) => dispatch(loginFetch(userObj))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
