/* eslint-disable prettier/prettier */
export interface FixRequest {
  mId: number;
  mRoomId: number;
  mTitle: string;
  mDescription: string;
  mStatus: FixRequestStatus;
  mCreated: Date;
  mUpdated: Date;
}

export enum FixRequestStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  DONE = 'DONE',
}
