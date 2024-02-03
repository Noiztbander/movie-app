const NODE_ENV = "development";

const appConfig = {
  development: {
    movieDB: {
      MovieDbApiKey: process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY,
      MovieDbAccessToken: process.env.NEXT_PUBLIC_MOVIED_DB_ACCESSTOKEN,
    },
    movieApp: {
      port: process.env.NEXT_PUBLIC_PORT,
    },
  },
  production: {
    movieDB: {
      MovieDbApiKey: process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY,
      MovieDbAccessToken: process.env.NEXT_PUBLIC_MOVIED_DB_ACCESSTOKEN,
    },
    movieApp: {
      port: process.env.NEXT_PUBLIC_PORT,
    },
  },
};

export const config = appConfig[NODE_ENV];
