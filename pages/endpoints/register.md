---
title: /register
description: Register.
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
