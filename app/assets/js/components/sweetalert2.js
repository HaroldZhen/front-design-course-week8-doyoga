function socialAlert(e) {
  e.preventDefault();
  Swal.fire({
    icon: 'info',
    title: '即將開放',
    // text: '123',
  })
}

function subscriptionMsg(e) {
  e.preventDefault();
  const suscriptionBtn = document.getElementById('btnSubscription');
  suscriptionBtn.value = '';
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '感謝你的訂閱',
    text: '我們將定期寄送活動資訊給你',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}


function searchMsg(e) {
  e.preventDefault();
  const searchInput = document.getElementById('searchInput');
  searchInput.value = '';
  let timerInterval
  Swal.fire({
    title: '搜尋中',
    html: '還有 <b></b> 秒',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      searchResult();
    }
  })
}

function searchResult() {
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: '沒有找到相關課程',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}