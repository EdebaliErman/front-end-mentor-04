import React from 'react'

function ProfileCard({ avatar, profilText, name }) {
  return (
    <div className='profile-card'>
      <img src={avatar} alt={avatar} />
      <h3>{profilText}<span>{name}</span></h3>
    </div>
  )
}

export default ProfileCard
