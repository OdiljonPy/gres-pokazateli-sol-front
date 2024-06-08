let user = "";
const userAgent = navigator.userAgent;

if (userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {
  user = "iPhone";
} else user = "android";

export default user;
