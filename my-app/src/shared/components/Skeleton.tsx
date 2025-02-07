import React from 'react'

type Props = {}

function Skeleton({}: Props) {
  return (
    <div className="w-full h-[300px] bg-gray-300 rounded-lg animate-pulse rounded-3xl">
      <div className="w-full h-full rounded-3xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
    </div>
  )
}

export default Skeleton
