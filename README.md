# Reflex-Lab

A reaction time tester inspired by the "lights out" reaction tests Formula 1 drivers do at the start of a race :)
Wait for the panel to turn green, then click (or press SPACE) as fast as you can!

> This project used AI for improvement suggestions, debugging help, and quick fixes along the way.

<img src="assets/sc1.png">

## Overview

ReflexLab is my second HTML project. The first one leaned a lot on visual design I drew by hand, with fairly simple functionality behind it. 
This time I wanted to build something from scratch myself and actually focus on the logic, without worrying too much about how it looks (CSS still isn't reaaaally my thing..)

I like simple games that are easy to pick up, and I'm a big F1 fan, so this felt like a fun, small project to learn from

<img src="assets/sc2.png">

## How it works

The game works with three simples states: `idle`, `armed`, and `ready`.

1. **Idle** - the panel is waiting for you to click (ot hit space) to start a round.
2. **Armed** - the panel turns red and waits a random amount of time (1 to 4 seconds) before going green. The randomness stops you from just guessing the timing. If you click too soon, it's a false start.
3. **Ready** - the panel turns green and the exact moment gets saved with `performance.now()`. Click now, and it works out your reaction time by comparing that saved moment to when you actually clicked.

One function, `startOrReact()`, handles all of this: it checks what state you're in and decides what a click should mean (start the round, catch a false start, or log a real reaction time)

Every attempt gets added to a little history list (last 5 only) and color coded depending on how fast it was.

<img src="assets/sc3.png">
<img src="assets/sc4.png">


## How to run It

Live version: [reflexlab.devlucas.page](https://reflexlab.devlucas.page/)

Or run it locally :)

1. Clone or download this repository
2. Open `index.html` in a browser

No built steps, dependencies or installation required

## Other

**Fonts:** Space Grotesk, IBM Plex Mono, Work Sans - all via Google Fonts. (https://fonts.google.com/specimen/Space+Grotesk) (https://fonts.google.com/specimen/IBM+Plex+Mono) (https://fonts.google.com/specimen/Work+Sans)

Built with HTML, CSS and JavaScript

References: W3Schools, StackOverflow


