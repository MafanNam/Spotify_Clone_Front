# Spotify Clone

![Spotify title]()

<br>

Spotify_Clone_Front is a Spotify clone built using Next.js, Redux(RTK Q), TailwindCSS and
my [django API](https://github.com/MafanNam/Spotify_Clone_API).
Users can log in / sign up with their account and view or create the playlists, artists, and albums followed by them.

## Table of contents

- [Technologies and Libraries used](#technologies)
- [Features](#features)
- [To-do features](#todo)
- [Run locally](#run_locally)
- [Environment variables](#env)
- [Data flow](#data_flow)
- [API Reference](#api)
- [Screenshots](#screenshots)

<section id="technologies" />

## Technologies and Libraries used

- [Next.JS 14](https://nextjs.org/)
- [Spotify_Clone_API](https://github.com/MafanNam/Spotify_Clone_API/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Redux](https://react-redux.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

<section id="features"/>

## Features

- Spotify Google OAuth2 for authentication
- View user's top tracks and artists based on listening frequency
- Display user's top tracks of all time
- View recently played tracks
- See recommendations for a track based on my [Spotify API's](https://github.com/MafanNam/Spotify_Clone_API/) audio
  analysis features
- View all the playlists created or followed by the user
- View liked songs playlist of the user
- View artists and albums followed by the user
- Display all the tracks in a playlist, an album, or of an artist
- Play a track with play/pause/volume/repeat/shuffle controller
- Search for any playlist, artist, album, track or user
- Browse music based on categories (eg: Rock, Phonk, Hip-Hop...)
- Show latest releases
- Artist can create/update/delete playlist, license, track, album and profile.

<section id="todo" />

## To-do features

- [x] Add colors for dynamic headers scroll
- [ ] Improve track player
- [ ] Improve Shuffle
- [ ] For premium user download track
- [ ] More flexible ProtectRouter

*Any other features can be suggested under the issues section of the repo*

<section id="run_locally"/>

## Run Locally

Clone the project

```bash
  git clone https://github.com/MafanNam/Spotify_Clone_Front.git
```

Go to the project directory

```bash
  cd Spotify_Clone_Front
```

Install dependencies

```bash
  npm install
  # or
  yarn
```

Start the server

- Dev

```bash
  npm run dev
  # or
  yarn dev
```

- Prod

```bash
  npm run build
  # or
  yarn build
```

```bash
  npm run start
  # or
  yarn start
```

<section id="env"/>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL`= http://localhost:8000/api/v1

`NEXT_PUBLIC_HOST`= http://localhost:8000

`NEXT_PUBLIC_REDIRECT_URL`= http://localhost:3000/account/auth

### Spotify API credentials

For using frontend you must run backend server. Please go to this [link](https://github.com/MafanNam/Spotify_Clone_API/)
and follow the steps


<section id="data_flow"/>

## Data flow

![Spotify data flow]()

<section id="api"/>

## API Reference

Please go to this [link](https://github.com/MafanNam/Spotify_Clone_API/) and follow the steps. There more information.

<section id="screenshots"/>

## Screenshots

**Home page**

![home page]()

<br>

**Browse categories**

![category]()

<br>

**Search**

![search]()


<br>

**View Artist**

![artist]()

<br>

**View Playlist**

![playlist]()

<br>

**View Track**

![track]()

<br>

**View Account**

![log in]()
![sing up]()

![account]()

![profile]()

![album]()

![track]()

## Author

This project is developed by Mafan.

## License

This project is licensed under MIT License.