export function getFormattedDate (dateValue) {
  let date = new Date(dateValue).toLocaleDateString('en-AU', {
        day : 'numeric',
        month : 'numeric',
        year : 'numeric'
    }).split(' ').join('/')
  
  return date
}
