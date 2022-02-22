<h1 title="Letmeask" align="center">
  <img alt="Letmeask" src=".github/logo.svg" width="160px">
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features-implementations">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=835AFD&label=created%20at&message=june%202021" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/letmeask?label=updated%20at&labelColor=000000&color=835AFD" alt="Update Date" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=835AFD&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/letmeask?labelColor=000000&color=835AFD" alt="Project License" />
</p>

<p align="center">
  <img src=".github/app-overview.svg" alt="Application Overview" width="100%">
</p>

Application developed during sixth edition of [Next Level Week](https://nextlevelweek.com/), delivered by [RocketSeat](https://rocketseat.com.br/). The objective was to build a frontend React application integrating [Firebase](https://firebase.google.com/) authentication and realtime database to connect content creators and their audience on a platform to exchange questions and answers.The idea was implemented using **Create React App**, but I've already upgrade it to use **Next.js** framework.

[Check out the application running!](https://jlm-letmeask.vercel.app/)

## :trophy: Lessons Learned

- Setting up *Firebase*;
- Adding *Firebase* authentication to a frontend application;
- Add event listeners to fetch realtime data from *Firebase*;

## :rocket: Technologies & Resources

**Frontend:**
- [React.js](https://reactjs.org)
- [Next.js](https://nextjs.org/)

**Frontend/Backend:**
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)

**Development:**
- [Visual Studio Code](https://code.visualstudio.com/)
- Node.js routines with NPM
- TypeScript
- ESlint

## :hammer: Setting up the Environment

Make sure to have **Node.js 14+** and **Yarn** (**NPM** will do the job as well) installed in your machine and its `node` and `npm`/`yarn` shortcuts available through the command line, then use the following command to install dependencies:

```bash
# using Yarn
$ yarn

# using NPM
$ npm install
```

This action should also create a `.env` file in the root of the project. If it was not created, use `.env.example` as reference to create it. In this file, you should add all the metadata to connect to a **Firebase** app ([create one here](https://console.firebase.google.com/))

With the environment variables set, all the other routines can be run:

```bash
$ yarn dev     # run Next development server in port 8080
$ yarn build   # build Next project tp production
$ yarn prod    # run Next server on built files (in port 8080)
```

If using **NPM**, just replace `yarn` by `npm run` on the above commands.

## :zap: Features Implementations

The main idea of the project was developed during the week of the event and the result is the one found in [release v1.0](https://github.com/juliolmuller/letmeask/releases/tag/v1.0). Afterwards, any incoming commits are intended to be incremental updates to improve the application, as proposed at the end of the event.

Besides, base project layout & design is available at **[Figma](https://www.figma.com/file/ATam5KujQTNPhTq87XCXnF/Letmeask-1.0)**.

- [x] ~~Create project using `create-react-app`;~~
- [x] Create project using `create-next-app`;
- [x] And support to TypeScript;
- [x] And support to SASS;
- [x] Define custom fonts based on *Figma* mock-ups;
- [x] Create and configure a *FIrebase* app;
- [x] Enable authentication with Google account;
- [x] Configure *firebase*  service in ~~*React*~~*Next.js* project;
- [x] Create *React Context* for authentication;
- [x] Work with *Firebase Realtime Database*;
- [x] Sort questions by likes count;
- [ ] Add loading placeholder animations;
- [ ] Make application responsive;
- [ ] Add animations and transitions;
- [ ] Add a dark theme;
- [ ] Convert application into a PWA;

---

Also checkout the project developed in [NLW #2](https://github.com/juliolmuller/proffy), [NLW #3](https://github.com/juliolmuller/happy), [NLW #4](https://github.com/juliolmuller/move.it) and [NLW #5](https://github.com/juliolmuller/podcastr).
