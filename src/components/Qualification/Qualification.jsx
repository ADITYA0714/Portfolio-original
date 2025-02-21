import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__conatiner container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
                         Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
                         Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className= {toggleState === 1 ? "qualification__content qualification__content-active" 
                    : "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                Matriculation
                                </h3>
                                <span className="qualification__subtitle">
                                Don Bosco Academy, Patna
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017-2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                        <div></div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification__title">
                                Intermediate
                                </h3>
                                <span className="qualification__subtitle">
                                Baldwin Academy , Patna
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019-2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                B.Tech Information Technology
                                </h3>
                                <span className="qualification__subtitle">
                                ABES Engineering College, Uttar Pradesh
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021-2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className= {toggleState === 2 ? "qualification__content qualification__content-active" 
                    : "qualification__content "}>
                        <div className="qualification__data">
                            <div >
                                <h3 className="qualification__title">
                                    Corporate Connect
                                </h3>
                                <span className="qualification__subtitle">
                                    Ecell ABESEC
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022-2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                        <div></div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification__title">
                                    Frontend Intern
                                </h3>
                                <span className="qualification__subtitle">
                                    KnowYourColleges.com
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023-2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Technical Co-ordinator
                                </h3>
                                <span className="qualification__subtitle">
                                    Talentrove ABESEC
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                     2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Qualification