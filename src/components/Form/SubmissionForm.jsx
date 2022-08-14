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
            Github: '',
            URL: '',
            Brief: '',
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
        const notify = () => toast('Successfully Submitted ✅');
        console.log(this.state);
        this.setState({
            submitted: 2
        });
        notify();
        axios.post('https://sheet.best/api/sheets/e1a31352-5a6a-4e53-b4bf-78ca67695299', this.state)
            .then(response => {
                this.setState({
                    TeamName: '',
                    Github: '',
                    URL: '',
                    Brief: '',
                    submitted: 1
                });
            });

    }

    render() {

        // const notify = () => toast('Here is your toast.');

        const { TeamName, Github, URL, Brief } = this.state;

        if (this.state.submitted == 1)

            return (
                <div className="container">
                    <Header className="csocregister" as='h2'>CSOC-2022 Submission</Header>
                    <Toaster position="top-center" reverseOrder={false} />
                    <Form className="form" onSubmit={this.submitHandler}>
                        <Form.Field>
                            <input placeholder='Enter your Team Name' type="text" name="TeamName" value={TeamName} onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Enter the Repo Link' type="text" name="Github" value={Github} onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Enter the URL' type="text" name="URL" value={URL} onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                            <textarea placeholder='Explain your Project in min. 100 words' type="text" name="Brief" value={Brief} onChange={this.changeHandler} />
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