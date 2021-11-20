let proxying = false;
let webduck = "";
// good luck figuring out what this does
self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
// ducked up, doesn't work sad sus
self.addEventListener('fetch',async function(event) {
	if (event.request.url.includes('/start-proxying')) {
		console.log('started proxying');
		proxying = true;
		webduck = event.request.url.split('?')[1];
		return event.respondWith(
			new Response('Ok!')
		);
	}
	if (proxying && !event.request.url.startsWith('https://sussybotproxy.abruhuser.repl.co/')) {
		console.log(`proxying: ${event.request.url}`)
		let res = await fetch(
				"https://sussybotproxy.abruhuser.repl.co/get?url="+encodeURIComponent(webduck+event.request.url),
				{mode: 'cors'}
			)
		
		return event.respondWith(res)
	} else {
		console.log('not proxied')
		event.respondWith(
					fetch(event.request.url, {
						mode: 'no-cors'
					})
		);
	}
	
});
