---
title: Microfrontends and Hype-Driven Development - "There are other ways to hurt yourself"
date: 2024-09-22
abstract: 'Are you sure you need microfrontends for a particular project, or do you just want to use it because you went to a conference and found it really cool?
Be careful with your decision. Your little experiment could potentially cost you your sanity, and lots of money to your employer.'
tags:
  - misc
---

## 'there are other ways to hurt yourself': https://www.youtube.com/shorts/hJX1XWzzmNA


quote from Martin Fowler's article on microfrontends: // https://martinfowler.com/articles/micro-frontends.html

"In a nutshell
In short, micro frontends are all about slicing up big and scary things into smaller, more manageable pieces, and then being explicit about the dependencies between them. Our technology choices, our codebases, our teams, and our release processes should all be able to operate and evolve independently of each other, without excessive coordination."

Now, I want you to focus on the phrase, "Our technology choices, our codebases, our teams, and our release processes should all be able to operate and evolve independently of each other, without excessive coordination.", and ask yourself:


WHAT IF WE DID THE EXACT OPPOSITE?????? What if the one thing that makes microfrontends seem like a good idea, that is, working independendly, was thrown out the trash?

---

in-house design system
2 separate teams using said design system, while a third team (ecommerce team) used their own, so bundle sizes be damned
due to miss-matching versions of the design system (new change of team A would break stuff on team B's app), we would get:
cross-team dependencies!!! and they don't end there!
the microfrontends had to constantly communicate with each other. team A had an app that was a "wrapper app" in a nutshell. team B's app lived inside team A's app.
in order to proceed to checkout, team A's app had to collect some data from team B's app, and they never really knew what they wanted. also no documentation
for anything, of course! documentation is for sissies...

so looong meetings with the both the whole team A and team B (and their product owners as well, to add some much needed icing on this diarrea cake).