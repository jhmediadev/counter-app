import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value   
    }


    handleIncrement = () => {
        this.setState( {value: this.state.value + 1})
    }

    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value >= 5 ? "warning" : "primary";
        return classes;
    }
    
    formatCount() {
        const {value} = this.state;
        return value === 0 ? 0 : value; 
    }
    
    
    render() {
          
        let classes = this.getBadgeClasses();

        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm">Increment</button>
            </div>
            );    
    }
}
 
export default Counter;