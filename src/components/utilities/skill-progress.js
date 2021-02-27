import React from 'react'

const SkillProgress = ({ progress, text }) => {
  return (
    <div className="progress">
      <span className="skill">{text} <i className="val">{progress}%</i></span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: `${progress}%`
          }}
        />
      </div>
    </div>
  )
}

export default SkillProgress
