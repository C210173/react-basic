import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    //key:value
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'abc123', title: 'develop1', salary: '300$'},
            {id: 'abc1234', title: 'test1', salary: '400$'},
            {id: 'abc1235', title: 'project manager', salary: '1000$'}
        ]
    }

    /*
     JSX => return block

     */
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        console.log('>>>check data input: ', this.state)
    }

    //re render
    render() {
        console.log('>>>> call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor='fname'>First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstName}
                    onChange={(event)=>this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor='lname'>Last name:</label><br/>
                    <input
                    type="text" 
                    value={this.state.lastName}
                    onChange={(event)=>this.handleChangeLastName(event)}
                    />
                    <br/><br/>
                    <input type="submit"
                    onClick={(event)=>this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent 
                    name = {this.state.firstName}
                    age={'23'}
                    address={'gia lai'}
                    arrJobs={this.state.arrJobs}    
                />
            </>
        )
    }
}

export default MyComponent;