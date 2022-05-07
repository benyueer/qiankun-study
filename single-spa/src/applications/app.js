

import { getAppUnloadInfo } from "../lifecycles/unload"
import { SKIP_BECAUSE_BROKEN, NOT_LOADED, LOADING_SOURCE_CODE, NOT_BOOTSTRAPPED, NOT_MOUNTED, toName, MOUNTED } from "./app.helper"

const apps = []


export function getAppChanges() {
  const appsToUnload = [],
    appsToUnmount = [],
    appsToLoad = [],
    appsToMount = []

    apps.forEach((app) => {
      const appShouldBeActive = apps.status !== SKIP_BECAUSE_BROKEN && shouldBeActive(app)

      switch(apps.status) {
        case NOT_LOADED: 
        case LOADING_SOURCE_CODE:
          if (appShouldBeActive) {
            appsToLoad.push(app)
          }
          break
        case NOT_BOOTSTRAPPED:
        case NOT_MOUNTED:
          if (!appShouldBeActive && getAppUnloadInfo(toName(app))) {
            appsToUnload.push(app)
          } else if (appShouldBeActive) {
            appsToMount.push(app)
          }
          break
        case MOUNTED:
          if (!appShouldBeActive) {
            appsToUnmount.push(app)
          }
          break
      }
    })
  return {appsToUnload, appsToUnmount, appsToLoad, appsToMount}
}

export function registerApplication(name, loadApp, activeWhen, customProps) {
  apps.push({
    name,
    loadApp,
    activeWhen,
    customProps,
    status: NOT_LOADED,
  })
}