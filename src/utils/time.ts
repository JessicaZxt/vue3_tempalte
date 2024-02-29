export function GET_HOUR_TIME() {
  let hour: number = new Date().getHours();
  if (hour <= 9) {
    return "早上";
  } else if (hour > 9 && hour <= 12) {
    return "上午";
  } else if (hour > 12 && hour <= 18) {
    return "下午";
  } else {
    return "晚上";
  }
}
