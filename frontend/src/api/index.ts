const defaultConfig = {
  api: process.env.RANGER_HOST_URL,
  gaTrackerKey: process.env.GOOGLE_ANALITYCS_URL
}

export const rangerUrl = () => defaultConfig.api
export const gaTrackerKey = () => defaultConfig.gaTrackerKey
