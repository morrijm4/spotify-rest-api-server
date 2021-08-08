import { Field, ObjectType } from 'type-graphql';
import ExternalUrl from './ExternalUrl';
import Artist from './Artist';
import Image from './Image';

@ObjectType()
class Album {
  @Field()
  album_type: string;

  @Field(() => [Artist])
  artists: Artist[];

  @Field(() => [String])
  available_markets: string[];

  @Field(() => ExternalUrl)
  external_urls: ExternalUrl;

  @Field()
  href: string;

  @Field()
  id: string;

  @Field(() => [Image])
  images: Image[];

  @Field()
  name: string;

  @Field()
  release_date: string;

  @Field()
  release_date_precision: string;

  @Field()
  total_tracks: number;

  @Field()
  type: string;

  @Field()
  uri: string;
}

export default Album;
