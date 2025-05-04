import React from "react";
import { createRoot } from "react-dom/client";

import {Router} from "./App";
import {RouterProvider} from "react-router";



const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={Router} />);