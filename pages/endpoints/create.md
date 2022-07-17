---
title: /create
description: Create subjects and groups.
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
    "name": "User",
    "profiles": {"platform1": ["user1"], "platform2": ["user_1"]},
    "description": "This is user.",
}
```

## Response
```json
{
    "response": "OK"
}
```