---
title: Data.
---

# {% $markdoc.frontmatter.title %}

## The three types of data.

Under Instrumentality, there are only three types of data. These are Presence, Content and Meta. Another way of thinking about them is continuous data, discrete data and user data respectively.

### Presence.
```rust
Presence {
    id: String,
    platform: String,
    presence_type: String,
    retrieved_at: DateTime<Utc>,
}
```

Presence is our data type dealing with continuous data. This is data that is 'happening' and a data provider can only have said to perceived it whilst it was ongoing. This might be a little confusing, so here's a thought experiment: think of a livestream. Every time a data provider checks up on a user on a livestreaming platform, what should they do if they see that this user is live?

It doesn't make sense to consider this as a discrete piece of data and submit a piece of content saying "this user is/was streaming now". Livestreams can run for a long period of time and filling the feed of data about a person with constant reminders that they are, indeed, still live isn't useful to anyone.

### Content.
```rust
Content {
    id: String,
    platform: String,
    content_type: String,
    retrieved_at: DateTime<Utc>,
    content_id: String,
    deleted: Option<bool>,
    retrieved_from: Option<String>,
    created_at: Option<DateTime<Utc>>,
    body: Option<String>,
    media: Option<Vec<String>>,
    references: Option<HashMap<String, String>>,
}
```

Content is our data type for discrete data. We use this type to record more conventional data about a person. Examples of this are posting a YouTube video, having listened to a song, a tweet. These can be said to have happened entirely at a given time and a unique identifier is given to them by the platform (or by us if need be), preventing the data from being posted twice.

### Meta.
```rust
Meta {
    id: String,
    platform: String,
    username: String,
    private: bool,
    suspended_or_banned: bool,
    retrieved_at: DateTime<Utc>,
    display_name: Option<String>,
    profile_picture: Option<String>,
    bio: Option<String>,
    verified: Option<bool>,
    references: Option<HashMap<String, String>>,
    link: Option<String>,
}
```

This is data about a user on a platform. You could argue that a profile picture is more continuous or discrete, but it's useful to have the most recent copy to hand and to see changes over time.