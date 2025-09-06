import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <div>
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};
