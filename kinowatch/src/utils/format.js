export function formattedTime(value) {
  let number = parseInt(value, 10);
  let hours = Math.floor(number / 3600);
  let minutes = Math.floor((number - (hours * 3600)) / 60);
  let seconds = number - (hours * 3600) - (minutes * 60);
  return `${hours !== 0 ? hours + ':' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export function numberWithSpaces(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function declensionWord(value, arr) {
  return numberWithSpaces(value) + ' ' + (value%10==1&&value%100!=11?arr[0]:(value%10>=2&&value%10<=4&&(value%100<10||value%100>=20)?arr[1]:arr[2]));
}

export function shortNumber(value) {
  return value % 1000 == 0 && value != 0 ? Math.round(value / 1000) + 'К' : value;
}
