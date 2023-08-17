import { UserRole } from '../const/userConst';
import { FeatureFlags } from '@/shared';
import { JsonSettings } from './json-settings';

export interface User {
  id: string;
  username: string;
  role?: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
