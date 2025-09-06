import ErrorComponent from "@components/error";
import { App } from "../App";
import { SignIn } from "@pages/sign-In";
import { SignInUsingOTP } from "@pages/otp-sign-in";

export const AppRouter = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/send-otp",
        element: <SignInUsingOTP />,
      },
    ],
  },
];
