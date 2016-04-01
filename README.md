## README

Tastichat is a simple chat application that allows samurai fruits to plot their
revenge.

Demo here: http://tastichat.herokuapp.com

It uses websockets for realtime message updates and is built on the following
technologies:

- Rails 5
- react_on_rails
- React (duh) :-)
- Redux
- react-redux
- ActionCable
- Immutable.js
- Bourbon/Neat

It demonstrates several core tenets of writing maintainable code:

1. Good test coverage
2. Functional programming
3. Immutable data structures

## Installation and run server

1. Run `bundle`
2. Run `foreman start -f Procfile.dev`
3. Visit http://localhost:3000 in your browser
