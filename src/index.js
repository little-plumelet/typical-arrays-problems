
exports.min = function min (array) {
    let i = 1;
    if (array === undefined || array.length === 0) return 0;
    else {
      let min = array[0];
      while (i < array.length)
        {
          if (min > array[i]) min = array[i];
          i++;
        }
        return min;
      }
}

exports.max = function max (array) {
  let i = 1;
  if (array === undefined || array.length === 0) return 0;
  else {
    let max = array[0];
    while (i < array.length)
      {
        if (max < array[i]) max = array[i];
        i++;
      }
      return max;
    }
}

exports.avg = function avg (array) {
  let i = 0;
  let average = 0;
  if (array === undefined || array.length === 0) return 0;
  else {
      while (i < array.length) {
        average += array[i];
        i++;
      }
      return average / array.length;
    }
}
