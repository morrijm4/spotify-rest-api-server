import SpotifyApi from 'spotify-web-api-node';
import spotifyApi from './client';
import getAccessToken from './getAccessToken';

export interface GetPlaylistTrackError {
  Error: [
    {
      field: string;
      message: string;
    }
  ];
}

export const getPlaylistTracks = async (
  playlistId: string,
  limit: number = 100,
  offset: number = 0
): Promise<SpotifyApi.PlaylistTrackObject[]> => {
  spotifyApi.setAccessToken(await getAccessToken());
  const playlist = await spotifyApi.getPlaylist(playlistId);

  return playlist.body.tracks.items.slice(offset, limit);
};

export const getPlaylistTrack = async (
  pos: number = 0,
  playlistId: string
): Promise<SpotifyApi.TrackObjectFull> => {
  const tracks = await getPlaylistTracks(playlistId);
  if (pos < 0 || pos >= tracks.length) {
    console.log('Error, track is out of bounds');
  }

  return tracks[pos].track;
};

export const getPlaylist = async (playlistId: string) => {
  spotifyApi.setAccessToken(await getAccessToken());
  const playlist = await spotifyApi.getPlaylist(playlistId);
  return playlist;
};
