import { Field, ObjectType } from 'type-graphql';
import ExternalUrl from './ExternalUrl';

@ObjectType()
class Artist {
  @Field(() => ExternalUrl)
  external_urls: ExternalUrl;

  @Field()
  href: string;

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  uri: string;
}

export default Artist;
