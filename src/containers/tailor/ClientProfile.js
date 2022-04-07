import React, { useState } from "react";
import TailorAppBar from "../../components/TailorAppBar";
import UserSVG from "../../assets/supportpic.png";
import ProfileBirthdaySVG from "../../assets/ProfileBirthday.svg";
import ProfileCitySVG from "../../assets/ProfileCity.svg";
import ProfileCountrySVG from "../../assets/ProfileCountry.svg";
import ProfileEmailSVG from "../../assets/ProfileEmail.svg";
import ProfileLocationSVG from "../../assets/ProfileLocation.svg";
import ProfilePhoneSVG from "../../assets/ProfilePhone.svg";
import Background from "../../assets/backgroung1.svg";
import { toDate } from "date-fns";

function ClientProfile() {
  const [toEdit, setToEdit] = useState(false);
  let profile = {
    name: "Shasha",
    phone: "+92 312 4567890",
    address: "Johar Town",
    country: "Pakistan",
    city: "Lahore",
    dob: Date.now(),
    email: "Ali@gmail.com",
  };
  let OrderData = [
    {
      name: "Shasha Designs",
      Order: "Shirt,Pant",
      OrderDate: "Augest 10, 2022",
      DeliveryDate: "Augest 25, 2022",
      bill: "$500",
      status: "In Process",
    },
    {
      name: "Shasha Designs",
      Order: "Shirt,Pant",
      OrderDate: "Augest 10, 2022",
      DeliveryDate: "Augest 25, 2022",
      bill: "$500",
      status: "Completed",
    },
    {
      name: "Shasha Designs",
      Order: "Shirt,Pant",
      OrderDate: "Augest 10, 2022",
      DeliveryDate: "Augest 25, 2022",
      bill: "$500",
      status: "Completed",
    },
  ];

  return (
    <div className="container-page-vertical">
      <TailorAppBar color="#FDFDFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background:
            "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <img src={Background} className="backgrounimg" />
        <div className="thiw_qna_standard_screen_row1">
          <div className="clientProfilediv">Client Profile</div>
          <div className="clientProfileRow">
            <div className="clientProfilePic">
              <img style={{ width: "100%" }} src={UserSVG} />

              <p
                className="tailor_profile_screen_row1_column1_user_name_text"
                style={{ padding: "10px" }}
              >
                Shasha
              </p>
            </div>
            <div className="clientInfoleftdiv orderclientinfo">
              <ProfileInput
                disabled={!toEdit}
                name="Phone"
                placeholder="Phone"
                defaultValue={profile.phone}
                img={ProfilePhoneSVG}
                divStyle={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                onChange={(e) => _setState("phone", e.target.value)}
              />
              <ProfileInput
                disabled
                name="Email"
                placeholder="Email"
                defaultValue={profile.email}
                img={ProfileEmailSVG}
              />
              <ProfileInput
                disabled
                name="Date Of Birth"
                placeholder="Date Of Birth"
                defaultValue={new Date(profile.dob).toLocaleDateString("en-US")}
                img={ProfileBirthdaySVG}
                divStyle={{
                  marginBottom: "3%",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              />
            </div>
            <div className="clientinfoRightDiv orderclientinfo">
              <ProfileInput
                disabled
                name="Country"
                placeholder="Country"
                defaultValue={profile.country}
                img={ProfileCountrySVG}
                divStyle={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />
              <ProfileInput
                disabled
                name="City"
                placeholder="City"
                defaultValue={profile.city}
                img={ProfileCitySVG}
              />
              <ProfileInput
                disabled
                name="Location"
                placeholder="Location"
                defaultValue={profile.address}
                img={ProfileLocationSVG}
                divStyle={{
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  marginBottom: "3%",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            background: "grey",
            width: "100%",
            height: "1px",
            opacity: "0.2",
          }}
        ></div>
        <div className="ClientOrder">
          <div className="clientorderdiv">Client Orders</div>
          {OrderData.map((order) => (
            <ClientOrder order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
function ProfileInput({
  name,
  onChange,
  placeholder,
  defaultValue,
  inputType,
  img,
  label,
  disabled,
  divStyle,
}) {
  return (
    <div
      className="tps_profile_input_container inputcontainer2"
      style={{
        ...divStyle,
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <input
          disabled={disabled}
          className="tps_profile_input_input"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={inputType}
          style={{ color: "black" }}
        />
        {label ? (
          <p
            style={{
              fontSize: "12px",
              fontWeight: "500",
              position: "absolute",
              left: "2%",
              top: "1%",
            }}
          >
            {label}
          </p>
        ) : (
          <img
            src={img}
            style={{
              width: "16px",
              position: "absolute",
              left: "2%",
              top: "1%",
            }}
          />
        )}
      </div>
    </div>
  );
}
function ClientOrder({ order }) {
  return (
    <div className="ordermainDiv">
      <div className="ordercol1">
        <div className="orderimgdiv">
          <img src={UserSVG} />
          <p className="clientName">{order.name}</p>
        </div>
        <div className="orderLine"></div>
        <div className="orderabovediv">
          <div className="orderDiv">
            <p className="ordername">Order</p>
            <p className="ordername2">{order.Order}</p>
          </div>
          <hr className="hrline" />
          <div className="orderDiv">
            <p className="ordername">Order Date</p>
            <p className="ordername2">{order.OrderDate}</p>
          </div>
          <hr className="hrline" />
          <div className="orderDiv">
            <p className="ordername">Delivery Date</p>
            <p className="ordername2">{order.DeliveryDate}</p>
          </div>
        </div>
        <div className="orderLine"></div>
        <div className="orderofferDiv">
          <h3 className="orderofferPrice"> {order.bill}</h3>
          <h3 className="orderofferheading">Bill</h3>
        </div>
        <div className="orderLine"></div>
        <div>
          <h1 className="ordercompleteStatus">{order.status}</h1>
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
