# Source code for [SophiaCeleste.com](https://www.sophiaceleste.com)

Welcome to the README for my personal website, [SophiaCeleste.com](https://www.sophiaceleste.com)!
This document is intended for anyone interested in digging around in the code and/or modifying it for your own use. It assumes some knowledge of Git, JSON, HTML, and Javascript. 

The document includes:
- A Quick Start Guide for setting up my website on your local machine
- An overview of the site architecture
- Schema for individual projects
- How to add content to an existing portfolio page
- ~~How to add a new page~~


## Quick Start Guide

1. Clone this repo into the desired directory on your local machine:
```
$ git clone git@github.com:sophiavanvalkenburg/sophiavanvalkenburg.github.io.git
```
2. Install [EJS](https://ejs.co/) and [eleventy.js](https://www.11ty.dev/) using NPM:

**Note: This code currently uses eleventy.js v0.12.1. It does not work using v1.0.0.**
```
$ npm init -y
$ npm install ejs
$ npm install --save-dev @11ty/eleventy@0.12.1
```

3. Generate and serve the static site:
```
npx @11ty/eleventy --serve
```
4. View the site locally at the port specified in the output of the above command (as of writing, the default is [http://localhost:8080](http://localhost:8080))


## Overview of Site Structure

This repo uses [eleventy.js](https://www.11ty.dev/) to generate a static HTML site. For detailed information on how eleventy.js works, you can check out the previous link. Below is a general overview of this repo.

### Portfolio Pages

The portfolio page displays a list of thumbnail links, one for each individual project included in the portfolio. Most of the top-level directories in this repo are portfolio pages.

Some examples of portfolio pages:
- [illustration-color](https://sophiaceleste.com/illustration-color/)
- [illustration-bw](https://sophiaceleste.com/illustration-bw/)
- [interactives](https://sophiaceleste.com/interactives/)

### Project Pages

The project page displays information for a specific project. The layout of the page may be different depending on the type of project. For example, an illustration project would display differently from an interactive project.

Some examples of project pages:
- [October is the New December](https://sophiaceleste.com/project/october-new-december/)
- [Halloween Haus](https://sophiaceleste.com/project/halloween-haus/)
- [Funkpeter Beta MV](https://sophiaceleste.com/project/funkpeter-beta/)


### Data files

The top-level `_data` folder is a special directory that eleventy.js processes. It contains two files:
- `projects.json`: metadata for the individual project listing. For example, the data for a single illustration would be an entry in this file. See the **Project Schema** section below for details.
- `maps.json`: mapping between project category as described in the schema, and the specific portfolio it belongs to. There is a many-to-one relationship between project categories and portfolio; for example, both comics and animation are part of the same portfolio.

### Layout files

The top-level `_includes` folder is another special directory used by eleventy.js. It is where eleventy looks for [EJS](https://ejs.co/) layout files to render individual pages. The same layout file may be used to render multiple pages with different data. 

Below is a non-exhaustive list of some commonly used layouts:
- `_base-layout.ejs`: wrapper around all pages on the site
- `_featured-layout.ejs`: used for the homepage
- `_portfolio-layout.ejs`: used for all the portfolio pages
- `_project-preview-layout.ejs`: used for project pages, except custom pages
- `projects/`: directory that contains custom project pages


## Project Schema

This section explains the schema for entries in the `_data/_projects.json` file. Each entry represents one individual project. The projects will be displayed in the order in which they are listed. 

### Required Attributes

The following attributes are required for all projects:
- `slug`: A unique identifier used to generate the URL of the project.
- `title`: The name of the project.
- `description`: The description of the project. HTML markup is permitted.
- `previewImgUrl`: The link to the project thumbnail (may be jpg, png, gif, mp4).
- `category`: The type of project (e.g. color-illustration or animation).

### Static Images

For static images, such as illustrations, the following top-level attribute is required:
- `imgUrl`: A link to the full-resolution. 

Here is an example of a static image project: 
```
{
    "slug": "october-new-december",
    "imgUrl": "https://s3.amazonaws.com/sophiaceleste.com/img/illustration/oct-new-dec.jpg",
    "previewImgUrl": "https://s3.amazonaws.com/sophiaceleste.com/img/illustration/oct-new-dec-sm.jpg",
    "title": "October is the New December",
    "description": "Poster created for <a href='https://www.wordupbooks.com/'>Word Up Community Bookshop</a> to encourage early holiday shopping. I created both the illustration & graphic design.",
    "category": "color-illustration"
}
```


### Video

Video projects require multiple attributes, so they are grouped underneath the `projectPreview` collection. In order to use the default project layout for video, it must be hosted on [Vimeo](https://vimeo.com/).

`projectPreview` for video must include the following:
- `type`: Always set to `"video"`.
- `videoUrl`: The link to the video on vimeo, in the format `https://player.vimeo.com/video/[video_id]`.
- (optional) `videoLoop`:  A boolean value indicating whether the video should loop automatically. Defaults to false.
- (optional) `videoAutoPlay`:  A boolean value indicating whether the video should automatically start playing on page load. Defaults to false.

Here is an example of a video project:
```
{
    "slug": "lil-lobster-dude",
    "title": "Lil Lobster Dude",
    "description": "A little lobster created in Illustrator and animated in After Effects.",
    "previewImgUrl": "https://s3.amazonaws.com/sophiaceleste.com/img/animation/lobster-sm.mp4",
    "category": "color-illustration",
    "projectPreview": {
      "type": "video",
      "videoLoop": true,
      "videoAutoPlay": true,
      "videoUrl": "https://player.vimeo.com/video/642479929"
    }
}
```

### Gallery

Gallery projects involve a collection of images related to a specific theme. For example, [Inktober 2020](https://sophiaceleste.com/project/inktober-2020/) includes all the illustrations I created for an October 2020 drawing challenge.

Gallery projects also require multiple attributes and are grouped underneath the `projectPreview` collection. The gallery view assumes that all images are hosted within the same directory.

`projectPreview` for galleries requires the following:
- `type`: Always set to `"gallery"`.
- `galleryUrl`: A link to the directory that holds the individual gallery images.
- `gallery`: A list of gallery objects. Each object should include the following attributes.
  - `file`: The filename of a gallery image.
  - `preview`: The filename of a gallery image thumbnail.
  - (optional) `title`: The name of a gallery image.
  
Here is an example of a gallery project:
```
{
    "slug": "mole-cricket",
    "title": "Mole Cricket",
    "description": "Detailed drawing of a mole cricket in various styles.",
    "previewImgUrl": "https://s3.amazonaws.com/sophiaceleste.com/img/illustration/mole-cricket-sm.jpg",
    "category": "archive",
    "projectPreview": {
      "type": "gallery",
      "galleryUrl": "https://s3.amazonaws.com/sophiaceleste.com/img/projects/mole-cricket/",
      "gallery" : [
        {
          "file": "mole-cricket-pencil.jpg",
          "preview": "mole-cricket-pencil.jpg"
        },
        {
          "file": "mole-cricket-watercolor.jpg",
          "preview": "mole-cricket-watercolor.jpg"
        },
        {
          "file": "mole-cricket-ink.jpg",
          "preview": "mole-cricket-ink.jpg"
        },
        {
          "file": "mole-cricket-coloringbook.jpg",
          "preview": "mole-cricket-coloringbook.jpg"
        }
      ]
    }
}
```

### External

If your project is hosted at a different website, you may use the external project schema. For example, this could be used for an interactive or a GitHub project. Attributes for external projects are also added underneath the `projectPreview` collection.

`projectPreview` for external projects must include the following:
- `type`: Always set to `external`.
- `previewUrl`: A thumbnail for the external project. May be the same as `previewImgUrl` above.
- (optional) `codeUrl`:  A link to the source code, if it is a coding project.
- (optional) `projectUrl`:  A link to the hosted project, if it is available online.

Here is an example of an external project:
```
{
    "slug": "halloween-haus",
    "title": "Halloween Haus",
    "description": "Many moons ago, 28 souls gathered at a haunted haus on all hallow's eve, unaware of the dark secrets lurking in their midst ... Based on true events! Do you join them on their day of spooky revelry? Play now, if you dare ...",
    "previewImgUrl": "https://s3.amazonaws.com/sophiaceleste.com/img/interactives/halloween-haus.gif",
    "category": "interactive",
    "projectPreview": {
      "type": "external",
      "previewUrl": "https://s3.amazonaws.com/sophiaceleste.com/img/interactives/halloween-haus.gif",
      "projectUrl": "https://sophiaceleste.com/halloween-haus/",
      "codeUrl": "https://github.com/sophiavanvalkenburg/halloween-haus/"
    }
}
```

### Custom

If you would like to create your own template for a project, you may add a `projectPreview` collection with the following attribute:
- `template`: The name of the `.ejs` layout file, relative to the `_includes` directory.

Here is an example of a custom project:
```
{
    "slug": "amaryllis-blooming",
    "title": "Amaryllis Blooming",
    "description": "Short animation of an amaryllis blooming, in watercolor",
    "previewImgUrl": "https://s3.amazonaws.com/sophiaceleste.com/img/animation/amaryllis.png",
    "category": "animation",
    "projectPreview": {
      "template": "projects/_amaryllis-blooming.ejs"
    }
}
```


## Adding A New Project

Adding a new project to an existing portfolio is easy once you are familiar with the project schema described above. Simply use the following steps:

1. Open the `_data/projects.json` file.
2. Pick the portfolio that will contain your project. To see the list of currently used portfolio pages, view the right side of `_data/maps.json`.
3. Add a new object to the list in `_data/projects.json`. The order of the objects in this file determines the order they will be displayed in the portfolio.
4. Fill in the top-level required attributes described in the section above. To determine what to put in the `category` field, use the left side of `_data/maps.json` corresponding to the new project's portfolio. 
5. Fill in the rest of the attributes depending on the schema type, as described above, that makes the most sense for your project:
    - static image
    - video
    - gallery
    - external
    - custom
6. Save the `_data/projects.json` file.
7. Re-generate the static webpages and serve:
```
npx @11ty/eleventy --serve
``` 
