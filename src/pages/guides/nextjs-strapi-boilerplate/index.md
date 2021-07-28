---
date: "2020-08-31"
title: "Strapi Next.js Boilerplate"
category: "boilerplate"
tags: ["next", "strapi"]
description: "Boilerplate for building applications using Strapi and Next.js."
coverImage: "/images/content/nextjs-strapi-boilerplate/strapi-nextjs-boilerplate.png"
githubLink: "https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate"
layout: "../../../layouts/Article.astro"
---

[![Logo](/images/content/nextjs-strapi-boilerplate/strapi-nextjs-boilerplate.png)](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate)

[**Strapi Next.js Boilerplate**](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate) is a boilerplate for building applications using Strapi and Next.js. This boilerplate consists of the following:

1. [**Frontend**](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate/tree/master/frontend): Next.js application
2. [**Backend**](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate/tree/master/backend): Dockerized Strapi application

## Table of Contents

## Overview

This boilerplate is built using the following technologies:

1. [Chakra UI](https://chakra-ui.com/)
2. [Emotion](https://emotion.sh/)
3. [GraphQL](https://graphql.org/)
4. [Apollo](https://www.apollographql.com/)
5. [NextAuth](https://next-auth.js.org/)
6. [TypeScript](https://www.typescriptlang.org/)

It supports GraphQL Query and Mutation out of the box.

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [Docker](https://www.docker.com/)

## Packages

1. [**Frontend**](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate/tree/master/frontend): Next.js application

This application is the primary user-facing application. Once it’s up and running (see Development section), it’s available on http://localhost:3000/.

2. [**Backend**](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate/tree/master/backend): Dockerized Strapi application

[Strapi](https://strapi.io/) is the leading open-source headless CMS. It’s 100% Javascript, fully customizable and developer-first.

## Installation

1. **Clone the application**

```bash
git clone https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate
```

2. **Install necessary dependencies for the frontend application**

```bash
cd frontend && yarn install
```

3. **Create a .env file and copy the contents from .env.example (present in frontend directory)**

```yml:frontend/.env
NEXT_PUBLIC_API_URL=http://localhost:1337/graphql
NEXT_PUBLIC_DATABASE_URL=postgres://strapi:strapi@localhost:5432/strapi
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

We might need to run the following command:

```bash
source .env
```

4. **Create and copy the Google client credentials**

Create a new [Google OAuth Client](https://console.developers.google.com/apis/credentials/oauthclient) and copy the credentials (Client ID and Client Secret) in your .env file.

5. **Start the frontend application**

From the frontend directory, we can run the following command to start our Next.js frontend application:

```bash
yarn dev
```

The above command will start the frontend application on [http://localhost:3000/](http://localhost:3000).

6. **Go inside the directory of the backend package on another terminal window**

```bash
cd packages/backend
```

7. **Start docker-compose**

```bash
docker-compose up
```

We need to start Docker and then run the above command which will change the current directory to the backend package’s directory and then start the backend package. If everything goes well, it’ll be up and running on [http://localhost:1337/v1/graphql](http://localhost:1337/v1/graphql).

8. **Configure Strapi**

a. Allow permissions for all operations on the Feed content-type for Authenticated users.

![Authenticated user role](/images/content/nextjs-strapi-boilerplate/1.png)

![Allow permissions for all operations on the Feed content-type for Authenticated users](/images/content/nextjs-strapi-boilerplate/2.png)

b. Allow permissions for all operations on the Feed content-type for Authenticated users as well.

![Allow permissions for all operations on the Feed content-type for Authenticated users as well](/images/content/nextjs-strapi-boilerplate/3.png)

c. Enable the Google provider.

![Enable the Google provider](/images/content/nextjs-strapi-boilerplate/4.png)

![Enable informations for the Google provider](/images/content/nextjs-strapi-boilerplate/5.png)

d. Click on the "Done" button and now we can log into our Next.js application using our Google account.

## Deployment

1. **Frontend**

Click on the button below to deploy the frontend application on Vercel. You'll need to [sign up for a free Vercel account](https://vercel.com/signup/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fghoshnirmalya%2Fnextjs-strapi-boilerplate%2Ftree%2Fmaster%2Ffrontend&env=NEXT_PUBLIC_API_URL,NEXT_PUBLIC_WS_URL,DATABASE_URL,AUTH_PRIVATE_KEY,EMAIL_SERVER,EMAIL_FROM,NEXTAUTH_URL,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET&project-name=nextjs-strapi-boilerplate&repo-name=nextjs-strapi-boilerplate)

2. **Backend**

We're still working on it.

## Other interesting repositories

1. [Hasura Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate)
2. [Hasura Next.js Trello Clone](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone)
3. [React Search Box](https://github.com/ghoshnirmalya/react-search-box)
4. [LinkedIn Clone using Create React App](https://github.com/ghoshnirmalya/linkedin-clone-react-frontend)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
