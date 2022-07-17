---
title: /view
description: View data.
---

# {% $markdoc.frontmatter.title %}

{% callout type="warning" %}
This is a privileged route. 

Your request headers must contain a valid API key under 'X-API-KEY'.
{% /callout %}

## Request
{% callout type="note" %}
HTTP GET
{% /callout %}

View requests must supply a subjects argument, which is an array of UUIDs of subjects.

`/view?subjects=[e0e998b0-6557-4874-8c8f-edbe4230f3b2, f38ee600-3627-4be8-a57e-afe0a66194db dc20ca77-4fd7-4a1d-beda-96f915cc1e69]`

This array can be one element long.
## Response
```json
{
    "response": "OK",
    "subject_data": [
        {"subject": {
            "uuid": "e0e998b0-6557-4874-8c8f-edbe4230f3b2",
            "created_at": "2022-05-11T22:36:41",
            "created_by": "86aea387-5563-4760-be5a-3bc6f575a320",
            "name": "USERNAME",
            "profiles": {"platform1": ["user1"], "platform2": ["user_1", "user_1_private"]},
        },
        "platforms": [
            {"platform": "platform1",
            "profiles": [
                {"meta": {
                    "id": "UNIQUE_PLATFORM_ID", 
                    "platform": "platform1", 
                    "username": "user1", 
                    "private": false,
                    "suspended_or_banned": false,
                    "retrieved_at": "2022-03-21T15:13:13Z",
                    "display_name": "User1 on Platform1",
                    "profile_picture": "https://platform.tld/user1/profile.png",
                    "bio": "I'm user1.",
                    "verified": true,
                    "references": {"@alice": "https://platform.tld/user3"},
                    "link": "https://platform.tld/user1",
                },
                "content": [
                    {
                        "id": "UNIQUE_PLATFORM_ID", 
                        "platform": "platform1", 
                        "content_type": "CONTENT_TYPE", 
                        "retrieved_at": "2022-03-21T15:13:13Z",
                        "content_id": "UNIQUE_CONTENT_ID",
                        "deleted": false,
                        "retrieved_from": "https://platform.tld/user1/content_id/",
                        "created_at": "2022-03-21T15:12:00Z",
                        "body": "Lorem Ipsum, some text here.",
                        "media": ["https://platform.tld/user/content_id/photo1.jpg", "https://platform.tld/user/content_id/photo2.png"],
                        "references": {"@user2": "https://platform.tld/user2", "@alice": "https://platform.tld/user3"},
                    },
                ],
                "presence": [
                    {
                        "id": "UNIQUE_PLATFORM_ID", 
                        "platform": "platform1", 
                        "presence_type": "PRESENCE_TYPE", 
                        "retrieved_at": "2022-03-21T15:13:13Z"
                    }
                ]}
            ]},

        ]}
    ]
}
```
