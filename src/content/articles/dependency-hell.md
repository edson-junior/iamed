---
title: 'Dependency hell: Do you really need to install that npm package? Think again!'
date: 2024-09-22
abstract: 'Careful following tutorials or just copy/pasting stuff from stack overflow. you might end up with an unnecessarilly huge bundle'
tags:
  - misc
---

the other day I was looking or a tutorial on how to create an rss feed for a project of mine. I found this article that tells me to download
an npm package called feed.js. I did follow the tutorial but then, after reading the code a little bit, I realized I could've built the RSS feed
just fine with some regular-degular xml code and good ol' string interpolation! I totally dodged a bullet there by not installing a dependency and all its bratty little dependency children.
this reminds me a lot about a quote by Joe Armstrong, where he explains the "gorilla-banana problem".

“… You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. “