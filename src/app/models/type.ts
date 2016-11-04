import {Serializable} from './serializable'

export class Type implements Serializable<Type> {
  id: number;
  title: string;
  color: string;

  deserialize(input) {
    if (input != null) {
      this.id = input.id;
      this.title = input.title;
      this.color = input.color;
    }
    return this;
  }
}
