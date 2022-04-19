import React, { useState } from "react";
import ClientAppBar from "../../components/ClientAppBar";
import addicon from "../../assets/addicon.svg";
import SearchIcon from "../../assets/search1.svg";
import error from "../../assets/errorfaqs.svg";
function Faqs() {
  const [faqImage, setfaqImage] = useState(false);
  return (
    <>
      <ClientAppBar />
      <div style={{ background: "#DFDFDF" }} className="container">
        <div style={{ height: "100vh" }} className="faq-container">
          <p className="frequently-asked-q">Frequently Asked Question</p>
          <p className="freq-asked-text">
            A frequently asked questions list is often used in articles,
            websites, email lists, and online forums where common questions tend
            to recur, for example through posts or queries
          </p>
          <SearchInput />
          <div className="faq-q-container">
            {faqImage ? (
              <img style={{ width: "40%" }} src={error} />
            ) : (
              <>
                <Questions />
                <Questions />
                <Questions />
                <Questions />
                <Questions />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function SearchInput({}) {
  return (
    <>
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "end",
            alignItems: "end",
            display: "flex",
          }}
        >
          <input
            type="text"
            placeholder="Ask your Question"
            className="search-input-faqs"
          />
          <img src={SearchIcon} className="search-Input-Icon" />
        </div>
      </div>
    </>
  );
}
function Questions() {
  const [expndText, setExpandText] = useState(false);
  const expandText = () => {
    setExpandText(!expndText);
  };
  return (
    <>
      <div className="question-text">
        <img className="add-icon" onClick={expandText} src={addicon} />
        <p>What is Lorem Ipsum?</p>
      </div>
    </>
  );
}

export default Faqs;
