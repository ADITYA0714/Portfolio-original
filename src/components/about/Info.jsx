import React from 'react'

const Info = () => {
  return (
<div className="about__info grid">
    <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title"> Coding</h3>
        <span className="about__subtitle"> 4+ Years</span>
    </div>

    <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title"> Desinging</h3>
        <span className="about__subtitle"> 1+ Years</span>
    </div>

    <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Awesomeness</h3>
        <span className="about__subtitle"> 15+ Years</span>
    </div>
</div>
  )
}

export default Info