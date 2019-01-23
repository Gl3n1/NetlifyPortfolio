const removeSpecialChar = title => title.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');

export default removeSpecialChar;
