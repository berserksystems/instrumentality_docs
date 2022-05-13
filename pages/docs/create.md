---
title: /create
description: Create subjects and groups.
---

# {% $markdoc.frontmatter.title %}

## Request
HTTP POST
Header: {X-API-KEY: "APIKEY"}
```json
{
    "name": "User",
    "profiles": {"platform": "user1", "platform2": "user_1"},
    "description": "This is user.",
}
```

## Response
```json
{
    "response": "OK"
}
```