import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import TrackPlayer, { useTrackPlayerEvents, TrackPlayerEvents } from 'react-native-track-player';

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR
];

const PlayerContext = createContext();

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw Error('usePlayer must be used within an PlayerProvider');
  }
  return context;
}

export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [haveCurrentMusic, setHaveCurrentMusic] = useState({});

  useTrackPlayerEvents(events, event => {
    //MUSICA PAUSADA
    if (event.state !== 3) {
      setIsPlaying(false);
      return;
    }

    //MUSICA TOCANDO
    setIsPlaying(true);
  });

  const play = useCallback(async (music) => {
    await TrackPlayer.setupPlayer().then(async () => {
      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
        ],
        stopWithApp: true,
      });

      await TrackPlayer.add(music);

      await TrackPlayer.play();
      setHaveCurrentMusic(music);
    });
  }, [TrackPlayer]);

  const stop = useCallback(async () => {
    await TrackPlayer.pause();
  }, [TrackPlayer]);

  return (
    <PlayerContext.Provider value={{ play, stop, isPlaying, haveCurrentMusic }}>
      {children}
    </PlayerContext.Provider>
  );
};
