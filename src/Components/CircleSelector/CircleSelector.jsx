import React, { Component } from 'react';
import '../CircleSelector/CircleSelector.css';

class CircleSelector extends Component {
    render () {
        return (
            <div className="CircleSelector">
                <button>Select Circle 1</button>
                <button>Select Circle 2</button>
                <button>Select Circle 3</button>
                <button>Select Circle 4</button>
            </div>
        )
    }
}

export default CircleSelector;