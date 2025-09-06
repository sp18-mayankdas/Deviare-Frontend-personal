import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Button } from "@components/button";

export const SignInUsingOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  function handleSendOtpHandler() {
    console.log("clicked");
    axios
      .post("http://localhost:3000/send-otp", { phoneNumber })
      .then((response) => {
        console.log(response);
        toast.success("OTP Sent successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong.");
      });
  }

  function handleVerifyOtpHandler() {
    console.log("clicked");
    axios
      .post("http://localhost:3000/verify-otp", { phoneNumber, otp })
      .then((response) => {
        console.log(response);
        toast.success("OTP Verified Successfully...");
      })
      .catch((error) => {
        console.log(error);
        toast.error("OTP is not valid..");
      });
  }

  return (
    <form
      className="bg-blue-100 p-10 gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="phoneNumber">
          Enter your Phone Number:
          <input
            className="border-1 rounded-md "
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target?.value);
              // console.log(e.target.value);
              // console.log(phoneNumber)
            }}
          />
        </label>
        <Button onClick={handleSendOtpHandler} type="primary" htmlType="submit">
          Submit
        </Button>
      </div>

      <div>
        <label htmlFor="Verify-Otp">
          Enter the OTP:
          <input
            className="border-1 rounded-md "
            id="Verify-Otp"
            type="text"
            value={otp}
            onChange={(e) => {
              setOtp(e.target?.value);
              // console.log(e.target.value);
              // console.log(phoneNumber)
            }}
          />
        </label>
        <Button
          onClick={handleVerifyOtpHandler}
          type="primary"
          htmlType="submit"
        >
          Verify Otp
        </Button>
      </div>
    </form>
  );
};
