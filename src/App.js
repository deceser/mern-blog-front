import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getMe } from "./redux/slices/user/auth";

import AppRouter from "./AppRouter";
import ToastContainer from "./ToastContainer";
import DefaultLayout from "./layouts/default.layout";

import Loader from "./components/ui/loader";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);

  // -------------------------------------------------------------

  // auth me

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getMe());
    }
  }, []);

  // -------------------------------------------------------------

  // notification warn (confirm email)

  React.useEffect(() => {
    if (user?.activated === false) {
      toast.warning("Please confirm your email");
    }
  }, [user]);

  // -------------------------------------------------------------

  return (
    <DefaultLayout>
      {isLoading ? <Loader /> : <AppRouter />}
      <ToastContainer />
    </DefaultLayout>
  );
};

export default App;
