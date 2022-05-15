---
title: /types
description: Information about accepted content types.
---

# {% $markdoc.frontmatter.title %}

## Request
{% callout type="note" %}
HTTP GET
{% /callout %}

## Response
```json
{
    "response": "OK",
    "content_types": {
        "livestreamr": ["stream_start", "video", "stream_end"],
        "music_fm": ["scrobble"],
        "platform1": ["post", "story", "live"],
        "platform2": ["tweet", "like", "retweet", "story"]
    },
    "presence_types": {
        "platform2": ["follower_count_increase"],
        "livestreamr": ["live"],
        "music_fm": ["now_playing"]
    }
}
```
