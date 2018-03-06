import React, { Component } from 'react';
import '../Circles/Circles.css';

class Circles extends Component {
    render () {
        return (
            <div className="Circles">
                <div className={'' ? 'selected' : ''}>1</div>
                <div className={'' ? 'selected' : ''}>2</div>
                <div className={'' ? 'selected' : ''}>3</div>
                <div className={'' ? 'selected' : ''}>4</div>
            </div>
        )
    }
}

export default Circles;