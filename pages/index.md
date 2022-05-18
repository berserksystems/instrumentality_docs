---
title: Instrumentality.
description: A data aggregation platform.
---

{% section %}
{% typewriter /%}
{% /section %}

# What is Instrumentality?

Instrumentality is a data aggregation platform that accepts data from any source about any person or group of persons. The aim of Instrumentality is to provide a way by which all data about everyone can be gathered and viewed in one place.

## Who is this for?

This is a guide for administrators wishing to run their own instance of Instrumentality. If you wish to develop Instrumentality or understand the inner workings, go to [GitHub](https://github.com/berserksystems/instrumentality).

It is recommended that non-technical users are given a web front end to use.

## How does it work?

Users create subjects and groups. Groups are sets of subjects. When a profile is added to a subject, that profile is added to the queue. Data providers regularly poll the queue for jobs, finding new data about that profile and feeding it back into Instrumentality for the user to view.

Instrumentality itself is merely a server that accepts data. It doesn't independently check that the data provided is real, just that the data is valid and sane. Instrumentality has no ability to judge that a data provider is intentionally giving false or reduced information, so the quality of the data provided is extremely important. 

All data is tagged with the provider that submitted the data, making cleaning a bad actor's activity (and all of their invitees) from the system easy.

## How can I run my own instance?

Go to [quick start](info/quick_start) for more details.