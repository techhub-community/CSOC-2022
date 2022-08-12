import { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './form.css';
import LOADER from '../Loading/loading'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


export default class RegistrationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            TeamName: '',
            PhoneNumber: '',
            Member1: '',
            Member2: '',
            Member3: '',
            Member4: '',
            submitted: 1
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            alert("You clicked outside of me!");
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const notify = () => toast('Successfully Registered ✅');
        console.log(this.state);
        this.setState({
            submitted: 2
        });
        notify();
        axios.post('https://sheet.best/api/sheets/4a35131b-55bb-471c-b6bf-51b0f5457b0e', this.state)
            .then(response => {
                this.setState({
                    TeamName: '',
                    PhoneNumber: '',
                    Member1: '',
                    Member2: '',
                    Member3: '',
                    Member4: '',
                    submitted: 1
                });
            });

    }

    render() {

        // const notify = () => toast('Here is your toast.');

        const { TeamName, PhoneNumber, Member1, Member2, Member3, Member4 } = this.state;

        if (this.state.submitted == 1)

            return (
                <div className="container">
                    <Header className="csocregister" as='h2'>CSOC-2022 Registration</Header>
                    <Toaster position="top-center" reverseOrder={false} />
                    <Form className="form" onSubmit={this.submitHandler}>
                        <Form.Field>
                            <input placeholder='Enter your Team Name' type="text" name="TeamName" value={TeamName} onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Enter your Mobile Number' type="text" name="PhoneNumber" value={PhoneNumber} onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Enter Member1 Name' type="text" name="Member1" value={Member1} onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Enter Member2 Name' type="text" name="Member2" value={Member2} onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Enter Member3 Name' type="text" name="Member3" value={Member3} onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Enter Member4 Name' type="text" name="Member4" value={Member4} onChange={this.changeHandler} />
                        </Form.Field>
                        <Button color="submitbtn" type='submit'>Submit</Button>
                    </Form>

                </div>
            );

        return (
            <LOADER />
        )
    }
}