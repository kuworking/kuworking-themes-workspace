const is_this_a_new_day = () => {
  const last_date = Number(window.localStorage.getItem('kw-date')) || ''
  const today = Number(new Date().getDay())
  window.localStorage.setItem('kw-date', today)
  return today === Number(last_date) ? false : true
}

const get_image_url = async keywords => {
  const previous_image = document.body.style.backgroundImage.split('"')[1]
  let different_number = new Date().getMilliseconds()
  let url = `https://source.unsplash.com/random/?sig=${different_number}&&${keywords}`
  let response = await fetch(url)
  image_url = response.url
  previous_image === image_url &&
    (await wait(2000)) &&
    (different_number = new Date().getMilliseconds()) &&
    (url = `https://source.unsplash.com/random/?sig=${different_number}&&${keywords}`) &&
    (response = await fetch(url))
  window.localStorage.setItem('kw-wallpaper', image_url)
  return image_url
}

const get_image = async image_url => {
  const request = new Request(image_url)
  const cache = await caches.open('kw-cache')
  const cached_image = await cache.match(request)
  cached_image || cache.add(request)
  const new_image = cached_image ? cached_image.url : image_url
  return new_image
}

const refresh_image = () => start('refresh')

const wait = ms => new Promise((r, j) => setTimeout(r, ms))

const start = async refresh => {
  refresh || document.getElementById('change_wallpaper').addEventListener('click', refresh_image, true)

  const keywords = refresh ? document.getElementById('keywords').value : 'coding, apple'

  refresh || (document.getElementById('keywords').value = keywords)

  const new_day = refresh ? true : is_this_a_new_day()

  refresh && (document.getElementById('panel').style.opacity = 1) && (await wait(100))

  const image_url = new_day
    ? await get_image_url(keywords)
    : window.localStorage.getItem('kw-wallpaper') || (await get_image_url(keywords))
  const image = await get_image(image_url)

  document.body.style.backgroundImage = `url('${image}')`
  refresh && (document.getElementById('panel').style.opacity = 0)
}

chrome.tabs.getCurrent(() => start(''))
