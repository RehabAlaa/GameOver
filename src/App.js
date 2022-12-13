import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import All from "./components/All/All";
import Platforms from "./components/Platforms/Platforms";
import Sortby from "./components/Sortby/Sortby";
import Categories from "./components/Categories/Categories";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import Gamedetails from "./components/Gamedetails/Gamedetails";
import Pc from "./components/Pc/Pc";
import Browser from "./components/Browser/Browser";
import ReleaseDate from "./components/ReleaseDate/ReleaseDate";
import Popularity from "./components/Popularity/Popularity";
import Alphabetical from "./components/Alphabetical/Alphabetical";
import Relevance from "./components/Relevance/Relevance";
import Racing from "./components/Racing/Racing";
import Shooter from "./components/Shooter/Shooter";
import Sports from "./components/Sports/Sports";
import Social from "./components/Social/Social";
import OpenWorld from "./components/OpenWorld/OpenWorld";
import Zombie from "./components/Zombie/Zombie";
import Fantasy from "./components/Fantasy/Fantasy";
import ActionRpg from "./components/ActionRpg/ActionRpg";
import Action from "./components/Action/Action";
import Flight from "./components/Flight/Flight";
import BattleRoyale from "./components/BattleRoyale/BattleRoyale";

function App() {
  // variable fe user data from token after decoded (bst5dmo fe ay component tany m7tag lel user data)
  const [userData, setUserData] = useState(null);
  // bygeb l token mn l localstorage w by3deh 3al jwt library 3shan t3mlo decode w trg3 l data bt3et l user l gya mn l token fe variable esmo userData
  function decodeUserData() {
    let encode = localStorage.getItem("userToken");
    let decode = jwtDecode(encode);
    console.log(decode);
    setUserData(decode);
  }
  // to solute this => when refresh by3ml logout (userData = null and return to login again 3al r8m mn eno m3molo login )
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      decodeUserData();
    }
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        {
          path: "home",
          element: (
            <ProtectedRouter
              decodeUserData={decodeUserData}
              userData={userData}
            >
              <Home />
            </ProtectedRouter>
          ),
        },
        {
          path: "all",
          element: (
            <ProtectedRouter
              decodeUserData={decodeUserData}
              userData={userData}
            >
              <All />
            </ProtectedRouter>
          ),
        },
        {
          path: "platforms",
          element: (
            <ProtectedRouter
              decodeUserData={decodeUserData}
              userData={userData}
            >
              <Platforms />
            </ProtectedRouter>
          ),
          children: [
            { path: "pc", element: <Pc /> },
            { path: "browser", element: <Browser /> },
          ],
        },
        {
          path: "sort-by",
          element: (
            <ProtectedRouter
              decodeUserData={decodeUserData}
              userData={userData}
            >
              <Sortby />
            </ProtectedRouter>
          ),
          children: [
            { path: "release-date", element: <ReleaseDate /> },
            { path: "popularity", element: <Popularity /> },
            { path: "alphabetical", element: <Alphabetical /> },
            { path: "relevance", element: <Relevance /> },
          ],
        },
        {
          path: "categories",
          element: (
            <ProtectedRouter
              decodeUserData={decodeUserData}
              userData={userData}
            >
              <Categories />
            </ProtectedRouter>
          ),
          children: [
            { path: "racing", element: <Racing /> },
            { path: "shooter", element: <Shooter /> },
            { path: "sports", element: <Sports /> },
            { path: "social", element: <Social /> },
            { path: "open-world", element: <OpenWorld /> },
            { path: "zombie", element: <Zombie /> },
            { path: "fantasy", element: <Fantasy /> },
            { path: "action-rpg", element: <ActionRpg /> },
            { path: "action", element: <Action /> },
            { path: "flight", element: <Flight /> },
            { path: "battle-royale", element: <BattleRoyale /> },
          ],
        },
        {
          path: "gamedetails/:id",
          element: (
            <ProtectedRouter
              decodeUserData={decodeUserData}
              userData={userData}
            >
              <Gamedetails />
            </ProtectedRouter>
          ),
        },
        { path: "login", element: <Login decodeUserData={decodeUserData} /> },
        { index: true, element: <Register /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
