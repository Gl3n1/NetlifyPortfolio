const removeSpecialChar = (title) => {
  return title.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
}

export default removeSpecialChar;