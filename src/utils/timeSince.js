const timeSince = (date, lang) => {
  let seconds = Math.floor((Number(Date.now()) - Number(date) * 1000) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' năm' : ' years'}`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' tháng' : ' months'}`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' ngày' : ' days'}`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' giờ' : ' hours'}`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' phút' : ' minutes'}`;
  }
  return Math.floor(seconds) + `${lang === 'vi' ? ' giây' : ' seconds'}`;
};

export default timeSince;
