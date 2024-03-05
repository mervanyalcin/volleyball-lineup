"use client";

import {
  addPlayerTeamOne,
  removoPlayerTeamOne,
  addPlayerTeamSec,
  removoPlayerTeamSec,
  nextPositionForTeamOne,
  nextPositionForTeamSec,
  previousPositionForTeamOne,
  previousPositionForTeamSec,
  removePlayerForTeamOne,
} from "@/redux/features/players";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TeamsList() {
  const { teamOne, teamSec } = useSelector((state: RootState) => state.teams);
  const dispatch = useDispatch<AppDispatch>();
  const [teamOneName, setTeamOneName] = React.useState("");
  const [teamSecName, setTeamSecName] = React.useState("");

  const addPlayerTeamOneHandle = () => {
    dispatch(
      addPlayerTeamOne({
        id: teamOne.length + 1,
        name: teamOneName,
      })
    );
    setTeamOneName("");
  };

  const addPlayerTeamSecHandle = () => {
    dispatch(
      addPlayerTeamSec({
        id: teamSec.length + 1,
        name: teamSecName,
      })
    );
    setTeamSecName("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen h-full w-full">
      <div className="w-1/5 flex flex-col items-center justify-center h-[450px] bg-green-500 px-4">
        <h1 className="text-3xl mb-4 font-bold uppercase">1. Takım</h1>
        <div className="w-full flex gap-y-4 flex-col">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Oyuncunun Adı
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-black block w-full p-2.5 "
              onChange={(e) => setTeamOneName(e.target.value)}
              value={teamOneName}
              placeholder="Oyuncunun Adı"
              required
            />
          </div>

          <button
            className="border py-3 font-bold uppercase"
            onClick={addPlayerTeamOneHandle}
          >
            Oyuncuyu ekle
          </button>

          <div className="flex gap-x-8 justify-end">
            <button
              className="hover:font-bold cursor-pointer"
              onClick={() => dispatch(previousPositionForTeamOne())}
            >
              Önceki
            </button>
            <button
              className="hover:font-bold cursor-pointer"
              onClick={() => dispatch(nextPositionForTeamOne())}
            >
              Sonraki
            </button>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center">
        <div className="border relative h-[900px] w-[450px] bg-orange-500">
          <div className="absolute top-[50%] left-0 h-[1px] w-full bg-white"></div>
          <div className="w-full h-[450px] flex  flex-wrap justify-around items-center ">
            {teamOne.map((players: any, index: number) => (
              <div
                key={index}
                className="bg-white w-[125px] h-[125px] text-black text-center  flex flex-col justify-center relative"
              >
                <p>{players.name}</p>
                <p>{players?.number}</p>
                <button className="text-sm absolute bottom-0 ml-4 hover:underline hover:text-blue-500 font-bold transition-all" onClick={() => dispatch(removePlayerForTeamOne(players.id))}>Oyuncuyu Sil</button>
              </div>
            ))}
          </div>
          <div className="w-full h-[450px] ">
            <div className="w-full h-[450px] flex  flex-wrap justify-around items-center relative ">
              {teamSec.map((players: any, index: number) => (
                <div
                  key={index}
                  className="bg-white w-[125px] h-[125px] text-black text-center  flex flex-col justify-center relative"
                >
                  <p>{players.name}</p>
                  <p>{players?.number}</p>
                  <button className="text-sm absolute bottom-0 ml-4 hover:underline hover:text-blue-500 font-bold transition-all" onClick={() => dispatch(removoPlayerTeamSec(players.id))}>Oyuncuyu Sil</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/5 items-center justify-center flex flex-col px-4 h-[450px] bg-blue-500">
        <h1 className="text-3xl mb-4 font-bold uppercase">2. Takım</h1>
        <div className="w-full flex gap-y-4 flex-col">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Oyuncunun Adı
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-black block w-full p-2.5 "
              onChange={(e) => setTeamSecName(e.target.value)}
              value={teamSecName}
              placeholder="Oyuncunun Adı"
              required
            />
          </div>

          <button
            className="border py-3 font-bold uppercase"
            onClick={addPlayerTeamSecHandle}
          >
            Oyuncuyu ekle
          </button>
          <div className="flex gap-x-8 justify-end">
            <button
              className="hover:font-bold cursor-pointer"
              onClick={() => dispatch(previousPositionForTeamSec())}
            >
              Önceki
            </button>
            <button
              className="hover:font-bold cursor-pointer"
              onClick={() => dispatch(nextPositionForTeamSec())}
            >
              Sonraki
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsList;
