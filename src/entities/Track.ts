import { Field, ObjectType } from 'type-graphql';
import Album from './Album';
import Artist from './Artist';
import ExternalId from './ExternalId';
import ExternalUrl from './ExternalUrl';

@ObjectType()
class Track {
  @Field(() => Album)
  album: Album;

  @Field(() => [Artist])
  artists: Artist[];

  @Field(() => [String])
  available_markets: string[];

  @Field()
  disc_number: number;

  @Field()
  duration_ms: number;

  @Field()
  episode: boolean;

  @Field()
  explicit: boolean;

  @Field(() => ExternalId)
  external_ids: ExternalId;

  @Field(() => ExternalUrl)
  external_urls: ExternalUrl;

  @Field()
  href: string;

  @Field()
  id: string;

  @Field()
  is_local: boolean;

  @Field()
  name: string;

  @Field()
  popularity: number;

  @Field()
  preview_url: string;

  @Field()
  track: boolean;

  @Field()
  track_number: number;

  @Field()
  type: string;

  @Field()
  uri: string;
}

export default Track;
