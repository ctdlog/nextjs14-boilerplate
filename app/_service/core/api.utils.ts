export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string

export type AppEnv = 'production' | 'development'

const getAppEnv = (): AppEnv => {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV

  if (Boolean(appEnv) && appEnv !== 'development') {
    return appEnv as Exclude<AppEnv, 'development'>
  }

  return 'development'
}

export const getApiEndpoint = () => {
  switch (getAppEnv()) {
    case 'production':
      return 'https://<repository-name>.vercel.app/api'
    case 'development':
      return 'http://localhost:4000/api'
    default:
      return 'http://localhost:4000/api'
  }
}
