## Unsplash Search

Search images using Unsplash!

## Live demo

TBD

## Running the app

From the root of the directory, run:
```
yarn
yarn start
```

### Development technologies used

#### TypeScript
I'm a fan of static typing and think using TypeScript saves time in the long run. It especially helps to avoid painful bugs that developers commonly run into by type checking the code.

#### React
I love React and am most comfortable with it. It also stays fresh and keeps delivering new features (React Hooks being recent). I'm also a big fan of JSX and feel that has made my coding life much more productive.

#### Tippy.js
Having used this in previous projects, I'm well aware of its capabilities and shortcomings. It's a great solution for displaying tooltips and has a React wrapper.

#### Tailwind CSS
I love how Tailwind reinvents CSS by using structured class names that mimic common configurations and layouts. It's a lot of fun writing CSS in a flexible yet sustainable way.

#### Local storage
I chose local storage mostly because it's easy and saves development time for a small project like this.

#### unsplash-js
While testing with axios, I discovered Unplash has a helper JS library. So it made sense to use that instead.

### Routes

#### /
#### /search
Main Search page

#### /favorites
Favorites page which displays a collection of lists, stacked vertically.

Every list is a simple H1 and paragraph tag, which can be edited by clicking the small pencil next to it. Every list also contains chevron which can be clicked on to show/hide its associated images.


