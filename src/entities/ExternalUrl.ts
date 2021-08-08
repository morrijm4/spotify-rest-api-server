import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class ExternalUrl {
  @Field()
  spotify: string;
}

export default ExternalUrl;
