/* eslint-disable prettier/prettier */
export interface User {
  mId: number;
  mUserName: string;
  mEmail?: string;
  mPassword: string;
  mPhoneNumber: string;
  mRole: UserRole;
  mCreated: Date;
  mUpdated: Date;
}

export enum UserRole {
  RENTER = 'RENTER',
  LEASER = 'LEASER',
  ADMIN = 'ADMIN',
}
