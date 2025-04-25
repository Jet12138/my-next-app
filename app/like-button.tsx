'use client'

import { incrementLike } from './actions'
import { useState } from 'react'

export default function LikeButton({
    initialLikes
}: {
    initialLikes: number
}) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(0)
  let num = 0;
  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike(num)
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}
