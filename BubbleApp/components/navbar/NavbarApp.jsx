import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style/navbarApp.scss";
import { NavbarTitle } from "../navbarTitle/NavbarTitle";

export const NavbarApp = ({
  openShowRegister,
  islogged,
  setSearch,
  search,
  searchFish,
  logOutUser,
  openLogin
}) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  return (
    <div className="navbarApp">
      <NavbarTitle text={"Bubbles"} />
      <div className="d-flex">
        <Form.Control
          type="text"
          placeholder="Search by name"
          autoFocus
          className="focus inputSearch"
          name="search"
          value={search}
          onChange={handleSearch}
        />

        <Button className="buttonSearch" onClick={searchFish}>
          Search
        </Button>

        <Button
            className="ms-4"
            onClick={() => {
              openShowRegister();
            }}
          >
            Register
          </Button>

        {islogged ? (
          <Button
            className="ms-4"
            onClick={() => {
              logOutUser();
            }}
          >
            LogOut
          </Button>
        ) : (
          <Button
            className="ms-4"
            onClick={() => {
              openLogin();
            }}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};
