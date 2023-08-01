import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers';
import { UserRole } from '../../model/const/userConst';

const getUserRoles = (state: StateSchema) => state.user.authData?.role;

const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));

export {
  isUserAdmin,
  isUserManager,
  getUserRoles,
};
