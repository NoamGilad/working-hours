const calcTimeDiff = (fromTime, toTime) => {
  const timeDiffMs = toTime - fromTime;
  const timeDiffMin = timeDiffMs / 60000;
  const timeDiffDecimal = timeDiffMin / 60;
  const hours = Math.floor(timeDiffDecimal);
  const minutes = Math.floor((timeDiffDecimal - hours) * 60);
  const date = new Date();
  date.setHours(hours, minutes);
  console.log(date);
};
