import React from "react";
import { NavbarApp } from "./components/navbar/NavbarApp";
import { FromFishRegister } from "./components/formRegister/FromFishRegister";
import { FormRegisterUser } from "./components/formRegisterUser/FormRegisterUser";
import { CardResult } from "./components/cardResult/CardResult";
import { Footer } from "./components/footer/Footer";

import { useState } from "react";
import { useEffect } from "react";

import "./style/LocalStorageApp.scss";
import { BubbleCover } from "./components/bubbleCover/BubbleCover";
import { FormLogin } from "./components/formLogin/FormLogin";

const initFishValues = {
  name: "",
  size: "",
  weight: "",
  diet: "",
  habitat: "",
  funFact: "",
  img: "",
};

const initUSerValues = {
  name: "",
  email: "",
  password: "",
  img: "",
  fishes: [],
};

export const LocalStorageApp = () => {
  //Logic
  
  const [user, setUser] = useState(initUSerValues);
  const [fish, setFish] = useState(initFishValues);
  const [showCover, setShowCover] = useState(true);
  const [showFormUser, setShowFormUser] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState({})
  const [islogged, setIslogged] = useState(false);
  const [message, setMessage] = useState("")
  const [showCollection, setShowCollection] = useState(false);
  
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);


  //Check if user exists an set user with that info
  useEffect(() => {
    let savedUser = localStorage.getItem("User");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIslogged(true);
      setShowCover(false)
    }
  }, []);

  //Open user register form
  const openShowRegister = () => {
    setShowFormUser(true);
  };

  //Close user register form
  const closeShowRegister = () => {
    setShowFormUser(false);
  };

  //Open Login form
 const openLogin = () => {
  setShowLogin(true)
 }
 const closeLogin = () => {
  setShowLogin(false)
 }

  //Log Out User
  const logOutUser = () => {
    setIslogged(false);
    setUser(initUSerValues)
  };

  //Check Search into User.fishes
  const searchFish = () => {
    let arrayFishes = [...user.fishes];
    console.log("aaaaaaaaaaaaaaaaa", arrayFishes);

    let resultList = arrayFishes.filter((elem) => elem.name.includes(search));

    setSearchList(resultList);
  };

  //Reset search List
  const resetSearch = () => {
    setSearchList([])
  }


  //Open Fish form
  const openShowForm = () => {
    setShowFrom(true);
  };

  //Close Fish form
  const closeShowForm = () => {
    setShowFrom(false);
  };

  //Save new or updated user
  const saveUser = (updatedUser) => {
    localStorage.setItem("User", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };
  //Delete User
  const deleteUser = () => {
    setUser(initUSerValues)
  }


  //Add a new fish to he Array of user.fishes
  const addFish = () => {
    let newFish = { ...fish }; //Set new object Fish
    console.log("fishhhhhhhhhhhhhhhhhhhhhhh", newFish);
    let updatedUser = {
      ...user,
      fishes: [...user.fishes, newFish], //Set the new fish into the Array user.fishes
    };
   

    saveUser(updatedUser);
    setFish(initFishValues);
    setShowFrom(false);
  };

  //HandleShowCollection
  const handleCollection = () => {
    setShowCollection(!showCollection)
  }

  

  return (
    <>
      {showCover ? (
        <BubbleCover setShowCover={setShowCover} />
      ) : (
        <>
          <NavbarApp
            openShowRegister={openShowRegister}
            islogged={islogged}
            user={user}
            search={search}
            setSearch={setSearch}
            searchFish={searchFish}
            logOutUser={logOutUser}
            openLogin={openLogin}
        
          />

          <FormLogin
            user={user}
            setUser={setUser}
            showFormUser={showFormUser}
            closeShowRegister={closeShowRegister}
            setIslogged={setIslogged}
            saveUser={saveUser}

            showLogin={showLogin}
            closeLogin={closeLogin}
            login={login}
            setLogin={setLogin}
            setMessage={setMessage}
            message={message}
           
          />

          <FormRegisterUser
            user={user}
            setUser={setUser}
            showFormUser={showFormUser}
            closeShowRegister={closeShowRegister}
            setIslogged={setIslogged}
            saveUser={saveUser}
          />

          <main className="contPpal">
            <FromFishRegister
              fish={fish}
              setFish={setFish}
              closeShowForm={closeShowForm}
              showFrom={showFrom}
              addFish={addFish}
            />

            {islogged && (
              <CardResult
                user={user}
                openShowForm={openShowForm}
                saveUser={saveUser}
                searchList={searchList}
                handleCollection={handleCollection}
                showCollection={showCollection}
                resetSearch={resetSearch}
                deleteUser={deleteUser}
              />
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  );
};
