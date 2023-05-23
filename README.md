## ✨ Optimistic updates technique

This repo is a demo of the optimistic updates technique. It's a technique that allows you to update the UI before the server responds to the request. This technique is useful when you want to improve the user experience by making the UI feel faster.

This demo uses React, but the technique isn't related to any library/framework and can be implemented even in vanilla JS.

This repo has been made as a companion to the article TODO:: link.

### 🏗️ Project overview

Two main components are:
* `./src/examples/bad` - a component that uses the "standard" approach to update the UI
* `./src/examples/good` - a component that uses the optimistic updates technique

App uses [MSW](https://mswjs.io/) to mock API calls. See `./src/mocks` for more details.

### ⚙️ How to run

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the app locally

### 🔍 Live demo

TODO:: add link to demo