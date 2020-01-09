import configApp from "./app";
import Home from "./../views/Home";
import Profile from "./../views/Profile";
import Canvas from "./../views/Canvas";
import Upsell from "../views/Upsell";
//
import Platform from "../views/Platform/Home";

export const routes = [
  {
    path: configApp.base,
    exact: true,
    main: Home
  },
  {
    path: configApp.base + "step/profile",
    exact: true,
    main: Profile
  },
  {
    path: configApp.base + "step/canvas",
    exact: true,
    main: Canvas
  },
  {
    path: configApp.base + "step/done",
    exact: true,
    main: Upsell
  },
  //
  {
    path: configApp.baseApp,
    exact: true,
    main: Platform
  }
];
