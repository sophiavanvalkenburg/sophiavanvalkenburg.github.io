# Source code for my personal website, [SophiaCeleste.com](https://www.sophiaceleste.com)

This document includes:
- a Quick Start Guide for setting up my website on your local machine
- ~~how to add a content to an existing page~~
- ~~how to add a new page~~


## Quick Start Guide

1. Clone this repo into the desired directory on your local machine:
```
$ git clone git@github.com:sophiavanvalkenburg/sophiavanvalkenburg.github.io.git
```
2. Install [EJS](https://ejs.co/) and [eleventy.js](https://www.11ty.dev/):

**Note: This code currently uses eleventy.js v0.12.1. It does not work using v1.0.0.**
```
$ npm init -y
$ npm install ejs
$ npm install --save-dev @11ty/eleventy@0.12.1
```


3. Generate the static site:
```
npx @11ty/eleventy --serve
```
4. View the site locally at the port specified in the output of the above command (as of writing, the default is `localhost:8080`) 
