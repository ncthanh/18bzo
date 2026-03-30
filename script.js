let registration

const run = async () => {
  console.log(1)
  if (navigator.serviceWorker) {
    console.log(2)
    navigator.serviceWorker.register('sw.js',{ scope:'/' })

    console.log(3)
    registration = await navigator.serviceWorker.ready

    console.log(4)
    if (registration.active) {
      alert('Service worker active')
    }
  }
}
run()
