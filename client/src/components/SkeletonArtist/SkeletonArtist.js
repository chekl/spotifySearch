import React from 'react';
import { Skeleton } from '@mui/material';

export default function SkeletonArtist() {
  return (
    <div>
      <Skeleton variant='rectangular' width={300} height={400} />
      <Skeleton variant='rectangular' width={20} height={60} />
      <Skeleton variant='rectangular' width={60} height={60} />
    </div>
  );
}
