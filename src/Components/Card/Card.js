import React from 'react'
import CardText from '../CardText/CardText'
import { data } from '../../Data/data'
import ProfileCard from '../ProfileCard/ProfileCard'

function Card() {

    return (
        <div className='card'>
            <div className='card-img group'>
                <img className='group-hover:opacity-20' src={data.nftImg} alt={data.nftImg} />
                <span className='group-hover:opacity-100 opacity-0'>{data.view}</span>
            </div>
            <CardText
                head={data.headText}
                info={data.paragraph}
                clock={data.clock}
                time={data.time}
                eth={data.ethSvg}
                ethText={data.eth}
            />
            <hr className='text-info w-[19.2rem] mt-[-1.1rem] mb-[-0.5rem] rounded-full opacity-25 ' />
            <ProfileCard
                avatar={data.avatarImg}
                profilText={data.profile}
                name={data.name}
            />
        </div>
    )
}

export default Card
