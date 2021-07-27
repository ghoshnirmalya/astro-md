---
date: "2020-10-06"
title: "How to do authentication in Next.js using Strapi and NextAuth"
category: "javascript"
tags: ["react", "next", "cms"]
description: "Learn how to build an authentication system in a Next.js application with Strapi and NextAuth."
layout: "../../layouts/Article.astro"
---

In this tutorial, we'll learn how we can build an authentication system in a
Next.js application using Strapi and NextAuth

## Table of Contents

## Introduction

[Strapi](https://strapi.io/) is the leading open-source headless CMS. It’s 100% Javascript, fully customizable and developer-first. I've been using Strapi for some of my [Open Source projects](https://github.com/ghoshnirmalya) and the developer experience is really good. It has helped me build prototypes and products much faster.

I've created a [boilerplate](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate) so that you can get up and running with [Strapi](http://strapi.io/), [Next.js](https://nextjs.org/) and [Apollo](https://www.apollographql.com/) quickly. Check out the project on [Github](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate).

<a
href="https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate"
target="\_blank"

> <img

    src="https://user-images.githubusercontent.com/6391763/90599044-ca070300-e211-11ea-8b8a-89354dd30bd5.png"
    alt="Logo"

/>
</a>

[NextAuth](https://next-auth.js.org/) is a library for building authentication in a [Next.js](https://nextjs.org/) application. It's flexible, secure and easy to use.

The application that we'll be building is hosted on [Vercel](https://nextjs-strapi-boilerplate.vercel.app/) and the code is available on [Github](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate).

## Pre-requisites

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [Docker](https://www.docker.com/)

## Cloning our repository

Let's get started by cloning the repository that we'll be working on. We can clone our repository using the following command:

```bash
git clone https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate
```

## Installing dependencies for the Next.js application

We can install all the necessary dependencies by running the following command:

```bash
cd frontend && yarn install
```

## Copying the environment variables

We can create a .env file and copy the contents from .env.example which is present in the frontend directory. The following credentials are necessary for authentication:

```yaml:frontend/.env
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_DATABASE_URL=postgres://strapi:strapi@localhost:5432/strapi?synchronize=true
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

## Creating and copying the Google client credentials

We can create a new [Google OAuth Client](https://console.developers.google.com/apis/credentials/oauthclient) and copy the credentials (Client ID and Client Secret) in your .env file.

1. Create a new **OAuth client ID**.
2. Choose **Web application** as the **Application Type**.
3. Add the following **Authorized redirect URIs**:

```yaml
http://localhost:3000/api/auth/callback/google
http://localhost:1337/connect/google/callback
```

![Authorized redirect URIs](/images/content/authentication-in-next-js-with-strapi-and-next-auth/1.png)

## Starting the frontend application

From the frontend directory, we can run the following command to start our Next.js application:

```bash
yarn dev
```

## Starting our Strapi application

We can go inside the directory of the backend package on another terminal window and start docker compose:

```bash
cd backend && docker-compose up
```

> We need to start Docker and then run the above command which will change the current directory to the backend package’s directory and then start the backend package. If everything goes well, it’ll be up and running on http://localhost:1337/graphql.

## Configuring the Google provider in the Strapi admin panel

In the Strapi admin panel, we need to add the Google OAuth Client credentials and enable the **Google provider**.

![Google provider configuration in the Strapi admin panel](/images/content/authentication-in-next-js-with-strapi-and-next-auth/2.png)

## Configuring NextAuth with our Next.js application

All the configurations related to NextAuth is present on the [[...nextauth.ts]](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate/blob/master/frontend/pages/api/auth/%5B...nextauth%5D.ts) file. We can use the following NextAuth options to use NextAuth with Strapi:

```js:frontend/pages/api/auth/[...nextauth].ts
const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  debug: true,
  callbacks: {
    session: async (session: ISession, user: IUser) => {
      session.jwt = user.jwt;
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token: iToken, user: IUser, account: IAccount) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
        );

        const data = await response.json();

        token.jwt = data.jwt;
        token.id = data.user.id;
      }

      return Promise.resolve(token);
    },
  },
};
```

In the [NextAuth callback](https://next-auth.js.org/configuration/options#callbacks) function, we're calling the [Strapi Authentication](https://strapi.io/documentation/v3.x/plugins/users-permissions.html#authentication) API endpoint. We're storing the `JWT` and `user.id` from data that the Strapi API sends us. In this way, we can understand which user is currently authenticated.

## Getting session details for authenticated users

We can get the details of the authenticated users from the [`getSession`](https://next-auth.js.org/getting-started/client#getsession) function of NextAuth. If the `getSession` function doesn't return us any details, then we can assume that the user is [not authenticated](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate/blob/master/frontend/pages/feeds.tsx#L12-L14).

## Conclusion

In this tutorial, we understood how we can implement authentication in a Next.js application using Strapi and NextAuth. I've created a [boilerplate](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate) so that you can get up and running with Strapi, Next.js and Apollo quickly. Check out the project on [Github](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate). Documentation of this project is available [here](/guides/nextjs-strapi-boilerplate).

<a
href="https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate"
target="\_blank"

> <img

    src="https://user-images.githubusercontent.com/6391763/90599044-ca070300-e211-11ea-8b8a-89354dd30bd5.png"
    alt="Logo"

/>
</a>
