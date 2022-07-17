---
title: /login
description: User data.
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
## Response
```json
{
    "response": "OK",
    "user": {
        "uuid": "UUID_V4_STRING",
        "name": "USERNAME",
        "key": "APIKEY",
        "banned": false,
    },
    "subjects": [
        {
            "uuid": "UUID_V4_STRING",
            "created_at": "2022-05-11T22:36:41",
            "created_by": "UUID_V4_STRING",
            "name": "User1",
            "profiles": {"platform1": ["user1"], "platform2": ["user_1", "user_1_private"]},
        }
    ],
    "groups": [
        {
            "uuid": "UUID_V4_STRING",
            "created_at": "2022-05-11T22:36:41",
            "created_by": "UUID_V4_STRING",
            "name": "GROUP_NAME",
            "subjects": ["UUID_V4_STRING", "UUID_V4_STRING", "UUID_V4_STRING"],
            "description": "Group description.",
        }
    ]
}
```
