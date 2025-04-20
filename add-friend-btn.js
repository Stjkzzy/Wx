document.getElementById("add-friend-btn").addEventListener("click", function() {
  var wechatId = "gzhhysl";  // 微信号
  var input = document.createElement("input");
  document.body.appendChild(input);
  input.value = wechatId;
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  // 使用 URI scheme 打开微信，并跳转到添加好友页面
  window.location.href = "weixin://addfriend/?nickname=&verify=&ticket=&scene=&sourceid=&uin=&key=&from=&isappinstalled=0&version=7.0.5&lang=zh_CN&pass_ticket=&wechatid=" + wechatId;
});
