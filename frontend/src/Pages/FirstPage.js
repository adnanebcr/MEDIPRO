import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import TopProducts from "../Components/Home/topProducts";

const FirstPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userlogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      history.push("/Signin");
    }
  });
  return (
    <div>
      <TopProducts />
    </div>
  );
};

export default FirstPage;
