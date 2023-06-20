exports.add = (...args) => {
  return args.reduce((sum, current) => current + sum)
}