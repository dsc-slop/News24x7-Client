import React, { useState } from "react";
import "../help.css";
import img from "./faq.png";

const initialList = [
  {
    id: 1,
    question: "Do I need to login to use the application?",
    answer:
      "You need to login to create a post or upvote, downvote or comment on anything. Without logging in you can view the general feed.",
    isShow: false,
  },
  {
    id: 2,
    question: "What should I do if I find any post abusive or against someone?",
    answer:
      "You can report the post and it will be taken into consideration by the admin if it is necessary to report the post.",
    isShow: false,
  },
  {
    id: 3,
    question: "Can I post something which is articulated by me?",
    answer:
      "No, you just have to post the link of an article with its title, any relevant image and its corresponding tags.",
    isShow: false,
  },
  {
    id: 4,
    question: "Whom should I contact in case of any queries?",
    answer:
      "The email-id of the developers team is given on the contact us page. You can drop an email in case of any queries.",
    isShow: false,
  },
];
const Faqs = () => {
  const [data, setData] = useState(initialList);

  const handleShowStatus = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, isShow: !item.isShow };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="FaqSectionContainer">
      <h1 className="title-right">FAQs</h1>
      <div className="faq-header">
        <img src={img} alt="FAQs" className="faq-image" />
        <p className="faq-head-para">
          Stuck up somewhere? <br></br> Need the help of our developers?{" "}
          <br></br> Feel free to contact anyone from the developers tema.{" "}
          <br></br> For any queries just drop a mail at:<br></br>{" "}
          <span>sengrp3@gmail.com </span>
        </p>
      </div>
      <div className="FaqSectionList">
        <ul style={{ listStyle: "none" }} className="faq-list">
          {data.map((item) => (
            <li key={item.id} className="faq-list-li">
              {item.isShow === false ? (
                <i
                  class="fa fa-plus"
                  onClick={() => handleShowStatus(item.id)}
                ></i>
              ) : (
                ""
              )}
              {item.isShow === true ? (
                <i
                  class="fa fa-minus"
                  onClick={() => handleShowStatus(item.id)}
                ></i>
              ) : (
                ""
              )}
              <h2
                style={{ display: "inline-block" }}
                className="faq-que"
                onClick={() => handleShowStatus(item.id)}
              >
                {item.question}
              </h2>
              {item.isShow === true ? (
                <p style={{ display: "inline-block" }} className="faq-ans">
                  {item.answer}
                </p>
              ) : (
                ""
              )}
              <hr style={{ wdith: "70%" }} className="list-hr" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
