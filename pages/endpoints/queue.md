---
title: /queue
description: The queue.
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

Queue requests must supply a platforms argument, which is an array of platform strings.

`/queue?platforms=[platform1, platform2]`

This array can be one element long.
## Response
```json
{
    "response": "OK",
    "queue_id": "UUID_V4_STRING",
    "username": "USERNAME",
    "platform": "PLATFORM_NAME",
    "platform_id": "USERNAME'S UNIQUE PLATFORM_NAME ID"
}
```

## Notes

In some cases, `platform_id` will equal `username`.
