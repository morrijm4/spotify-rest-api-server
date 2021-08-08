import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class ExternalId {
  @Field()
  isrc: string;
}

export default ExternalId;
