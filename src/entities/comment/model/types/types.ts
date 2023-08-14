import { User } from '@/entities';

export interface Comment {
  id: string;
  user: User;
  text: string;
}
