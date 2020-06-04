import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import TrackPlayer from 'react-native-track-player';

const PlayerContext = createContext();

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw Error('usePlayer precisa ser usado com um PlayerProvider');
  }
  return context;
}

export const PlayerProvider = ({ children }) => {
  const [playing, setPlaying] = useState({});

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
      setPlaying(music);
    });
  }, [TrackPlayer]);

  return (
    <PlayerContext.Provider value={{ play, playing }}>
      {children}
    </PlayerContext.Provider>
  );
};
