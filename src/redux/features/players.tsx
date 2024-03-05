import { createSlice } from "@reduxjs/toolkit";

interface Player {
  id: string;
  name: string;
}

interface PlayerState {
  teamOne: Player[];
  teamSec: Player[];
}

const initialState: PlayerState = {
  teamOne: [],
  teamSec: [],
};

export const teams = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addPlayerTeamOne: (state, action) => {
      if (state.teamOne.length < 6) {
        state.teamOne.push(action.payload);
      } else {
        alert("6 kişiden fazla kişi ekleyemezsiniz");
      }
    },
    removoPlayerTeamOne: (state, action) => {
      state.teamOne = state.teamOne.filter(
        (player) => player.id !== action.payload
      );
    },
    nextPositionForTeamOne: (state) => {
      const lastPlayer = state.teamOne.pop();
      state.teamOne = [lastPlayer!, ...state.teamOne];
    },
    previousPositionForTeamOne: (state) => {
      const firstPlayer = state.teamOne.shift();
      state.teamOne = [...state.teamOne, firstPlayer!];
    },
    removePlayerForTeamOne: (state, action) => {
      state.teamOne = state.teamOne.filter(teamone => teamone.id !== action.payload)
    },

    // Takım iki için kod başlangıcı

    addPlayerTeamSec: (state, action) => {
      if (state.teamSec.length < 6) {
        state.teamSec.push(action.payload);
      } else {
        alert("6 kişiden fazla kişi ekleyemezsiniz");
      }
    },
    removoPlayerTeamSec: (state, action) => {
      state.teamSec = state.teamSec.filter(
        (player) => player.id !== action.payload
      );
    },
    nextPositionForTeamSec: (state) => {
      const lastPlayer = state.teamSec.pop();
      state.teamSec = [lastPlayer!, ...state.teamSec];
    },
    previousPositionForTeamSec: (state) => {
      const firstPlayer = state.teamSec.shift();
      state.teamSec = [...state.teamSec, firstPlayer!];
    },
    removePlayerForTeamSec: (state, action) => {
      state.teamSec = state.teamSec.filter(teamsec => teamsec.id !== action.payload)
    },
  },
});

export const {
  addPlayerTeamOne,
  removoPlayerTeamOne,
  addPlayerTeamSec,
  removoPlayerTeamSec,
  nextPositionForTeamOne,
  nextPositionForTeamSec,
  previousPositionForTeamOne,
  previousPositionForTeamSec,
  removePlayerForTeamOne,
  removePlayerForTeamSec,
} = teams.actions;
export default teams.reducer;
