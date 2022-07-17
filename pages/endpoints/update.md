---
title: /update
description: Update subjects and groups.
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
    "profiles": {"platform1": ["user1"], "platform2": ["user_1", "user_1_private"]},
    "description": "This is user.",
}
```

## Response
```json
{
    "response": "OK"
}
```

## Notes

{% callout type="warning" %}
When you update a subject or a group, you MUST post all their information. No old data is merged.
{% /callout %}