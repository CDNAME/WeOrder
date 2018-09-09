export function formatDate(date,fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4-RegExp.$1.length));
  }
  let o = {
    'MM': date.getMonth() + 1,
    'dd': date.getDate(),
    'hh': date.getHours(),
    'mm': date.getMinutes(),
    'ss': date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1)?str:padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero(str) {
  return ('00'+ str).substr(str.length);
}
