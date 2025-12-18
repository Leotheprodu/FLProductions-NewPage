"use client";
/* eslint-disable @next/next/no-img-element */
import { songs } from "@global/songs";
import { $PlayList, $SelectedSong } from "@stores/player";
import { useEffect, useState, useMemo } from "react";
import { useStore } from "@nanostores/react";
import { PlayIcon } from "@/icons/PlayIcon";
import { StarIcon } from "@/icons/StarIcon";
import { MicIcon } from "@/icons/MicIcon";
import { PianoIcon } from "@/icons/PianoIcon";
import { VideoIcon } from "@/icons/VideoIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { VIPSongCriteria } from "@global/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tooltip } from "@/components/ui/Tooltip";

export const BeatsSection = () => {
  const selectedSong = useStore($SelectedSong);
  const [search, setSearch] = useState("");

  const sortedSongs = useMemo(() => {
    return (songs || [])?.slice().sort((a, b) => {
      // Primero los que tienen featured en true
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // Luego por fecha descendente
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }, []);

  const filteredSongs = useMemo(() => {
    if (!search) return sortedSongs;
    const lowerSearch = search.toLowerCase();
    return sortedSongs.filter(
      (song) =>
        song.name.toLowerCase().includes(lowerSearch) ||
        song.artists.some((a) => a.toLowerCase().includes(lowerSearch)) ||
        song.tags.some((t) => t.toLowerCase().includes(lowerSearch))
    );
  }, [search, sortedSongs]);

  const beatLimit = 4;
  const latestSongs = filteredSongs?.slice(0, beatLimit);
  const allSongs = filteredSongs?.slice(beatLimit);

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
      className="py-20 px-4 md:px-8 bg-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Nuestro Portafolio"
          subtitle="Explora mis trabajos más recientes y destacados. Calidad profesional en cada detalle."
          gradient
          light
        />

        {/* Search Bar */}
        <div className="w-full max-w-5xl mx-auto mb-10 relative animate-fade-in stagger-1">
          <div className="relative group">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-xl" />
            <input
              type="text"
              placeholder="Buscar por canción, artista o género..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-dark-lighter/50 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all text-white text-lg placeholder:text-gray-500 backdrop-blur-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-14 text-[10px] md:text-xs text-gray-400 animate-fade-in stagger-2 opacity-80">
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
              <MicIcon />
            </div>
            <span className="uppercase tracking-widest font-medium">
              Grabación en FLProductions.
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
              <PianoIcon />
            </div>
            <span className="uppercase tracking-widest font-medium">
              Beat / Producción FLProductions.
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
              <VideoIcon />
            </div>
            <span className="uppercase tracking-widest font-medium">
              Video en FLProductions.
            </span>
          </div>
        </div>

        {/* Featured Latest Songs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-4">
          {latestSongs.map((song, index) => (
            <div
              key={song.id}
              onClick={() => $SelectedSong.set(song)}
              className={`
                relative p-4 rounded-2xl transition-all duration-500 cursor-pointer group hover-lift
                ${
                  selectedSong?.id === song.id
                    ? "glass-dark border-primary/40 ring-2 ring-primary/20 shadow-glow"
                    : "glass-dark border-white/5 hover:border-white/20"
                }
                animate-scale-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail with Overlay */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={`https://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg`}
                  alt={song.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black p-0 scale-0 group-hover:scale-110 transition-transform duration-300 shadow-glow shadow-primary/40">
                    <PlayIcon className="scale-125 translate-x-px" />
                  </div>
                </div>
                {song.featured && (
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="bg-accent/90 text-black flex items-center justify-center w-7 h-7 rounded-full shadow-lg backdrop-blur-md p-0">
                      <StarIcon className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-white line-clamp-1 group-hover:text-primary transition-colors">
                  {song.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-1">
                  {song.artists.join(", ")}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {song.productionDetails.RecordingStudio && (
                    <Tooltip
                      content={`Grabación: ${song.productionDetails.RecordingStudio}`}
                    >
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-primary-light">
                        <MicIcon className="text-sm" />
                      </div>
                    </Tooltip>
                  )}
                  {song.productionDetails.BeatFrom && (
                    <Tooltip
                      content={`Beat: ${song.productionDetails.BeatFrom}`}
                    >
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-primary-light">
                        <PianoIcon className="text-sm" />
                      </div>
                    </Tooltip>
                  )}
                  {song.productionDetails.VideoStudio && (
                    <Tooltip
                      content={`Video: ${song.productionDetails.VideoStudio}`}
                    >
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-primary-light">
                        <VideoIcon className="text-sm" />
                      </div>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Songs List */}
        <div className="max-w-4xl mx-auto space-y-3 px-4">
          {allSongs.length > 0 && (
            <h3 className="text-xl font-semibold text-gray-400 mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-white/20"></span>
              Todas las producciones
            </h3>
          )}

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {allSongs.map((song, index) => (
              <div
                key={song.id}
                onClick={() => $SelectedSong.set(song)}
                className={`
                  flex items-center gap-4 p-3 rounded-xl transition-all duration-300 cursor-pointer border
                  ${
                    selectedSong?.id === song.id
                      ? "glass border-primary/50 bg-primary/10"
                      : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10"
                  }
                  animate-fade-in-up
                `}
                style={{ animationDelay: `${(index + 4) * 0.05}s` }}
              >
                <div className="relative w-16 h-10 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={`https://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {selectedSong?.id === song.id && (
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                  )}
                </div>

                <div className="flex-grow min-w-0">
                  <h4
                    className={`font-medium ${
                      selectedSong?.id === song.id
                        ? "text-primary"
                        : "text-white"
                    } truncate`}
                  >
                    {song.name}
                  </h4>
                  <p className="text-gray-500 text-xs truncate uppercase tracking-wider">
                    {song.artists.join(", ")}
                  </p>
                </div>

                <div className="hidden md:flex flex-wrap gap-2 text-xs text-gray-500 italic">
                  {song.tags.slice(0, 2).join(" • ")}
                </div>

                <div className="flex gap-2">
                  {song.productionDetails.RecordingStudio && (
                    <Tooltip
                      content={`Grabación: ${song.productionDetails.RecordingStudio}`}
                    >
                      <MicIcon
                        className={`text-sm ${
                          VIPSongCriteria.includes(
                            song.productionDetails.RecordingStudio
                          )
                            ? "text-primary"
                            : "text-gray-400 opacity-40"
                        }`}
                      />
                    </Tooltip>
                  )}
                  {song.productionDetails.BeatFrom && (
                    <Tooltip
                      content={`Beat: ${song.productionDetails.BeatFrom}`}
                    >
                      <PianoIcon
                        className={`text-sm ${
                          VIPSongCriteria.includes(
                            song.productionDetails.BeatFrom
                          )
                            ? "text-primary"
                            : "text-gray-400 opacity-40"
                        }`}
                      />
                    </Tooltip>
                  )}
                  {song.productionDetails.VideoStudio && (
                    <Tooltip
                      content={`Video: ${song.productionDetails.VideoStudio}`}
                    >
                      <VideoIcon
                        className={`text-sm ${
                          VIPSongCriteria.includes(
                            song.productionDetails.VideoStudio
                          )
                            ? "text-primary"
                            : "text-gray-400 opacity-40"
                        }`}
                      />
                    </Tooltip>
                  )}
                </div>

                <div className="flex-shrink-0 ml-2">
                  <PlayIcon
                    className={`text-lg ${
                      selectedSong?.id === song.id
                        ? "text-primary"
                        : "text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    }`}
                  />
                </div>
              </div>
            ))}

            {filteredSongs.length === 0 && (
              <div className="text-center py-12 glass border border-white/10 rounded-2xl">
                <p className="text-gray-500">
                  No se encontraron canciones que coincidan con tu búsqueda.
                </p>
                <button
                  onClick={() => setSearch("")}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Ver todas las canciones
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
