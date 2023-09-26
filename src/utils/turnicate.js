const truncate = (e, charLength) => {
  if (e.length <= charLength) {
    return e;
  } else {
    const truncatedString = e.slice(0, charLength);
    return `${truncatedString} ...`;
  }
};

export default truncate;
