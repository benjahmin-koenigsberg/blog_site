# Conscious Readz

A collection of some of my favorite non fiction bookss, thier authors, release dates and summaries.

![Screen Shot 2023-04-26 at 2 19 32 PM](https://user-images.githubusercontent.com/116445988/234668121-deaef342-5aa2-4caa-9f8a-e2d49ed30d81.png)

A live version of the site can be found 

https://blog-site-beta-nine.vercel.app/

## About This Project

This is a project I built follwoing along with Brad Traversy from his Next.js course. The original project is for a blog site.

![Screen Shot 2023-04-26 at 3 00 20 PM](https://user-images.githubusercontent.com/116445988/234676360-fee00bfb-f2bb-4581-83cb-f89ffdfb4a0f.png)

https://www.traversymedia.com/next-js-dev-to-deployment

### Challenges and Lessons

This was a fun project to get more practice using Next.js. I got to learn about using markdowns as a viable data resourece. It was great to get more practice using Tailwind CSS and learn about markdown and marked, a node package to parse markdown. I also got to learn about a node package called husky for cahce dating, writing my own package.json scripts and deploying to vercel

## Tech Stack

* Next.js
* Tailwind CSS
* Markdown
* Vercel

## Getting Started

Clone this repo

Then install the node_modules by running:
```
npm install
```

The open the app on a localhost in your browser
```
npm run dev
```

### To change the content

* Navigate to the posts located in the /posts folder

* Add or edit the exisiting .md files

* Maintain the frontmatter format of the markdowns or app will throw errors
```
---
title: '...'
date: '...'
excerpt: '...'
cover_image: '...'
category: '...'
author: '...'
author_image: '...'
---
```
* You will also need to update the colerKey in the CategoryLabel.js file in the components folder to match your categories

* Upload new images to your dir and update the cover_image and aurhor_image accordingly

## How could this project serve someone?

This site can be used to aggregate your own collection of books, blogs, articles, items, etc... to be shared with others 

## Get in touch

www.benjahminkoenigsberg.com
https://www.linkedin.com/in/benjamin-koenigsberg/
benjahmin.lakin@gmail.com
