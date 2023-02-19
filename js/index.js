
//首頁最新消息彈窗
let popUp = document.querySelector('.pop_up_overlay');

document.addEventListener('click', (e) => {
  //開啟談窗
  if (e.target.classList.contains('read_more')
    && popUp.style.display === 'none') {
    popUp.style.display = '';
  }
  if (e.target.classList.contains('svg_close')
    && popUp.style.display !== 'none') {
    popUp.style.display = 'none';
  }
  //點選外面layout關閉談窗
  if (e.target.chridList
    && popUp.style.display !== 'none') {
    popUp.style.display = 'none';
  }
});