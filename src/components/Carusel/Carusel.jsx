import React, { Component } from 'react'
import CaruseLitem from './CaruselItem'
import './Carusel.css'

export default class Carusel extends Component {
    
    render() {
        const items = [
            {plate: 'am123r', url:''},
            {plate: 'am321r', url:''},
            {plate: 'am4543r', url:''},
            {plate: 'am2354r', url:''},
            {plate: 'am341r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am3431r', url:''},
            {plate: 'am866r', url:''},];
        return (
            <ul>
                {items.map(item => {
                    return <CaruseLitem item={item}/>
                })}
            </ul>
        )
    }
}
