import React from "react";
import ron from "../../assets/ron.jpeg";
import writing from '../../assets/writing.svg'
const UserCard = () => {
  const items = [
    {
      name: "Magazine",
      status: "Writing",
      time: "1 minute ago",
      paragraph: `  Vestibulum eget augue consectetur, mattis turpis et, 
      luctus eros. Aenean luctus varius lacus in imperdiet. Curabitur mi ligula, consequat venenatis nunc accumsan, ornare lobortis nibh. Duis consequat nibh non pulvinar 
      rutrum. Nunc dignissim nibh ac augue feugiat tincidunt. Vestibulum iaculis nisi vitae te`,
    },
    {
      name: "Emma",
      status: "offline",
      time: "35 minute ago",
      paragraph: `  Vestibulum eget augue consectetur, mattis turpis et, 
      luctus eros. Aenean luctus varius lacus in imperdiet. Curabitur mi ligula, consequat venenatis nunc accumsan, ornare lobortis nibh. Duis consequat nibh non pulvinar 
      rutrum. Nunc dignissim nibh ac augue feugiat tincidunt. Vestibulum iaculis nisi vitae te`,
    },
    {
      name: "Emma",
      status: "Writing",
      time: "45 minute ago",
      paragraph: `  Vestibulum eget augue consectetur, mattis turpis et, 
      luctus eros. Aenean luctus varius lacus in imperdiet. Curabitur mi ligula, consequat venenatis nunc accumsan, ornare lobortis nibh. Duis consequat nibh non pulvinar 
      rutrum. Nunc dignissim nibh ac augue feugiat tincidunt. Vestibulum iaculis nisi vitae te`,
    },
    {
      name: "Emma",
      status: "offline",
      time: "30 minute ago",
      paragraph: `  Vestibulum eget augue consectetur, mattis turpis et, 
      luctus eros. Aenean luctus varius lacus in imperdiet. Curabitur mi ligula, consequat venenatis nunc accumsan, ornare lobortis nibh. Duis consequat nibh non pulvinar 
      rutrum. Nunc dignissim nibh ac augue feugiat tincidunt. Vestibulum iaculis nisi vitae te`,
    },
    {
      name: "Emma",
      status: "do not disturb",
      time: "40 minute ago",
      paragraph: `  Vestibulum eget augue consectetur, mattis turpis et, 
      luctus eros. Aenean luctus varius lacus in imperdiet. Curabitur mi ligula, consequat venenatis nunc accumsan, ornare lobortis nibh. Duis consequat nibh non pulvinar 
      rutrum. Nunc dignissim nibh ac augue feugiat tincidunt. Vestibulum iaculis nisi vitae te`,
    },
  ];
  return (
    <>
      {items.map((val) => (
        <div
          style={{
            padding: "24px",
            background: "#ffffff",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <div className="parent">
            <div className="card-user">
              {val.status === "Writing" ? (
                <div className="online">
                  <div className="online-white">
                    <div className="online-green"> </div>
                  </div>
                </div>
              ) : null}
              <img className="user-img" src={ron} />
              <div className="name-status">
                <strong className="user-name">{val?.name}</strong>
                <div className="status-cont">
               {val?.status =="Writing"? 
               <img className="writing" src={writing}/> : null}
                <p style={{color:val?.status=="do not disturb"?"#FF3737":"#149E7A"}} className="status">{val?.status} </p>
                </div>
              </div>
            </div>
            <p className="time"> {val?.time}</p>
          </div>
          <div className="user-detail-parent">
            <p className="user-detail">{val.paragraph}</p>
            <div className="dot">3</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
