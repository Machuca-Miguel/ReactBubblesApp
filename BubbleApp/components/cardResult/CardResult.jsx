import React from "react";
import "./cardResult.scss";
import { Button, Card, ListGroup } from "react-bootstrap";
import { CardResultUser } from "../cardResultUser/CardResultUser";
import { CardResultFish } from "../cardResultFish/CardResultFish";
import { CardResultSearch } from "../cardResultSearch/CardResultSearch";

export const CardResult = ({
  user,
  openShowForm,
  saveUser,
  searchList,
  showCollection,
  handleCollection,
  resetSearch,
  deleteUser
}) => {
  console.log(user);

  const deleteFish = (indx) => {
    let updatedFishes = [...user.fishes];
    updatedFishes.splice(indx, 1);

    let updatedUser = { ...user, fishes: updatedFishes };
    saveUser(updatedUser);
  };

  return (
    <div className="d-flex justify-content-center gap-2 h-100 p-2">
      <CardResultUser

        user={user}
        openShowForm={openShowForm}
        handleCollection={handleCollection}
        showCollection={showCollection}
        deleteUser={deleteUser}
      />
      {showCollection && (
        <>
          {user.fishes.length > 0 && (
            <div className="contFishesPpal">
              <h1 className="text-center text-muted">
                {user.name}'s Fish Collection:
              </h1>
              <hr className="mt-0" />

              <div className="contFishes">
                {searchList.length > 0 ? (
                  <CardResultSearch

                    searchList={searchList}
                    resetSearch={resetSearch}
                  />
                ) : (
                  <CardResultFish 
                    user={user} 
                    deleteFish={deleteFish}
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
