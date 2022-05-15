---
title: /delete
description: Delete subjects and groups.
---

# {% $markdoc.frontmatter.title %}

{% callout type="warning" %}
This is a privileged route. 

Your request headers must contain a valid API key under 'X-API-KEY'.
{% /callout %}

## Request
{% callout type="note" %}
HTTP DELETE
{% /callout %}
```json
{
    "uuid": "UUID_V4_STRING"
}
```

## Response
```json
{
    "response": "OK"
}
```
