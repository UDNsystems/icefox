from browser import window, document, ajax, window
# HEY!
# check chat asap!!!!!!
def travel(ev):
  url = "https://sussybotproxy.abruhuser.repl.co/get?url="+window.encodeURIComponent(document.getElementById("URL").value)
  print(request(url))

def requestcallback(res):
  window.fetch('/start-proxying?'+window.URL.new(window.url).origin);
  window.htmlcode = res.text
  document.getElementById("website").html = ""
  #document.getElementById("website").html = '<iframe src="/code/nothing.html" width=400px height=400px/>'
  document.getElementById("website").html = '<iframe src="/code/nothing.html" width="100%" height="100%" style="position: fixed; top: 0; left: 0; border: none; z-index: 0;"/>'
def reload(ev):
  url = "https://sussybotproxy.abruhuser.repl.co/get?url="+window.encodeURIComponent(document.querySelector('#website > iframe').src);
def fullfuckingscreen(ev):
  window.document.body.requestFullscreen()

def request(url):
  window.url = url;
  return ajax.get(
    url,
    oncomplete=requestcallback
  )

document.getElementById("travel!").bind("click", travel)
document.getElementById('reload').bind('click', reload)
document.getElementById('fs').bind('click', fullfuckingscreen)
