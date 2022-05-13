---
title: /register
description: Register.
---

# {% $markdoc.frontmatter.title %}

## Request
```json
{
    "code": "INVITE_CODE",
    "name": "USERNAME",
}
```

## Response
```json
{
    "response": "OK",
    "user": {
        "uuid": "UUID_V4_STRING",
        "name": "USERNAME",
        "key": "APIKEY",
        "banned": false,
    }
}
```
