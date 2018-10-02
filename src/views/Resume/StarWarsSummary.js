import React from 'react'

class StarWarsSummary extends React.Component {
  render () {
    return (
      <div className='star-wars-intro'>
        <p id='start'>A short time ago in a browser very, very close&hellip;</p>

        <div id='titles'>
          <div id='titlecontent' className='titlecontentclass'>

            <p className='center'>EPISODE I<br />A New Hope for DevelopIntelligence</p>

            <p>The company has been searching for someone to help their efforts.</p>

            <p>Enter Fred Olivieri, a senior software engineer with over 20 years of hands-on experience and expertise in application software design and development and involvement in all phases of Software Development Lifecycle (SDLC).</p>
            <p>He was responsible for having architected and developed multiple highly successful Java EE based commercial software applications fully internationalized, using the following JEE technologies: Session and Entity EJBs, CMP 2.0, Message Driven Beans, JMS, JDBC, JSP, JSF, Hibernate, Spring, JSTL, Servlets, Struts MVC framework.</p>
            <p>Having extensive experience with agile software development techniques, such as Extreme Programming (XP) and Scrum methodologies (certified scrum master), as well as Rational Unified Process using UML ,Class-responsibility-collaboration (CRC) cards. He seems like he is the ideal candidate to join the cause.</p>
            <p>But perhaps more pertinent, he has expert level front end skills in HTML/DHTML/XHTML, JavaScript, Cascading Style Sheets (CSS), JSP, Servlets, XSL, JSON, Java Server Faces (JSF) including Oracle ADF Faces and Apache MyFaces, Grails, Ajax Component frameworks such as Node.js, Dojo, YUI, Angular JS, Facebook’s React, and Sencha Command/ExtJS.</p>
            <p>Hoping to take advantage of his exceptional leadership and management skills, experienced in leading local, remote, and offshore teams, they are evaluating whether he can support their efforts.</p>
            <p>Having been an instructor for University of California, Irvine teaching courses related to J2EE development: JSP, JDBC, UML, Intro to J2EE, Enterprise Java Beans, they are hoping Fred's leadership will provide the spark the company needs to move to the next level.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default StarWarsSummary
