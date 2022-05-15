---
title: /reset
description: Reset API key.
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
## Response
```json
{
    "response": "OK",
    "new_key": "APIKEY",
}
```