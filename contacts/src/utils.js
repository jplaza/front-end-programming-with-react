
export function groupBy(arr, fn) {
    return arr.reduce((acc, el) => {
      const groupKey = fn(el)
      let group = (acc[groupKey] || [])
      group.push(el)
      acc[groupKey] = group
      return acc
    }, {});
}