const formatDate = (time: string) => {
  const date = new Date(time);
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hours = date.getHours();

  return `${hours}:${minute}:${second}`;
};

export default formatDate;
