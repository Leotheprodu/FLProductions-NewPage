import { Song } from "@global/songs";
import { atom } from "nanostores";

export const $SelectedSong = atom<Song | null>(null);
export const $PlayList = atom<Song[]>([
  {
    id: 0,
    youtubeId: "",
    name: "",
    tags: [],
    artists: [],
    date: new Date(),
    featured: false,
    productionDetails: {
      VideoStudio: "",
      RecordingStudio: "",
      BeatFrom: "",
    },
  },
]);
