import React from 'react'
import './Card.css'
export default class Card extends React.Component{
    render(){
        return (
            <div className="card">
                <div className="card-logo">
                    <img className="logo" src='https://tse2.mm.bing.net/th?id=OIP.iWues8InGP4hMtTdEbS3LgHaFN&pid=Api&P=0'  />
                </div>
                <div className="card-content">
                  <div className='title'>titulo</div>  
                  <div className="description">hola </div>
                </div>
            </div>
        )
    }
}