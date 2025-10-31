
## About

The "Loading and Control" API is a micro-API definition outlining a boundary between a web game and the page on which it is embedded. Loading & Control is shortened to 'colo'.

## Getting started

When a game that uses the 'colo' API is uploaded to a portal which supports the 'colo' API, all game loading and control management is automatically handled. Below are two guides for adding supporting for 'colo' from either side – the game side and the portal side.

### Using 'colo' in your game, as a game developer

We recommend including the colo client SDK to bootstrap your game with a proxy messaging relayer. Its purpose is to ensure all initial method calls to the colo API are automatically forwarded to the game portal even in the case of race conditions between the client JS and portal JS loading on the given page.

#### Client SDK via script tag

```<script src="./colo-sdk.js"></script>```

#### Client SDK via NPM

```npm install --save-dev colo-sdk```

#### Calling the API

???

### Supporting 'colo' on your web game portal

???

## Basic API startup usage from game side

???

## Full API definition

???

## Test files

???

## Why? 

In the industry of web games, there are many different web game portals which game developers distribute their games across. While these game portals all share common design patterns in their SDKs, the game developers lack a common/unified API pattern that they can target to support the various portals. Instead, developers are often forced to write their own libraries to aggregate the management of the portal’s SDKs.

We propose that a minimum viable API could be defined and aligned between the major web game portals to simplify the lives of game developers, game engines and game portals.

The API is designed to properly sequence the loading and startup of the game with other elements on the page; and move all monetisation logic from the game into the code on the page around the game. By decoupling and standardising this integration point, we aim to reduce the pain developers experience moving their games between distribution surfaces, and monetisation products.
