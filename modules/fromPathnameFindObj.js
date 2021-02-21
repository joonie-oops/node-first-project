module.exports = (arr, pathname) => {
  let str = pathname.substring(9);
  const obj = arr.find((el) => {
    return el.slug === str;
  });
  return obj;
};
