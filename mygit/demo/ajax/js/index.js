$(function(){
  $.ajax({
    url:"http://album.kuwo.cn/album/servlet/commkdtpage?flag=2&listid=5&pn=0&rn=30",
    type:"get",
    dataType:"json",
    success:function(data){
      var musiclist = data.musiclist;
      var str = '';
      musiclist.forEach(function(value){
        str += '<li>歌名:'+value.name + '日期:' + value.yr + '</li>';
      })
      $('body').append('<ul>'+str+'</ul>');
    }
  })








})
