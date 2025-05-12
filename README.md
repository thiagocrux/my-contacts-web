# MyContacts (Web)

Web client of the MyContacts, a contact agenda app.

## Technologies

These are some of the tecnologies used in this project:

- `commitlint`: A tool that checks your commits and ensures consistency in version control.
- `eslint`: A linting tool for JavaScript/TypeScript code.
- `husky`: A tool for adding Git hooks to automate tasks like linting, testing, or commits in JavaScript/Node.js projects.
- `lint-staged`: Runs linters on Git staged files.
- `prettier`: A code formatter.
- `react`: A JavaScript library for building user interfaces or UI components.
- `styled-components`: A library for React and React Native that allows you to use component-level styles in your application.
- `typescript`: A superset of JavaScript that introduces optional static typing, interfaces, enums, and other language features.

_For more information about other dependencies, see the `package.json` file._

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thiagocrux/my-contacts-web.git
```

2. Browse to the project folder:

```bash
cd my-contacts-web
```

3. Install dependencies:

```
pnpm install
```

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode, enabling faster builds and live-reloading.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Compiles the application for production.

  ```bash
  pnpm build
  ```

- #### `preview`

  Start the server for a local preview of the production build.

  ```bash
  pnpm preview
  ```

### Code quality

- #### `lint`

  Analyzes your codebase for potential errors and style violations using `eslint`.

  ```bash
  pnpm lint
  ```

## Related links

- [JStack](https://app.jstack.com.br/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
