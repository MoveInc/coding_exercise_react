# 🐱 atomic-kitten-slider

This repo provides the exercise of building a kitten image slider app.

### Designs

- Clicking the "Kit" button opens the previous [kitten](https://github.move.com/nwu/atomic-kitten-slider/blob/master/src/App.jsx#L6-L12) image
- Clicking the "Kat" button opens the next [kitten](https://github.move.com/nwu/atomic-kitten-slider/blob/master/src/App.jsx#L6-L12) image
- Clicking repeatedly on either "Kit" or "Kat" non-stop will only change the image once (after the clicking stops)

### Prerequisites

Please ensure the local development environment has node `14.x.x`.

```
$ node -v
v14.x.x
```

### Installing ⚙️

Once the repo is cloned, please use [yarn](https://yarnpkg.com/lang/en/docs/install) to install the dependencies.

```
$ yarn
```

### Running 🏃🏻‍♂️

Once the dependencies are installed, please use [yarn](https://yarnpkg.com/lang/en/docs/install) to start the app.

```
$ yarn start
```

### Testing 📝

Please use the following to run the unit tests in the repo.

```
$ yarn test
```

## Dependencies 🥞

- `@testing-library/react@^11`
- `@testing-library/react-hooks@^5`
- `jest@^26`
- `react@^17`
- `react-dom@^17`
- `styled-components@^5`
