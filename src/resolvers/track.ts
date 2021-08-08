import { Arg, Ctx, Int, Query, Resolver } from 'type-graphql';
import Track from '../entities/Track';
import { getPlaylistTracks, getPlaylistTrack } from '../spotifyApi/getPlaylist';
import SpotifyApi from 'spotify-web-api-node';

@Resolver(Track)
export class TrackResolver {
  @Query(() => Track)
  async getTrack(
    @Arg('track', () => Int) trackNum: number,
    @Arg('playlistId', () => String) playlistId: string
  ) {
    const track = await getPlaylistTrack(trackNum, playlistId);
    return track.track;
  }

  @Query(() => Track)
  async getTracks(@Arg('playlistId', () => String) playlistId: string) {
    const tracks = await getPlaylistTracks(playlistId);
    console.log(typeof tracks);
    return tracks.items[0].track;
  }
}
