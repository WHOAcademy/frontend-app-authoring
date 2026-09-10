import { getAuthService } from '@edx/frontend-platform/auth';

export const isCurrentUserSuperuser = (): boolean => {
  try {
    const jwtTokenService = getAuthService()?.getJwtTokenService?.();
    return !!jwtTokenService?.decodeJwtCookie?.()?.superuser;
  } catch {
    return false;
  }
};
