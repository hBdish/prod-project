import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
