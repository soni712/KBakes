import React, { useState, useEffect } from "react";
import axios from "axios";
import * as TravelListingAPI from "../services/country";
// import Header from "../common/Header";
import './signup.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    pHoneNum: "",
    dob: "",
    gender: "",
    country: "",
  });
  const [countryData, setCountryData] = useState([]);
  const getCountryList = (data) => {
    TravelListingAPI.getCountryList(data)
      .then((response) => {
        if (response?.status == 200) {
          setCountryData(response?.data);
        }
      })
      .catch((error) => {
        console.log("failed");
      });
  };
  const optionalData = (data) => {
    return data.map((dd, i) => <option value={dd.name} label={dd.label} />);
  };
  useEffect(() => {
    getCountryList();
  }, []);
  return (
    <>
     <Header></Header>
      <section className="container">
  
      <header>Registration Form</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            maxLength={20}
            name="fName"
            onChange={(e) => {
              setFormData({
                ...formData,
                fName: e.target.value,
              });
            }}
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            maxLength={35}
            name="email"
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Enter phone number"
              name="pHoneNum"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 3);
              }}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  pHoneNum: e.target.value,
                });
              }}
            />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input
              type="date"
              placeholder="Enter birth date"
              name="dob"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  dob: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input
                type="radio"
                id="check-male"
                value="male"
                name="gender"
                checked={formData.gender === "male"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    gender: e.target.value,
                  });
                }}
              />
              <label htmlFor="check-male">male</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="check-female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    gender: e.target.value,
                  });
                }}
              />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="check-other"
                name="gender"
                value="others"
                checked={formData.gender === "others"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    gender: e.target.value,
                  });
                }}
              />
              <label htmlFor="check-other">prefer not to say</label>
            </div>
          </div>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required="" />
          <input
            type="text"
            placeholder="Enter street address line 2"
            required=""
          />
          <div className="column">
            <div className="select-box">
              <select name="country"></select>
            </div>
            <input type="text" placeholder="Enter your city" required="" />
          </div>
          <div className="column">
            <input type="text" placeholder="Enter your region" required="" />
            <input type="number" placeholder="Enter postal code" required="" />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </section></>
  
  );
};

export default SignUp;
