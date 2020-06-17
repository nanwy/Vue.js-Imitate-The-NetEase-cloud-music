export function getRandomArray(arr, count) {
  let shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- >= min) {
    index = Math.floor(i * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i],
      shuffled[i] = temp
  }
  return shuffled.slice(min)
}