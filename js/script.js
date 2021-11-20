//navigator.serviceWorker.register("/sw.js")
navigator.serviceWorker.getRegistrations().then(x => x.forEach(y => y.unregister()))