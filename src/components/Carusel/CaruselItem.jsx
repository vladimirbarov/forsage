import React, { Component } from 'react'
import './CaruselItem.css'

export default class CaruselItem extends Component {
    render() {
        return (
            <li className="carusel-item">
                <div> <img src={this.props.item.url}></img></div>
                <div>{this.props.item.plate}</div>
            </li>
        )
    }
}
