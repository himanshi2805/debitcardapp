# Debit Card App

The project includes an optimized code for  mobile applications through separation of concerns between the UI and business logic. It contains redux, saga, Typescript, context, components, theme, tabs and stack navigation.


### Requirements

1. Node.js (latest stable version)
2. VSCode or any text editor with ESLint plugin
3. Git (If you're on Mac, this is included after installing XCode)
4. Android Studio
5. XCode

<br/>

- Install `eslint`, `prettier` and `editor config` plugins into your IDE
- Ensure your machine has the [React Native dependencies installed](https://facebook.github.io/react-native/docs/getting-started)


### Getting Started
```bash
# Install dependencies
$ yarn install && npx pod-install
```

### iOS
```bash
# Start in the iOS Simulator
$ yarn ios
```

### Android
```bash
# Start in the Android Emulator
$ yarn android
```

<br/>

### Directory Structure
```
root
├── __tests__
├── android
├── ios
└── src
    └── assets
    |   ├── images
    └── components
    └── config
    └── core-ui
    |   ├──style
    |   ├──theme
    └── helpers
    └── navigation
    └── redux
    |   ├──actions
    |   ├──reducers
    |   ├──sagas
    |   ├──services
    └── screens
...
```

<br/>

### Coding style guide
This project is using `ESLint` to ensure code quality, and lint error free.

This project have simplify the require/import paths using `babel-plugin-module-resolver`. For example, instead of using complex relative paths like ./src/theme/images, write @src/theme. It will allow you to work faster since you won't need to calculate how many levels of directory you have to go up before accessing the file.