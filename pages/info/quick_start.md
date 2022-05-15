---
title: Quick start.
description: How to get an instance up and running.
---

# {% $markdoc.frontmatter.title %}

## How to install Instrumentality.

### Instrumentality itself.

You can download a binary of the latest release from [GitHub](https://github.com/berserksystems/instrumentality/releases).

You can also build Instrumentality from source.
```bash
git clone https://github.com/berserksystems/instrumentality.git
cd instrumentality/
cargo build --release
./target/release/instrumentality
```

### MongoDB.

Instrumentality uses MongoDB for storage. You can download the community server [here](https://www.mongodb.com/try/download/community).

All Instrumentality needs to run is the address:port and a user with read/write permissions on a given database. See section from the example configuration below:

```toml
[mongodb]
hosts = "127.0.0.1"
port = "27017"
user = "instrumentality"
password = "PASSWORDGOESHERE"
database = "instrumentality"
```

### Configuration.

If you're happy to use the default configuration, you can move `InstrumentalityExample.toml` to `Instrumentality.toml`. Ensure that you have a PEM formatted `cert.pem` and `privkey.pem` in `tls/` before starting. These can be self-signed or created by using [Let's Encrypt](https://letsencrypt.org/getting-started/).

## First launch.

Upon first launch, Instrumentality will create a root user and output that user's details into the terminal. If you don't have access to this, you'll have to read these details out of the users collection in MongoDB.

## Add data.

See the documentation for the endpoint for [adding](/endpoints/add) data.

## Create subjects and groups.

See the documentation for the endpoint for [creating](/endpoints/create) subjects and groups.

## Invite another user.

As an existing user, you can invite another user by creating an invite code using `/invite`. `/invite` is a privileged GET route, so you'll need to have your API in your request headers under `X-API-KEY`.

The invite will return something along the lines of:
```json
{
    "created_by": "72c34ca4-d540-46b2-8ae3-53b8988c023b",
    "created_at": "2022-03-21T15:13:13Z",
    "code": "2FBFE4D99040DBDE144E6581CAFC5FE90DB79A7C625706D781FF5E161D843CFFEE842E3BA4E9C45E98FDA24FE489EDC21E452BEC47E0BC64B6E6176212C29F38",
    "used": false,
    "used_by": "None",
}
```

This invite code is only valid once. You must create another code for another user. Keep in mind that currently any user can invite as many users as they like. For this reason, you shouldn't invite anyone you don't trust. However, the details of every invite are kept and so banning a user and all their invitees (and potentionally removing all their data) is trivial.