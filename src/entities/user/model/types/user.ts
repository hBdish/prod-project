import { UserRole } from '../const/userConst';
import { FeatureFlags } from '@/shared';

export interface User {
  id: string;
  username: string;
  role?: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
