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
Axios is a battle-tested library which I have used on many occasions. However Unsplash provides their own JS library for dealing with the API. Adding a library adds weight to an application, so I'm not always in favor. But this small app does not need to do any other API requests where we could leverage axios, so using just unsplash-js makes sense given the better developer experience (typechecking and so on).

### Design decisions

#### react-router
I decided to add a simple router using react-router-dom, in order to add /search and /favorites. I also could have used a simple button switch in combination with setState. However, if the user refreshes the page while they are viewing their favorites, they are redirected to the Search page leading to a bad user experience. Therefore, using a router made more sense.

### Implementation decisions

#### react-router's NavLink
While I first worked with useLocation() and the classnames library in order to display classes when a certain navigation route is active, I soon discovered the [NavLink](https://reactrouter.com/web/api/NavLink) component which does this automatically.

### Routes

#### /
#### /search
Main Search page

#### /favorites
Favorites page which displays a collection of lists, stacked vertically.

Every list is a simple H1 and paragraph tag, which can be edited by clicking the small pencil next to it. Every list also contains chevron which can be clicked on to show/hide its associated images.


