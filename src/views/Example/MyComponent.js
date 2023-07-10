import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "",
        channel: "học reactjs"
    }

    /*
     JSX => return block

     */

    handleOnChangeName = (event) => {
        //merge 
        this.setState({ 
            name: event.target.value,
            channel: "hoc reactjs lam fullstack"
        });
    }

    handleClickButton = () => {
        console.log('his the bitton');
        alert('click me');
    };
    //re render
    render() {
        console.log('>>>call render: ',this.state)
        return (
            <>
                <div className='first'>
                   <input value={this.state.name} type='text' 
                    onChange={(event) => this.handleOnChangeName(event)} />
                    My name is {this.state['name']}
                </div>
                <div className='second'>
                   Chào mừng đến với channel: {this.state.channel}
                </div>
                <div className='third'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;