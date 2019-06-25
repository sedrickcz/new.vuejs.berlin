// TODO: suppport more formatting options
export function dateFmt (date, formatString) {
  date = new Date(date)

  const year = date.getFullYear()
  const month = (`0${date.getMonth()}`).slice(-2)
  const day = (`0${date.getDate()}`).slice(-2)
  const hour = (`0${date.getHours()}`).slice(-2)

  return formatString
         .replace('YYYY', year)
         .replace('MM', month)
         .replace('DD', day)
         .replace('HH', hour)
}
