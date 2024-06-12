const formatDate = (time: string) => {
  const date = new Date(time);

  const second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();

  return {
    hours: `${hours}:${minute}:${second}`,
    hm: `${hours}:${minute}`,
    minutes: `${minute}:${second}`,
    seconds: `${second}`,
  };
};

export default formatDate;
