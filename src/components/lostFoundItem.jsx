import React from 'react'
import { Link } from 'react-router-dom'

export default function LostFoundItem({ item }) {
    return (
        <div className='lostItemContainer'>
            <span className='itemType'>{item.type}</span>
            <img src={item.imageUrl} alt="" />
            <div className="itemDatailsContainer">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='btn-container'>
                    <Link to={`single-item/${item.title}`} className='viewMore'>View more</Link>
                </div>
            </div>
        </div>
    )
}
