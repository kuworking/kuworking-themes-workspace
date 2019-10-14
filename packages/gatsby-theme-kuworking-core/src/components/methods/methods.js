export const fixDate = string_date => {
  let [year, month, day] = string_date.split('.') // iOS is not understanding the date format
  month = parseInt(month) - 1
  return {
    date: new Date(year, month, day).toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    }),
    months: Math.floor((new Date(Date.now()) - new Date(year, month, day)) / (1000 * 60 * 60 * 24 * 30)),
  }
}

export const shuffle_array = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export const is_this_a_mobile_device = () =>
  typeof window !== `undefined` &&
  (typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1)
