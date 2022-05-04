const apps = []
export function registerApplication(name, loadApp, activeRule, customProps) {
  apps.push({
    name,
    loadApp,
    activeRule,
    customProps,
  })
}