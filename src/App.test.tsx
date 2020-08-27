import { AppState, reducer } from "./App";

test("Can add a list", () => {
  const state: AppState = {
    lists: [],
  };

  const newState: AppState = reducer(state, {
    type: "add-list",
    list: {
      title: "Cute dogs",
      description: "Pics of dogs I adore",
      images: [],
    },
  });

  expect(newState).toMatchSnapshot();
});

test("Can add an image to a list", () => {
  const state: AppState = {
    lists: [
      {
        title: "Cute dogs",
        description: "Pics of dogs I adore",
        images: [],
      },
    ],
  };

  const newState: AppState = reducer(state, {
    type: "add-image-to-list",
    listTitle: "Cute dogs",
    image: {
      id: "U6nlG0Y5sfs",
      links: {
        download: "https://example.com/",
      },
      urls: {
        thumb:
          "https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE2MDUxMn0",
      },
      user: {
        name: "Hannah Lim",
        portfolio_url: "https://hannahlim213.github.io/portfolio-page/",
      },
    },
  });

  expect(newState).toMatchSnapshot();
});

test("Can remove an image from a list", () => {
  const state: AppState = {
    lists: [
      {
        title: "Cute dogs",
        description: "Pics of dogs I adore",
        images: [{
          id: "U6nlG0Y5sfs",
          links: {
            download: "https://example.com/",
          },
          urls: {
            thumb:
              "https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE2MDUxMn0",
          },
          user: {
            name: "Hannah Lim",
            portfolio_url: "https://hannahlim213.github.io/portfolio-page/",
          },
        }],
      },
    ],
  };

  const newState: AppState = reducer(state, {
    type: "remove-image-from-list",
    listTitle: "Cute dogs",
    imageId:  "U6nlG0Y5sfs"
  });

  expect(newState).toMatchSnapshot();
});


test("Can change the title of a list", () => {
  const state: AppState = {
    lists: [
      {
        title: "Cute dogs",
        description: "Pics of dogs I adore",
        images: []
      },
    ],
  };

  const newState: AppState = reducer(state, {
    type: "change-list-title",
    listTitle: "Cute dogs",
    newListTitle:  "Super cute dogs"
  });

  expect(newState).toMatchSnapshot();
});


test("Can change the description of a list", () => {
  const state: AppState = {
    lists: [
      {
        title: "Cute dogs",
        description: "Pics of dogs I adore",
        images: []
      },
    ],
  };

  const newState: AppState = reducer(state, {
    type: "change-list-description",
    listTitle: "Cute dogs",
    newListDescription:  "Pics of cute dogs I adore",
  });

  expect(newState).toMatchSnapshot();
});
