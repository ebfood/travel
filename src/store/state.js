let defaultCity = '上海'
try {
  defaultCity = localStorage.city
} catch (e) {}

export default {
  city: defaultCity
}
