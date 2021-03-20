import React from 'react'
import '../style/components/_level-indicator.scss'

const LevelIndicator = ({ level }) => {
  return (
    <div className='levelIndicator-container'>
      { level === "Iniciante" ? (
        <span className='levelIndicator-badge levelIndicator-badge-beginner' />
      ) : (
        <>
          { level === "Intermediário" ? (
            <span className='levelIndicator-badge levelIndicator-badge-intermediary' />
          ) : (
            <span className='levelIndicator-badge levelIndicator-badge-advanced' />
          )}
        </>
      ) }
      <a className='levelIndicator-level'>{ level }</a>
    </div>
  )
}

export default LevelIndicator