import cs from 'classnames'
import format from 'date-fns/format'
import React from 'react'
import formatNumber from '../../../format-number'


export default function TweetInfo({ tweet, className = undefined }) {
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${tweet.id}`
  const tweetUrl = `https://twitter.com/${tweet.username}/status/${tweet.id}`
  const createdAt = new Date(tweet.createdAt) ;

  return (
    <div className={cs('static-tweet-info', className)}>
      <a
        className='static-tweet-like'
        href={likeUrl}
        title='Like'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='static-tweet-heart'>
          <div
            className='static-tweet-icon static-tweet-icon-heart'
            role='img'
          />
        </div>

        {(tweet.heartCount || tweet.likes > 0) && (
          <span className='static-tweet-likes'>
            {tweet.heartCount || formatNumber(tweet.likes)}
          </span>
        )}
      </a>

    
        <a
          className={cs('static-tweet-time', !!createdAt && 'static-tweet-time--hidden')}
          href={tweetUrl}
          target='_blank'
          rel='noopener noreferrer'

        >
          <time
            title={`Time Posted: ${createdAt ? createdAt.toUTCString() : ""}`}
            dateTime={createdAt ? createdAt.toISOString() : ""}
          >
            {format(createdAt, 'h:mm a - MMM d, y')}
          </time>
        </a>
    </div>
  )
}
