import React, { useEffect, useState } from "react";

import UserSVG from "../../assets/User.svg";
import AddCatalogSVG from "../../assets/AddOrder.svg";

import ProfileBirthdaySVG from "../../assets/ProfileBirthday.svg";
import ProfileCitySVG from "../../assets/ProfileCity.svg";
import ProfileCountrySVG from "../../assets/ProfileCountry.svg";
import ProfileEmailSVG from "../../assets/ProfileEmail.svg";
import ProfileLocationSVG from "../../assets/ProfileLocation.svg";
import ProfilePhoneSVG from "../../assets/ProfilePhone.svg";

import ClientAppBar from "../../components/ClientAppBar";
import CustomButton from "../../components/CustomButton";

import TailorCatalogListTile from "../../components/TailorCatalogListTile";
import OrderListTile from "../../components/OrderListTile";

import { getUser } from "../../utils/Auth";

import Api from "../../api";

import { useNavigate, useParams } from "react-router-dom";

function ClientViewTailorScreen(){

  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [catalogs, setCatalogs] = useState([]);
  const [orders, setOrders] = useState([]);
  const [tailor, setTailor] = useState(null);

  const user = getUser();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await getCatalogs();
    await getOrders();
    await getTailor();
  }

  const getCatalogs = async () => {
    let response;
    try {
      response = await Api("post", `/catalogs/byQuery`, { tailor: params.id });
      const catalogsData = response.data.catalogs.splice(-4);
      setCatalogs(catalogsData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getOrders = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, { tailor: params.id, client: user._id });
      const ordersData = response.data.orders.splice(-4);
      setOrders(ordersData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getTailor = async () => {
    let response;
    try {
      response = await Api("get", `/tailors/${params.id}`);
      const userData = response.data.user;
      setTailor(userData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const navToViewCatalog = (id) => {
    navigate(`/view_catalog/${id}`);
  }

  return (
    <>
      {
        isLoading ?
        <></> :
        <div
          style={{
            height: "170vh",
            width: "100vw"
          }}
        >
          <ClientAppBar
            color="#FCFCFC"
            activeTab={0}
          />
          <div
            className="client_profile_screen_top"
            style={{
              background: "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
            }}
          >
            <div
              className="tailor_profile_screen_row1"
              style={{
                borderBottomColor: "#DBDBDB",
                borderBottomStyle: "solid",
                borderBottomWidth: "1.5px",
                height: "20%"
              }}
            >
              <div className="tailor_profile_screen_row1_column1">
                <div className="tailor_profile_screen_row1_column1_header_text">
                  <p className="client_profile_screen_row1_text" style={{paddingLeft: "3%"}}>
                    Designer Profile
                  </p>
                </div>
                <div
                  className="tailor_profile_screen_row1_column1_img"
                  style={{
                    "paddingBottom": "5%"
                  }}
                >
                  <img style={{ width: "30%" }} src={UserSVG} />
                </div>
                <p className="tailor_profile_screen_row1_column1_user_name_text">
                  {tailor.name}
                </p>
              </div>
              <div className="tailor_profile_screen_row1_column2">
                <ProfileInput
                  disabled
                  name="Phone"
                  placeholder="Phone"
                  defaultValue={tailor.phone}
                  img={ProfilePhoneSVG}
                  divStyle={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px"
                  }}
                  onChange={e => _setState("phone", e.target.value)}
                />
                <ProfileInput
                  disabled
                  name="Email"
                  placeholder="Email"
                  defaultValue={tailor.email}
                  img={ProfileEmailSVG}
                />
                <ProfileInput
                  disabled
                  name="Date Of Birth"
                  placeholder="Date Of Birth"
                  defaultValue={new Date(tailor.dob).toLocaleDateString("en-US")}
                  img={ProfileBirthdaySVG}
                  divStyle={{
                    marginBottom: "3%"
                  }}
                />
              </div>
              <div className="tailor_profile_screen_row1_column2">
                <CustomButton
                  type="submit"
                  onClick={() => console.log("XYZ")}
                  text="Send Message"
                  style={{
                    "alignSelf": "flex-end",
                    "boxShadow": "none",
                    "marginRight": "5%",
                    "marginBottom": "4%"
                  }}
                />
                <ProfileInput
                  disabled
                  name="Country"
                  placeholder="Country"
                  defaultValue={tailor.country}
                  img={ProfileCountrySVG}
                />
                <ProfileInput
                  disabled
                  name="City"
                  placeholder="City"
                  defaultValue={tailor.city}
                  img={ProfileCitySVG}
                />
                <ProfileInput
                  disabled
                  name="Location"
                  placeholder="Location"
                  defaultValue={tailor.address}
                  img={ProfileLocationSVG}
                  divStyle={{
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    marginBottom: "3%"
                  }}
                />
              </div>
            </div>
            <div
              className="tailor_profile_screen_row2"
              style={{
                height: "20%"
              }}
            >
              <div className="tailor_profile_screen_row2_list_container">
                <div className="tailor_profile_screen_row2_column1">
                  <p className="tailor_profile_screen_row2_column1_text">
                    Hourly Rate
                  </p>
                </div>
                <div className="tailor_profile_screen_row2_column2">
                  <ProfileInput
                    disabled
                    name="Fixed price"
                    placeholder="Certain Amount"
                    label="Fixed price"
                    divStyle={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      padding: "1.0% 0"
                    }}
                  />
                  <ProfileInput
                    disabled
                    name="Any Confection"
                    placeholder="$120"
                    defaultValue={tailor.hourly_rate}
                    label="Any Confection"
                    inputType="number"
                    divStyle={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      padding: "1.0% 0"
                    }}
                    onChange={e => _setState("hourly_rate", e.target.value)}
                  />
                </div>
              </div>
              <div className="tailor_profile_screen_row2_list_container">
                <div className="tailor_profile_screen_row2_column1">
                  <p className="tailor_profile_screen_row2_column1_text">
                    Free Shipping
                  </p>
                </div>
                <div className="tailor_profile_screen_row2_column2">
                  <ProfileInput
                    disabled
                    name="Free Shipping"
                    placeholder="Certain Amount"
                    label="Free Shipping"
                    divStyle={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      padding: "1.0% 0"
                    }}
                  />
                  <ProfileInput
                    disabled
                    name="Confection"
                    placeholder="$500"
                    defaultValue={tailor.free_shipping_rate}
                    label="Confection"
                    inputType="number"
                    divStyle={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      padding: "1.0% 0"
                    }}
                    onChange={e => _setState("free_shipping_rate", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div
              className="tailor_profile_screen_row3"
              style={{
                height: "30%"
              }}
            >
              <p
                className="tailor_profile_screen_row3_text"
                style={{
                  marginRight: "2%"
                }}
              >
                Catalog
              </p>
              <div className="tailor_profile_screen_row3_list_container">
                {
                  catalogs.map(
                    _ =>
                    <TailorCatalogListTile
                      catalog={_}
                      buttonText="View"
                      onClickButton={() => navToViewCatalog(_._id)}
                      onClick={console.log("XYZZ")}
                      mainDivStyle={{
                        width: "160pt"
                      }}
                    />
                  )
                }
              </div>
            </div>
            <div
              className="tailor_profile_screen_row3"
              style={{
                height: "25%"
              }}
            >
              <p
                className="tailor_profile_screen_row3_text"
                style={{
                  marginRight: "2%"
                }}
              >
                Orders
              </p>
              <div className="tailor_profile_screen_row3_list_container">
                <AddOrderListTile
                  id={params.id}
                />
                {
                  orders.map(
                    _ =>
                    <OrderListTile
                      order={_}
                      quote={_.quotes.filter(__ => __.status == "accepted")[0]}
                      mainDivStyle={{
                        width: "14%"
                      }}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      }
    </>
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
  divStyle
}){
  return (
    <div
      className="tps_profile_input_container"
      style={{
        ...divStyle
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%"
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
        />
        {
          label
          ? <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                position: "absolute",
                left: "2%",
                top: "1%"
              }}
            >
              {label}
            </p>
          : <img
              src={img}
              style={{
                width: "16px",
                position: "absolute",
                left: "2%",
                top: "1%"
              }}
            />
        }
      </div>
    </div>
  );
}

function AddOrderListTile(props){

  const navigate = useNavigate();

  const navToCreateOrder = () => {
    navigate(`/create_order/${props.id}`);
  }

  return (
    <div
      className="new_order_list_tile"
      style={{
        height: "100%",
        width: "14%",
      }}
      onClick={navToCreateOrder}
    >
      <div className="new_order_list_tile_img">
        <img style={{ width: "40%" }} src={AddCatalogSVG} />
      </div>
      <p className="new_order_list_tile_text">
        Place Order
      </p>
    </div>
  );
}

export default ClientViewTailorScreen;