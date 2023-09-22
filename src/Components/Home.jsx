// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/img/heroo.svg';
import chain from '../assets/img/chain.svg';
import thrive from '../assets/img/thrive.svg';
import rules from '../assets/img/rules.png';
import introduction from '../assets/img/introduction.svg';
import judging from '../assets/img/judging.png';
import faq from '../assets/img/faq.svg';
import creative from '../assets/img/creative.svg';
import prizes from '../assets/img/prizes.svg';

import Accordion from '../Components/Accordion';
import TimeCounter from '../Components/TimeCounter';

function Home() {
  // Defining the timeline data
  const timelineData = [
    {
      date: 'September 2023',
      event: 'Hackathon Announcement',
      description: 'Official announcement of getlinked Tech Hackathon 1.0.',
    },
    {
      date: 'October 2023',
      event: 'Registration Opens',
      description: 'Registration for the hackathon begins.',
    },
    {
      date: 'November 2023',
      event: 'Submission Deadline',
      description: 'Deadline for submitting hackathon projects.',
    },
    {
      date: 'December 2023',
      event: 'Judging and Evaluation',
      description: 'Judging panel evaluates and scores the submissions.',
    },
    {
      date: 'January 2024',
      event: 'Winners Announcement',
      description: 'Winners of the hackathon are announced.',
    },
  ];

  const judgingCriteria = [
    {
      title: 'Innovation and Creativity:',
      description: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.',
    },
    {
      title: 'Functionality:',
      description: 'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution',
    },
    {
      title: 'Impact and Relevance:',
      description: 'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.',
    },
    {
      title: 'Technical Complexity:',
      description: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },
    {
      title: 'Adherence to Hackathon Rules:',
      description: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
    }
  ]

  return (
    <div>
      <section id="hero" className="vh-100">
        <div className="container px-4 pt-5 pt-lg-5">
          <div className="curve position-absolute d-lg-none d-flex text-center ">
            <i className="h4 fw-bolder text-center">Igniting a Revolution in HR Innovation</i>
          </div>
          <div className="row  pt-5">
            <div className="col-lg-6 col-md-12 pt-5">
              <img className='position-absolute hero-txt-img creative' src={creative} alt='creative' />
              <h2 className="fw-bolder display-4 mt-5 text-center text-lg-start">getlinked Tech <br /> Hackathon <span>1.0</span> <img src={chain} className=" hero-txt-img" /> <img src={thrive} className="hero-txt-img" /> </h2>
              <p className="mt-3 text-center text-lg-start">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link className="mt-4 btn p-3 text-center  w-50">Register</Link>
              </div>
              <TimeCounter />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="curve d-lg-flex  text-start  position-absolute d-none pt-5 pt-lg-0">
                <i className="h4  fw-bolder ">Igniting a Revolution in HR Innovation</i>
              </div>
              <img src={hero} className='w-100 mt-5' />
            </div>
          </div>
        </div>
      </section>

      <section id='introduction' className='introduction pb-5'>
        <div className="container pb-5 pt-5 ">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img src={introduction} className=' w-100' />
            </div>
            <div className="col-lg-6 col-md-12 mt-5 pt-5 text-center text-lg-start">
              <h2 className='mt-5 fw-bold'>Introduction to getlinked<br /><span>tech Hackathon 1.0</span></h2>
              <p className='text-start mt-5'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='rules' className='rules pb-5'>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-5 pt-5 text-center text-lg-start">
              <h2 className='mb-3 fw-bold mt-5'>Rules and <br /><span>Guidelines</span></h2>
              <p className='text-start mt-5'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={rules} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>

      <section id='judging' className='judging pb-5'>
        <div className="container pb-5 pt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-5 pt-5 text-center text-lg-start">
              <img src={judging} alt='judging criteria' className='w-100 mt-5 pt-5' />
            </div>
            <div className="col-lg-6 col-md-12 mt-5 pt-5">
              <h2 className='fw-bold mb-4'>Judging Criteria<br /><span>Key attributes</span></h2>
              <div className="texy">
                {judgingCriteria.map((item, index) => (
                  <div key={index}>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                ))}
                < div className='d-flex justify-content-center justify-content-lg-start'>
                <Link className=' mt-4 btn p-3 text-center w-50'>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='faq' className='faq pb-5'>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6 col-md-12  text-center text-lg-start">
              <h2 className='fw-bold mb-3'>Frequently Asked <br /><span>Questions</span></h2>
              <h6 className=' mb-5'>We got answers to the questions that you might want to ask<br /> about <span className='fw-bold'> getlinked Hackathon 1.0</span></h6>
              <Accordion /> {/* the Accordion component is here */}
            </div>
            <div className="col-lg-6 col-md-12 mt-5">
              <img src={faq} alt='' className='w-100' />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section id='timeline' className='timeline pb-5 pt-5'>
        <div className="container d-flex justify-content-center text-center">
          <div className="row">
            <div className="col-12">
              <div className="mt-5">
                <h2 className="fw-bold text-center">Timeline</h2>
                <p className='text-center pb-5'>Here is the breakdown of the time we anticipate during the upcoming event.</p>
              </div>
              <ul className="timeline ">
                {timelineData.map((event, index) => (
                  <li className={` mt-5 timeline-item ${index % 2 === 0 ? 'timeline-inverted' : ''}`} key={index}>
                    <div className="timeline-badge">
                      
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title fw-bold">{event.event}</h4>
                        <p>
                          <small className=''>
                            <i className=" text-danger"></i> {event.date}
                          </small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p className='fw-normal'>{event.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container pt-5 pb-5">
        <div className="row mx-auto">
          <div className="col-lg-6 col-md-12">
          <img src={prizes} alt="prizes" className='w-100'/>
          </div>

          <div className="col-lg-6 col-md-12 mt-5">
            <h2 className='fw-bold'>Prizes and <br /> <span>Rewards</span></h2>
            <p>Highlight of the prizes or rewards for winners and for participants.</p>

<div className="cards">

</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
