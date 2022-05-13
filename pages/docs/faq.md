---
title: Frequently Asked Questions.
---

# {% $markdoc.frontmatter.title %}

## How do I provide data for a new platform?

Isn't that the question! Instrumentality puts no requirements on how data is extracted, only that it is done within a certain timeframe if it is a queue job. 

Platforms come in all shapes and sizes. Some have explicit APIs, some are only accessible through apps. It's best to use an API as all required data should be available that way.

## Is it OK if I skip a couple fields while providing data?

No. 

Instrumentality is platform agnostic, so it doesn't have a way of determining that a platform does or does not allow content modifications on all or certain fields. Instrumentality also always returns the most recent version of a piece of data, so if you provide data that misses fields it will be impossible for Instrumentality to determine that data hasn't been modified on the platform by the user.


## What if there is no unique content ID?

It's advised that you construct your own unique content ID based on the available data.

This is the case on a few platforms. Let's take a look at some sample data from Last.fm (some irrelevant data has been pruned for readability). 

```json
{
    "recenttracks": {
        "track": [{
            "artist": {
                "mbid": "5db88fae-df24-490e-971a-1b3fe8d373ea",
                "#text": "The Japanese House"
            },
            "streamable": "0",
            "mbid": "1d352712-bd01-4f45-a588-c2a9ee6c6a0b",
            "album": {
                "mbid": "",
                "#text": "Chewing Cotton Wool"
            },
            "name": "Something Has to Change",
            "url": "https:\/\/www.last.fm\/music\/The+Japanese+House\/_\/Something+Has+to+Change",
            "date": {
                "uts": "1652308601",
                "#text": "11 May 2022, 22:36"
            }
        }]
    }
}
```
You'll notice there is no unique content ID in this recent track 'scrobble'. This makes it a little difficult to differentiate this from another scrobble of the same song. Note that using the `mbid` as the unique content would be incorrect as the same user may well listen to the same track twice.

Here, the `mbid` is a MusicBrainz Identifier. This is a UUID that uniquely identifies music. Cool!

Hiding in `date` is `uts`, which is a unix timestamp. This is useful as it gives us up to the second of when scrobble occured while `#text` leaves the seconds out. While a little more burdensome, it is important to only use the timestamp as it is strictly more accurate.

Without a unique content ID, we will have to roughly approximate one. As can be seen here, there are really only two pieces of data:
- When the scrobble was posted.
- The track that was listened to.
That is to say that all of the sample data can be found from just these two facts as the date text can be re-created from the unix timestamp and the `mbid` gives you everything else.

Without a good reason, a good standard is:

```
<ISO8601 UTC>|+|<DATA FROM WHICH THE REST OF THE DATA CAN BE DERIVED>
```
which would look like:
```
2022-05-11T22:36:41+00:00|+|1d352712-bd01-4f45-a588-c2a9ee6c6a0b
```

In doing this, we've lost the ability to tell if this entry is deleted or to differentiate it from other scrobbles of the same song that happened in the same second. For Last.fm, neither of these two events are likely or important, but it is important to acknowledge that this data is lost.