import React from "react";
import { Link } from 'react-router-dom'
import passport from "./passport.jpg";
import Footer from './Footer'
import "./custom/style.css";

const Details = () => {
  return (
    <div className="my-3"><hr/>
      <h1 className="my-2"><i className="fas fa-user"></i> About Me</h1>
      <div className="grid-2">
        <div className="passport-txt">
          <p>
            Hello! I'm Emmanuel, a Frontend Developer with 
            Electrical and Electronics Background, based in Nigeria, Lagos. <br />
          </p>{" "}
          <br />
          <p>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>{" "}
          <br />
          <p>Here are a few technologies I work with recently:</p>
          <ul className="about-list">
            <li>
              <i className="far fa-arrow-alt-circle-right"></i> JavaScript
            </li>
            <li>
              <i className="far fa-arrow-alt-circle-right"></i> ReactJS
            </li>
            <li>
              <i className="far fa-arrow-alt-circle-right"></i> HTML & CSS
            </li>
            <li>
              <i className="far fa-arrow-alt-circle-right"></i> Node.js
            </li>
          </ul>
        </div>
        <div className="img-bg">
          <img src={passport} alt="passport-img" className="passport" />
          <div className="profile-icons">
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-github"></i></a>
            <a href="/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="my-3"><hr/>
        <h1 className="my-2"><i className="fas fa-code"></i> Project</h1>
        <div className="grid-2">
          <div className="project-img">
            <a href="/project">
              <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt="" />
            </a>
          </div>
          <div className="project-txt">
            <h3 className="text-right">Admaro Website</h3>
            <p className="pro-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, sint at aspernatur labore fugit.
            </p>
            <p className="text-right">
              <i className="far fa-arrow-alt-circle-right"></i> JavaScript
            </p>
            <p className="text-right">
              <i className="far fa-arrow-alt-circle-right"></i> HTML & CSS
            </p>
            <ul className='text-right my-1'>
              <li>
                <Link to="/project" className='btn'>
                  See More Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div><hr/>
      <Footer />
    </div>
  );
};

export default Details;
