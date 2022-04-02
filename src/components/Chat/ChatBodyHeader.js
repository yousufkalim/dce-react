import React,{useState} from "react";
import ron from "../../assets/ron.jpeg";
import attachment from "../../assets/attachment.svg";
import threedots from "../../assets/dotted.svg";
const ChatBodyHeader = () => {
  const [inputData, setInputData] = useState("")
  const onChange =(e)=>{
   const name= e.target.name;
   const value = e.target.files[0];
   setInputData(e.target.files[0])
  }
  return (
    <>
      <div className="main">
        <div className="img-user">
          <img className="img-user-chat" src={ron} />
          <div>
            <p className="usr"> Zain</p>
            <p className="last-online"> last online 3 hours ago</p>
          </div>
        </div>
        <div>
        <label htmlFor="filePicker">
        <input
                    type="file"
                    accept="*"
                    hidden
                    id="filePicker"
                    onChange={onChange}
                    name="attachment"
                  />
          <img className="chat-header-icons" src={attachment} />
          </label>
          <img className="chat-header-icons-two" src={threedots} />
        </div>
      </div>
    </>
  );
};

export default ChatBodyHeader;
