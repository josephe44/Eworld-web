import React from "react";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div className="grid my-4">
      <h1 className="text-center large">Get In Touch</h1>
      <p className="text-center">
        Although I'm currently looking for any new opportunities, my inbox is
        always open. Whether you have a job, a question or just want to say hi,
        I'll try my best to get back to you!
      </p>
      <div className="my-1 text-center">
        <ul>
          <li>
            <a href='mailto:josephe44@gmail.com' className="hero-btn">
              Say Hello
            </a>
          </li>
        </ul>
      </div>
      <div className="all-center">
        <img src="https://image.freepik.com/free-vector/cartoon-tech-geek_10308-311.jpg" alt="" style={{width: '30%', height: 'auto'}}/>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
