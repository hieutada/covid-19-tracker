const timeSince = (date, lang) => {
  let seconds = Math.floor((Number(Date.now()) - Number(date) * 1000) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' năm trước' : ' years ago'}`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' tháng trước' : ' months ago'}`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' ngày trước' : ' days ago'}`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' giờ trước' : ' hours ago'}`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + `${lang === 'vi' ? ' phút trước' : ' minutes ago'}`;
  }
  return Math.floor(seconds) + `${lang === 'vi' ? ' giây trước' : ' seconds ago'}`;
};

export default timeSince;
