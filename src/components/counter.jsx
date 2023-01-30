import React, { Component } from 'react';

class Counter extends Component {
    
    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value >= 5 ? "warning" : "primary";
        return classes;
    }
    
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 0 : value; 
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-primary btn-m">+</button>

                    <button onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary btn-m m-2" disabled={this.props.counter.value === 0? "disabled" : ""}>-</button>

                    <button onClick={() => this.props.onDelete(this.props.counter.id)}
                        className='btn btn-danger btn-m m-2'>Delete</button>
                </div>
            </div>
            );    
        }
    
    
    

}

export default Counter;