import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "Messi",
        channel: "học reactjs"
    }

    /*
     JSX => return block

     */

     handleOnChangeName = (event) => {
        this.setState({ name: event.target.value });
     }

    render() {
        return (
            <>
                <div className='first'>
                   <input value={this.state.name} type='text' onChange={(event) => this.handleOnChangeName(event)} />
                    My name is {this.state['name']}
                </div>
                <div className='second'>
                   Chào mừng đến với channel: {this.state.channel}
                </div>
            </>
        )
    }
}

export default MyComponent;