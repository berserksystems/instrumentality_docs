---
title: /reset
description: Reset API key.
---

# {% $markdoc.frontmatter.title %}

## Request
HTTP GET
Header: {X-API-KEY: APIKEY}

## Response
```json
{
    "response": "OK",
    "new_key": "APIKEY",
}
```