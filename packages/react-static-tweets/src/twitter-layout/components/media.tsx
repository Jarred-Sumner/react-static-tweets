import React from 'react'
// import dynamic from 'next/dynamic' // TODO
import Image from 'next/image'
import { useTweet } from './tweet/tweet'

export const Img = ({ width, height, src, ...p }) => {
  const tweet = useTweet()
  const tweetUrl = `https://twitter.com/${tweet.username}/status/${tweet.id}`

  return (
    <details className='static-tweet-details'>
      <summary
        className='static-tweet-summary'
      >
        <a
          href={tweetUrl}
          className='avatar'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            {...p}
            src={`${src}&name=small`}
            layout='fill'
            objectFit='cover'
            quality={80}
            width={width === height ? "100%" : (width > height ? "100%" : "auto")}
            height={height === width ? "100%" : (height > width ? "100%" : "auto")}
          />
        </a>
      </summary>
    </details>
  )
}
