---
date: "2020-08-20"
title: "How to use Next.js with Strapi and Apollo"
category: "Tutorial"
tags: ["react.js", "next.js", "cms"]
description: "Learn how to use Next.js with Strapi and Apollo."
layout: "../../layouts/Article.astro"
---

In this tutorial, we'll learn how we can use Next.js with Strapi and Apollo.

## Table of Contents

## Introduction

In [one of my previous articles](/articles/2020-01-01-how-to-automate-the-backend-stuffs-with-open-source-headless-cms-strapi-and-docker), I've written about how to get started using Strapi. In this post, we'll be building a newsfeed application using Next.js. The APIs necessary for the Next.js front-end application will be powered by Strapi. We'll also use [Apollo](https://www.apollographql.com/) as the GraphQL client.

The whole code for the application that we're going to build is available on [Github](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate).

Before we proceed, it's better if you have some idea about the following technologies:

1. [Next.js](https://nextjs.org/)
2. [Apollo](https://www.apollographql.com/)
3. [Strapi](http://strapi.io/)
4. [TypeScript](https://www.typescriptlang.org/)

I've been using [Strapi](http://strapi.io/) for quite some time now and it's very easy to get up and running with it within a very short amount of time. It gives us a lot of [features](https://strapi.io/features) out of the box:

1. **Single types**: Create one-off pages that have unique content structure
2. **Customizable API**: With Strapi, you can just hop in your code editor and edit the code to fit your API to your needs.
3. **Integrations**: Strapi supports integrations with Cloudinary, SendGrid, Algolia and others.
4. **Editor interface**: The editor allows you to pull in dynamic blocks of content.
5. **Authentication**: Secure and authorize access to your API with JWT or providers.

[Next.js](https://nextjs.org/) is a very popular [React](https://reactjs.org/) framework. It offers a lot of features like:

1. **Zero config**: Automatic compilation and bundling. Optimized for production from the start.
2. **Hybrid: SSG and SSR**: Pre-render pages at build time (SSG) or request time (SSR) in a single project.
3. **Incremental Static Generation**: Add and update statically pre-rendered pages incrementally after build time.
4. **TypeScript Support**: Automatic TypeScript configuration and compilation.
5. **Fast Refresh**: Automatic TypeScript configuration and compilation.

[Apollo](https://www.apollographql.com/) is the industry-standard GraphQL implementation, providing the data graph layer that connects modern apps to the cloud. It offers a lot of features like:

1. **Declarative data fetching**: Write a query and receive data without manually tracking loading, error, or network states.
2. **Reactive data cache**: Cut down on network traffic and keep data consistent throughout your application with Apollo Client’s normalized reactive data cache.
3. **Excellent dev experience**: Enjoy cross stack type safety, runtime cache inspectors, and full featured editor integrations to keep you writing applications faster.
4. **Compatible and adoptable**: Use any build setup and any GraphQL API. Drop Apollo Client into any app seamlessly without re-architecting your entire data strategy.
5. **Designed for modern UIs**: Take advantage of modern UI architectures in the web, iOS, and Android ecosystems.

I've created a [boilerplate](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate) so that you can get up and running with [Strapi](http://strapi.io/), [Next.js](https://nextjs.org/) and [Apollo](https://www.apollographql.com/) quickly. Check out the project on [Github](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate).

<a
href="https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate"
target="\_blank"

> <img

    src="https://user-images.githubusercontent.com/6391763/90599044-ca070300-e211-11ea-8b8a-89354dd30bd5.png"
    alt="Logo"

/>
</a>

## Creating a Strapi application using Docker

**Step 1:** We need to create a directory named `backend` and then download the [docker-compose.yml](https://github.com/strapi/strapi-docker/blob/master/examples/postgresql/docker-compose.yml) file from the [strapi-docker repository](https://github.com/strapi/strapi-docker). Now, we need to start Docker. Once Docker is up and running, we can go inside the `backend` directory and run our Strapi container:

```bash
cd backend && docker-compose up
```

This will pull **postgres** and **strapi/strapi** images from [Docker Hub](https://hub.docker.com/). So, it might take some time for this operation to complete. You can refer to this [article](https://nirmalyaghosh.com/articles/2020-01-01-how-to-automate-the-backend-stuffs-with-open-source-headless-cms-strapi-and-docker#installing-strapi) for more details regarding how to install Strapi using Docker.

**Step 2:** We'll have to [create our first administrator profile](https://nirmalyaghosh.com/articles/2020-01-01-how-to-automate-the-backend-stuffs-with-open-source-headless-cms-strapi-and-docker#creating-our-first-administrator-profile). Once, our administrator profile is setup, we should be able to log into the admin panel of Strapi.

**Step 3:** We'll have to [add a new content-type](https://nirmalyaghosh.com/articles/2020-01-01-how-to-automate-the-backend-stuffs-with-open-source-headless-cms-strapi-and-docker#adding-a-new-content-type).

**Step 4:** Install the [Strapi GraphQL plugin](https://strapi.io/documentation/3.0.0-beta.x/plugins/graphql.html).

> I've already covered most about getting started with Strapi. We're adding links to a previous article in order to keep this tutorial short.

## Creating a Next.js application

We can create a new Next.js app using create-next-app, which sets up everything automatically for us:

```bash
yarn create next-app
```

> The above command will install all the necessary packages as well a create a new directory based on the application name (which you entered during the setup process).

## Integrating the Next.js application with Apollo

In order to integrate Apollo with Next.js, we need to add the required dependencies first:

```bash
yarn add  @apollo/client graphql
```

Next, we need to create a new file `lib/with-graphql.js` with the following content:

```js:lib/with-graphql.js
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const WithGraphQL = ({ children }) => {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithGraphQL;
```

Now, we can import this file and wrap any Next.js page where we want to use GraphQL:

```js:pages/index.js
import React from "react";
import Page from "components/pages/index";
import WithGraphQL from "lib/with-graphql";

const IndexPage = () => {
  return (
    <WithGraphQL>
      <Page />
    </WithGraphQL>
  );
};

export default IndexPage;
```

Now, we can use GraphQL queries and mutations in the `components/pages/index.js` file:

```js:components/pages/index.js
import { gql, useQuery } from "@apollo/client";
import { Box, Stack } from "@chakra-ui/core";
import Feed from "components/pages/index/feed";
import React from "react";

const feedsQuery = gql`
  query fetchFeeds {
    feeds {
      id
      created_at
      body
      author {
        id
        username
      }
    }
  }
`;

const FeedsPageComponent = () => {
  const { loading, error, data } = useQuery(feedsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Stack spacing={8}>
      {data.feeds.map(feed => {
        return (
          <Box key={feed.id}>
            <Feed feed={feed} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default FeedsPageComponent;
```

## Conclusion

In this tutorial, we've learnt how we can integrate Apollo with Next.js and use it with Strapi. I've created a [boilerplate](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate) so that you can get up and running with Strapi, Next.js and Apollo quickly. Check out the project on [Github](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate). Documentation of this project is available [here](/guides/nextjs-strapi-boilerplate).

<a
href="https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate"
target="\_blank"

> <img

    src="https://user-images.githubusercontent.com/6391763/90599044-ca070300-e211-11ea-8b8a-89354dd30bd5.png"
    alt="Logo"

/>
</a>
