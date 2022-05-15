---
title: /add
description: Add data.
---

# {% $markdoc.frontmatter.title %}

{% callout type="warning" %}
This is a privileged route. 

Your request headers must contain a valid API key under 'X-API-KEY'.
{% /callout %}

## Request
{% callout type="note" %}
HTTP POST
{% /callout %}
```json
{
    "queue_id": "UUID_V4_STRING",
    "data": [
        {
            "id": "UNIQUE_PLATFORM_ID", 
            "platform": "PLATFORM_NAME", 
            "presence_type": "PRESENCE_TYPE", 
            "retrieved_at": "2022-03-21T15:13:13Z"
        },
        {
            "id": "UNIQUE_PLATFORM_ID", 
            "platform": "PLATFORM_NAME", 
            "content_type": "CONTENT_TYPE", 
            "retrieved_at": "2022-03-21T15:13:13Z",
            "content_id": "UNIQUE_CONTENT_ID",
            "deleted": false,
            "retrieved_from": "https://platform.tld/user/content_id/",
            "created_at": "2022-03-21T15:12:00Z",
            "body": "Lorem Ipsum, some text here.",
            "media": ["https://platform.tld/user/content_id/photo1.jpg", "https://platform.tld/user/content_id/photo2.png"],
            "references": {"@user2": "https://platform.tld/user2", "@alice": "https://platform.tld/user3"},
        },
        {
            "id": "UNIQUE_PLATFORM_ID", 
            "platform": "PLATFORM_NAME", 
            "username": "user", 
            "private": false,
            "suspended_or_banned": false,
            "retrieved_at": "2022-03-21T15:13:13Z",
            "display_name": "User on Platform",
            "profile_picture": "https://platform.tld/user/profile.png",
            "bio": "I'm user.",
            "verified": true,
            "references": {"@alice": "https://platform.tld/user3"},
            "link": "https://platform.tld/user",
        },
    ]
}
```

## Response
```json
{
    "response": "OK"
}
```

## Notes

You can post as many pieces of any type of data as you like. It's best if you submit a meta with every queue job.

Data that doesn't pass verification will be silently filtered.