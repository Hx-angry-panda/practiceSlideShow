var allButtons = $('#buttons > button')
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (x) {
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#images').css('transform', 'translate(' + p + 'px)')
    n = index
    activeButton(allButtons.eq(n))
  })
}

var n = 0
$(allButtons[n % allButtons.length]).trigger('click')
var timerId = setTimer()
$('#window').on('mouseenter', () => {
  clearInterval(timerId)
})
$('#window').on('mouseleave', () => {
  timerId = setTimer()
})

function activeButton($button) {
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}

function setTimer() {
  return setInterval(() => {
    n = n + 1
    $(allButtons[n % allButtons.length]).trigger('click')
  }, 3000)
}