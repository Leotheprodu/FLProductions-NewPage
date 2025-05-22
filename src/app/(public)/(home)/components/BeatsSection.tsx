"use client";
/* eslint-disable @next/next/no-img-element */
import { songs } from "@global/songs";
import { $PlayList, $SelectedSong } from "@stores/player";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { PlayIcon } from "@/icons/PlayIcon";
import { StarIcon } from "@/icons/StarIcon";
import { VIPSongCriteria } from "@global/constants";
export const BeatsSection = () => {
  const selectedSong = useStore($SelectedSong);
  const sortedSongs = songs?.slice().sort((a, b) => {
    // Primero los que tienen featured en true
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    // Luego por fecha descendente
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const beatLimit = 4;
  const latestSongs = sortedSongs?.slice(0, beatLimit);
  const allSongs = sortedSongs?.slice(beatLimit);
  useEffect(() => {
    const songsWithYoutubeId = sortedSongs?.filter((song) => song.youtubeId);

    if (songsWithYoutubeId && songsWithYoutubeId.length > 0) {
      const songsToPlaylists = songsWithYoutubeId.map((song) => ({
        id: song.id,
        youtubeId: song.youtubeId,
        name: song.name,
        tags: song.tags,
        artists: song.artists,
        featured: song.featured,
        productionDetails: song.productionDetails,
        date: song.date,
      }));
      $PlayList.set(songsToPlaylists);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      id="songs"
      className="py-16 flex items-center justify-center flex-col gap-6 w-full h-full overflow-hidden"
    >
      <div className="snap-always flex flex-col items-center md:flex-row md:flex-wrap gap-6 md:justify-center w-full">
        {latestSongs.map((song) => (
          <div
            id={`song-${song.id}`}
            key={song.id}
            onClick={() =>
              $SelectedSong.set({
                id: song.id,
                name: song.name,
                youtubeId: song.youtubeId,
                tags: song.tags,
                artists: song.artists,
                featured: song.featured,
                productionDetails: song.productionDetails,
                date: song.date,
              })
            }
            className={`
              ${
                song.productionDetails.RecordingStudio &&
                VIPSongCriteria.includes(
                  song.productionDetails.RecordingStudio
                ) &&
                song.productionDetails.BeatFrom &&
                VIPSongCriteria.includes(song.productionDetails.BeatFrom)
                  ? "bg-secundario/10"
                  : "bg-white"
              }
              ${
                selectedSong?.id === song.id
                  ? "scale-105 border-b-2 border-b-secundario/80 shadow-lg"
                  : ""
              } relative snap-x transition-transform duration-300 hover:cursor-pointer shadow hover:shadow-xl rounded-md flex flex-col  gap-1 p-4 w-[17rem] h-[13rem] md:h-[20rem] rounded-b-md group`}
          >
            <div className="flex justify-between h-2/4 md:h-2/5 w-full">
              <div className="flex">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{song.name}</h3>
                  <p className="text-sm text-gray-500">
                    {song.artists.join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center absolute right-0">
                {song.productionDetails.RecordingStudio &&
                  VIPSongCriteria.includes(
                    song.productionDetails.RecordingStudio
                  ) && <StarIcon className="w-4 h-4 text-secundario" />}
                {song.productionDetails.BeatFrom &&
                  VIPSongCriteria.includes(song.productionDetails.BeatFrom) && (
                    <StarIcon className="w-4 h-4 text-secundario" />
                  )}
                {song.productionDetails.VideoStudio &&
                  VIPSongCriteria.includes(
                    song.productionDetails.VideoStudio
                  ) && <StarIcon className="w-4 h-4 text-secundario" />}
                <small className="group-hover:scale-150 rounded-full p-1 transition-all duration-300 ">
                  <PlayIcon />
                </small>
              </div>
            </div>
            <div>
              <div className="h-1/4 md:h-1/5 w-full text-sm text-gray-600">
                <p className="flex my-2">{song.tags.join(", ")}</p>

                <div className="flex gap-2">
                  {song.productionDetails.RecordingStudio && (
                    <small
                      className={`flex p-1 rounded-md bg-gray-100 ${
                        VIPSongCriteria.includes(
                          song.productionDetails.RecordingStudio
                        )
                          ? "border-1 border-primario"
                          : ""
                      }`}
                    >
                      <span className="">🎙️</span>
                      {song.productionDetails.RecordingStudio}
                    </small>
                  )}
                  {song.productionDetails.BeatFrom && (
                    <small
                      className={`
                  flex p-1 rounded-md bg-gray-100 ${
                    VIPSongCriteria.includes(song.productionDetails.BeatFrom)
                      ? "border-1 border-primario"
                      : ""
                  }
                  `}
                    >
                      <span className="">🎹</span>
                      {song.productionDetails.BeatFrom}
                    </small>
                  )}
                  {song.productionDetails.VideoStudio && (
                    <small
                      className={`
                  flex p-1 rounded-md bg-gray-100 ${
                    VIPSongCriteria.includes(song.productionDetails.VideoStudio)
                      ? "border-1 border-primario"
                      : ""
                  }
                  `}
                    >
                      <span className="">🎥</span>
                      {song.productionDetails.VideoStudio}
                    </small>
                  )}
                </div>
              </div>
            </div>
            <div className="flex md:flex-col items-center gap-4 justify-center md:h-2/5 h-1/4 w-full">
              <img
                src={`https://img.youtube.com/vi/${song?.youtubeId}/mqdefault.jpg`}
                alt={`imagen de ${song.name}`}
                className="rounded-full md:h-full md:w-full max-h-28 h-10 w-10  md:rounded-sm object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="shadow flex flex-col items-center justify-baseline max-h-[40rem] overflow-y-auto w-full max-w-[50rem] gap-1 p-4">
        {allSongs.map((song) => (
          <div
            id={`song-${song.id}`}
            key={song.id}
            onClick={() =>
              $SelectedSong.set({
                id: song.id,
                name: song.name,
                youtubeId: song.youtubeId,
                tags: song.tags,
                artists: song.artists,
                featured: song.featured,
                productionDetails: song.productionDetails,
                date: song.date,
              })
            }
            className={`
              ${
                song.productionDetails.RecordingStudio &&
                VIPSongCriteria.includes(
                  song.productionDetails.RecordingStudio
                ) &&
                song.productionDetails.BeatFrom &&
                VIPSongCriteria.includes(song.productionDetails.BeatFrom)
                  ? "bg-secundarioRow. /10"
                  : "bg-white"
              }
              ${
                selectedSong?.id === song.id
                  ? "bg-secundario/40 border-b-2 border-b-secundario/80 shadow-lg"
                  : " border-b-2 border-b-gray-200"
              } relative snap-x transition-transform duration-300 hover:cursor-pointer hover:border-primario justify-center items-center flex gap-1 p-4 w-full md:h-[5rem] group`}
          >
            <div className="flex items-center w-2/5 h-full">
              <div className="flex flex-col ">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap gap-1 items-center">
                    <h3 className="text-lg font-semibold">{song.name}</h3>
                  </div>
                  <p className="flex text-sm text-gray-500">
                    {song.artists.join(", ")}
                  </p>
                </div>
              </div>
              <div className=" absolute right-2 flex items-center justify-center">
                {song.productionDetails.RecordingStudio &&
                  VIPSongCriteria.includes(
                    song.productionDetails.RecordingStudio
                  ) && <StarIcon className="w-4 h-4 text-secundario" />}
                {song.productionDetails.BeatFrom &&
                  VIPSongCriteria.includes(song.productionDetails.BeatFrom) && (
                    <StarIcon className="w-4 h-4 text-secundario" />
                  )}
                {song.productionDetails.VideoStudio &&
                  VIPSongCriteria.includes(
                    song.productionDetails.VideoStudio
                  ) && <StarIcon className="w-4 h-4 text-secundario" />}
                <small className="group-hover:scale-150 flex items-center justify-center rounded-full p-1 transition-all duration-300">
                  <PlayIcon />
                </small>
              </div>
            </div>
            <div className="flex flex-col w-1/5 md:w-2/5 justify-center items-baseline h-full">
              <p className=" text-sm text-gray-600 ">{song.tags.join(", ")}</p>
              <div className="flex flex-col md:flex-row gap-1">
                {song.productionDetails.RecordingStudio && (
                  <small
                    className={`flex md:p-1 rounded-md md:bg-gray-100 ${
                      VIPSongCriteria.includes(
                        song.productionDetails.RecordingStudio
                      )
                        ? "md:border-1 md:border-primario"
                        : ""
                    }`}
                  >
                    <span className="">🎙️</span>
                    {song.productionDetails.RecordingStudio}
                  </small>
                )}
                {song.productionDetails.BeatFrom && (
                  <small
                    className={`
                     flex md:p-1 rounded-md md:bg-gray-100 ${
                       VIPSongCriteria.includes(song.productionDetails.BeatFrom)
                         ? "md:border-1 md:border-primario"
                         : ""
                     }
                      `}
                  >
                    <span className="">🎹</span>
                    {song.productionDetails.BeatFrom}
                  </small>
                )}
                {song.productionDetails.VideoStudio && (
                  <small
                    className={`
                     flex md:p-1 rounded-md md:bg-gray-100 ${
                       VIPSongCriteria.includes(
                         song.productionDetails.VideoStudio
                       )
                         ? "md:border-1 md:border-primario"
                         : ""
                     }
                      `}
                  >
                    <span className="">🎥</span>
                    {song.productionDetails.VideoStudio}
                  </small>
                )}
              </div>
              <div className="flex gap-2 items-center">
                {/* <small className=" md:hidden flex">
                  {song.tags.join(", ")}
                </small> */}
                {/* <small className=" md:flex md:p-1 md:rounded-md md:h-7 md:bg-gray-100">
                  {song.productionDetails.RecordingStudio}
                </small> */}
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center w-1/5 h-full">
              <img
                src={`https://img.youtube.com/vi/${song?.youtubeId}/mqdefault.jpg`}
                alt={`imagen de ${song.name}`}
                className="h-15 w-15 object-cover border-1 border-secundario shadow hidden md:flex"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
