import { getAppChanges } from "../applications/app"
import {isStarted} from "../start"

let appChangeUnderway = false

export function reroute() {
  if (appChangeUnderway) {
    return
  }

  const {
    appsToUnload,
    appsToUnmount,
    appsToLoad,
    appsToMount,
  } = getAppChanges()

  if (isStarted()) {

  } else {
    // appsThatChanged = appsToLoad
    return loadApps()
  }

  function loadApps() {
    return Promise.resolve().then(() => {
      
    })
  }
}