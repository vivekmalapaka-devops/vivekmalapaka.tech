---
title: The Claude Code leak
date: 2026-04-05
updated: 2026-04-05
---

This week has been wild. Claude Code's source got leaked and the entire internet is talking about it.

It happened because a `.map` file got pushed into a release — what Anthropic called a "human error." For the unfamiliar: when JavaScript ships to production, it gets minified — whitespace stripped, variables renamed to single letters, multiple files crushed into one. Faster to load, impossible to read. A source map (`.map` file) is the Rosetta Stone that translates the minified mess back to the original source. It tells the browser: "line 1, column 4823 in the minified file is actually line 47 of `src/components/Auth.tsx`."

Source maps exist so developers can debug production issues without losing their minds. But ship one to production and suddenly anyone with DevTools can see your entire codebase — file structure, variable names, comments, business logic, all of it. Minification isn't security, but it's a layer of obscurity that `.map` files completely undo.

The fix is simple — add `*.map` to your `.gitignore` or strip them from your build pipeline before deploying. One line. That's all it takes. And yet.

It makes me wonder how many other companies are sitting on the same mistake. How many production bundles right now have `.map` files quietly serving up their internals to anyone curious enough to check? A good `.gitignore` isn't glamorous, but it might be the most underrated line of defense in shipping software.

The entire internet is dissecting the code now, trying to understand how Claude Code actually works under the hood. Which raises an interesting question: when AI can write and audit code, will cybersecurity become more important or less? My gut says more — because the attack surface only grows.

But honestly, my favourite thing about the leak? Their loading spinner messages. I assumed they were AI-generated. Turns out it's just a file with 187 hardcoded words.
