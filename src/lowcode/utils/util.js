/**
 * 复制内容
 * @param data 要复制的内容数据
 */
export const copyContent = (data, msg) => {
  const oInput = document.createElement('textarea');
  oInput.setAttribute('readonly', 'readonly'); // 设置只读，否则移动端使用复制功能时可能会造成软件盘弹出
  oInput.value = data;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand('Copy'); // 执行浏览器复制命令
  oInput.className = 'oInput';
  oInput.style.display = 'none'; // 将input隐藏
  oInput.remove(); // 将input销毁
  msg && console.log(msg);
};
