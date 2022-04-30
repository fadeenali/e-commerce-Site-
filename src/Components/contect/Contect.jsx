import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contect2.css";

const Contect = () => {
  const formRef = useRef();


  const hsndleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lphwefe",
        "template_mgfwnli",
        formRef.current,
        "user_o6STJRnbv3GiGawSsrYvD"
      )
      .then(
        (result) => {
          console.log(result.text);
         
        },
        (error) => {
          console.log(error.text);
        }
      );

      
  };

  return (
    <>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Something on your mind?</h1>
            <div className="c-info">
              <div className="c-info-item">
                <p>
                  {" "}
                  <i className="fa-solid fa-phone"></i>
                  +91 00000-00000
                </p>
              </div>
              <div className="c-info-item">
                <p>
                  <i className="fa-solid fa-envelope"></i>{" "}
                 copshop@gmail.com
                </p>
              </div>
              <div className="c-info-item">
                <p>
                  {" "}
                  <i className="fa-solid fa-house-chimney"></i> 
                  somewhere on earth!!
                </p>
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story?</b> Get in touch.Always available for new
              Interesting things!
            </p>

            <form ref={formRef} onSubmit={hsndleSubmit}>
              <input type="text" placeholder="name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea name="message" rows="5" placeholder="Messege" />
              <div>

                <button className="Submit-btn" >
                  Submit
                </button>
             
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contect;
