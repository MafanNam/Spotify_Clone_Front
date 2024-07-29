# Spotify Clone

![Spotify title](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/title.gif)

<br>

Spotify_Clone_Front is a Spotify clone built using Next.js, Redux(RTK Q), TailwindCSS and
my [django API](https://github.com/MafanNam/Spotify_Clone_API).
Users can log in / sign up with their account and view or create the playlists, artists, and albums followed by them.

[![Watch the video](https://img.youtube.com/vi/vPs_6Bem9uY/0.jpg)](https://www.youtube.com/watch?v=vPs_6Bem9uY)

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

![Spotify data flow](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/data_flow.png)

<section id="api"/>

## API Reference

Please go to this [link](https://github.com/MafanNam/Spotify_Clone_API/) and follow the steps. There more information.

<section id="screenshots"/>

## Screenshots

**Home page**

![home page](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/home.gif)

<br>

**Browse categories**

![category](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/category.gif)

<br>

**Search**

![search](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/search.gif)


<br>

**View Artist**

![artist](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/artist.gif)

<br>

**View Album**

![album](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/album.gif)

<br>

**View Playlist**

![playlist](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/playlist.gif)

<br>

**View Track**

![track](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/track.gif)

<br>

**View Account**

![log in](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/login.gif)
![sing up](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/signup.gif)

![account](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/account.gif)

![artist_profile](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/artist_profile.gif)
![user_profile](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/user_profile.gif)

![artist_album](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/artist_album.gif)
![artist_track](https://raw.githubusercontent.com/MafanNam/Spotify_Clone_Front/main/assets/artist_track.gif)

## Author

This project is developed by Mafan.

## License

This project is licensed under MIT License.