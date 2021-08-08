import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Image {
  @Field()
  height: number;

  @Field()
  url: string;

  @Field()
  width: number;
}

export default Image;
