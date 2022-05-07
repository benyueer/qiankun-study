

const appsToUnload = {}

export function getAppUnloadInfo(appName) {
  return appsToUnload[appName]
}