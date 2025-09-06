import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ConfigProvider from "antd/es/config-provider/index";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

import "./index.css";
import { AppRouter } from "routes/routes.tsx";

const router = createBrowserRouter(AppRouter);

createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        // colorPrimary: "#729EBF", 
      },
    }}
  >
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </ConfigProvider>
);
