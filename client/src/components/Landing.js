import React, { Component } from 'react';
import {
    Button,
    Form
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    renderLoginForm() {
        return (
            <Form>
                <Form.Field>
                    <label>Username</label>
                    <input name='username' placeholder="Username" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' name='password' placeholder="Password" />
                </Form.Field>
                <Button type="submit">Login</Button>
            </Form>
        );
    }

    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h1>Schedule Hero</h1>
                    <div>Here to save the date!</div>
                </div>
                {this.renderLoginForm()}
                <div>Don't have an account? <Link to='/register'>Sign up!</Link></div>
            </div>
        )
    }
}

export default Landing;