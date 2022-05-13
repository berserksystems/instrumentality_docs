---
title: /update
description: Update subjects and groups.
---

# {% $markdoc.frontmatter.title %}

## Request
HTTP POST
```json
{
    "name": "User",
    "profiles": {"platform": "user1", "platform2": "user_1", "platform2": "user_1_private"},
    "description": "This is user.",
}
```

## Response
```json
{
    "response": "OK",
}
```