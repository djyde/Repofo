var repo = document.URL.split('/')[3] + '/' + document.URL.split('/')[4];


  $.ajax({
    url: 'https://api.github.com/repos/' + repo
  }).done(function(data){

    var createAt = new Date(data.created_at).getFullYear() + '-' + parseInt(new Date(data.created_at).getMonth() + 1) + '-' + new Date(data.created_at).getDate();
    var pushAt = new Date(data.pushed_at).getFullYear() + '-' + parseInt(new Date(data.pushed_at).getMonth() + 1) + '-' + new Date(data.pushed_at).getDate();

    var create = '<p>建立时间：' + createAt + '</p>';
    var push = '<p>最后提交：' + pushAt + '</p>';

    $('.js-current-repository').attr('data-powertip',create + push)
    $('.js-current-repository').powerTip({
      placement: 'e'
    })
  })