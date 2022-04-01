import React, { useState } from "react";
import send from "../../assets/send.svg";
import one from "../../assets/attachone.svg";
import two from "../../assets/attachtwo.svg";
import three from "../../assets/attachthree.svg";
import four from "../../assets/attachfour.svg";
import Box from "@mui/material/Box";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
const ChatBodyBottom = ({ setFileName }) => {
  const [iconsToggle, setIconsToggle] = useState(true);
  const [values, setvalues] = useState({
    video: "",
    image: "",
    file: "",
  });
  const ToggleIcon = () => {
    setIconsToggle(!iconsToggle);
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    console.log("dhgdshgdsghdgh", e.target.files[0].name);
    setvalues((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
    setFileName((pre) => {
      return [...pre, e.target.files[0].name];
    });
  };
  console.log(values, "values");
  return (
    <>
      <div className="send-msg-cont">
        <div className="send-attachments">
          {
            <Box className={iconsToggle ? "inptwo" : "inp"}>
              <div className="send-att-img">
                <label htmlFor="videoPicker">
                  <input
                    type="file"
                    accept=".mov, .mp4"
                    hidden
                    id="videoPicker"
                    onChange={onChange}
                    name="video"
                  />
                  <img style={{ width: "15px", height: "10px" }} src={one} />
                </label>
              </div>

              <div className="send-att-img">
                <label htmlFor="imgPicker">
                  <input
                    type="file"
                    accept=".jpeg,.png,.svg,.gif, .jpg"
                    hidden
                    id="imgPicker"
                    onChange={onChange}
                    name="image"
                  />
                  <img style={{ width: "15px", height: "10px" }} src={two} />
                </label>
              </div>

              <div className="send-att-img">
                <label htmlFor="filePicker">
                  <input
                    type="file"
                    accept="*"
                    hidden
                    id="filePicker"
                    onChange={onChange}
                    name="file"
                  />
                  <img style={{ width: "15px", height: "10px" }} src={three} />
                </label>
              </div>
            </Box>
          }
          <div onClick={ToggleIcon} className="send-att-img add-icon">
            {iconsToggle ? (
              <img style={{ width: "15px", height: "10px" }} src={four} />
            ) : (
              <RemoveOutlinedIcon sx={{ height: "10px", width: "15px" }} />
            )}
          </div>
        </div>
        <input
          style={{ width: "80%", border: "none", margin: "auto" }}
          placeholder="Type a message here"
        />
        <div className="send-btn">
          <img style={{ width: "15px", height: "15px" }} src={send} />
        </div>
      </div>
    </>
  );
};

export default ChatBodyBottom;
