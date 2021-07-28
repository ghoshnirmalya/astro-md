---
title: "Hasura Next.js Boilerplate"
description: "Boilerplate for building applications using Hasura and Next.js."
tags: ["next"]
layout: "../../../layouts/Article.astro"
---

[![Logo](/images/content/nextjs-hasura-boilerplate/hasura-nextjs-boilerplate.png)](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate)

As the name suggests, [**Hasura Next.js Boilerplate**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate) is a boilerplate for building applications using Hasura and Next.js. This boilerplate will let you up and running with a Next.js front-end and Hasura back-end application easily.

[Learn more](/guides/nextjs-hasura-boilerplate/02-motivation) about why this boilerplate was created or [check out how to create a real-time application](/guides/nextjs-hasura-boilerplate/04-getting-started).

## Table of Contents

## Motivation

I wanted to built an application which will have [Next.js](http://nextjs.org/) serving the front-end while the back-end will be powered by [Hasura](https://hasura.io/). However, doing a quick [search on Google](https://www.google.com/search?rlz=1C5CHFA_enIN884IN884&sxsrf=ALeKk00n-5Lebdi67WuA-L5kdCoJAjmY5A%3A1610508668192&ei=fGn-X6aPC5uQ4-EP0--VuA4&q=hasura+next.js+boilerplate&oq=hasura+next.js+boilerplate&gs_lcp=CgZwc3ktYWIQAzoECAAQRzoJCAAQyQMQFhAeOgUIIRCgAToECCEQFToHCCEQChCgAVCVHVjIPGDRQGgAcAJ4AIAB1QGIAcIPkgEGMC4xMy4xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwimvcyo_JfuAhUbyDgGHdN3BecQ4dUDCA0&uact=5), I realized that there isn't any good solution or boilerplate from where I can start coding.

As a result, I created this repository from where anyone can start building an application which combines the flexibility of Next.js and the simplicity of Hasura.

I realized that many people have faced a similar hurdle while developing such application. Both Next.js and Hasura are great softwares and it shouldn't be difficult to build an application with them.

Next, you can take a look at all the [features](/guides/nextjs-hasura-boilerplate/03-features) that this boilerplate offers or
[check out how to create a real-time application](/guides/nextjs-hasura-boilerplate/04-getting-started).

A special mention to [this boilerplate](https://github.com/sondh0127/nextjs-hasura-fullstack) which helped in simplifying a lot of code generation.

## Features

This boilerplate is built on top of [Next.js](http://nextjs.org/) and [Hasura](https://hasura.io/). So, you get all the benefits and features that these two softwares provide. However, the following features are the most important ones:

1. **Automatic compilation and bundling** of Next.js which ensures optimized code during production builds.
2. **Pre-rendering of pages** at build time (SSG) or request time (SSR).
3. Support for **TypeScript**.
4. **File-system routing** which helps in adding new routes to your application.
5. Support for **optimized images** out of the box.
6. Instant **real-time** GraphQL APIs.
7. Built-in **authorization** and **authentication**.

Next, you can check out [how to get started](/guides/nextjs-hasura-boilerplate/04-getting-started) with this boilerplate.

## Getting started

[**Hasura Next.js Boilerplate**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate) is a boilerplate for building applications using Hasura and Next.js. This boilerplate consists of the following:

1. [**Frontend**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/frontend): Next.js application
2. [**Backend**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/backend): Dockerized Hasura application

## Overview

This boilerplate is built using the following technologies:

1. [Chakra UI](https://chakra-ui.com/)
2. [Emotion](https://emotion.sh/)
3. [GraphQL](https://graphql.org/)
4. [Apollo](https://www.apollographql.com/)
5. [NextAuth](https://next-auth.js.org/)
6. [TypeScript](https://www.typescriptlang.org/)

It supports GraphQL Query, Mutation and Subscription out of the box.

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [Docker](https://www.docker.com/)

## Packages

[**Frontend**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/frontend): Next.js application

This application is the primary user-facing application. Once it’s up and running (see Development section), it’s available on [http://localhost:3000](http://localhost:3000/).

[**Backend**](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate/tree/master/backend): Dockerized Hasura application

[Hasura](https://hasura.io/) is an open source engine that connects to our databases & micro-services and auto-generates a production-ready GraphQL backend. It’s very easy to get Hasura up and running on our local system. All the migrations are set up in the [migrations](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/backend/migrations) directory.

## Installation

1. **Clone the application.**

```bash
git clone git@github.com:ghoshnirmalya/nextjs-hasura-boilerplate.git
```

2. **Run the bootstrap script by running the following command from the root of your project:**

```bash
cd nextjs-hasura-boilerplate && yarn bootstrap
```

3. **Create a Google OAuth Client from [https://console.developers.google.com/apis/credentials/oauthclient](https://console.developers.google.com/apis/credentials/oauthclient) and copy the credentials to `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in your `.env` file inside the `frontend` directory.**

4. **Start Docker and run both the applications by running the following command from the root of your project:**

```bash
yarn dev
```

We need to start Docker and then run the above command. The Hasura console will be available at [http://localhost:8080/console](http://localhost:8080/console). The Hasura GraphQL endpoint will be up and running on [http://localhost:8080/v1/graphql](http://localhost:8080/v1/graphql). The Next.js application will be available at [http://localhost:3000/](http://localhost:3000/).

## Deployments

**Frontend**

Click on the button below to deploy the frontend application on Vercel. You'll need to [sign up for a free Vercel account](https://vercel.com/signup/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fghoshnirmalya%2Fnextjs-hasura-boilerplate%2Ftree%2Fmaster%2Ffrontend&env=NEXT_PUBLIC_API_URL,NEXT_PUBLIC_WS_URL,DATABASE_USERNAME,DATABASE_PASSWORD,DATABASE_HOST,DATABASE_NAME,AUTH_PRIVATE_KEY,NEXTAUTH_URL,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET&project-name=nextjs-hasura-boilerplate&repo-name=nextjs-hasura-boilerplate)

**Backend**

Click on the button below to deploy the backend application on Heroku. You'll need to [sign up for a free Heroku account](https://signup.heroku.com/).

[![Deploy to
Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate)
