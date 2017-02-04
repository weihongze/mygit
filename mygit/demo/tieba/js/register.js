var user_txt = document.getElementById('user_txt');
var phone_txt = document.getElementById('phone_txt');
var password_txt = document.getElementById('password_txt');
var user_true = document.getElementById('user_true');
var phone_true = document.getElementById('phone_true');
//用户名
function changeTxt(user_t,user_color,isShow,user_txt_html){
  user_txt.innerHTML=user_t;
  user_true.style.display=isShow;
  user_txt.style.color=user_color;
  user_txt.innerHTML=user_txt_html
}
function focus_user(){
  user_txt.style.visibility="visible"
}
function blur_user(value){
  if (value==null||value=="") {
    user_txt.style.visibility="hidden"
  }else {
    user_txt.style.visibility="visible"
  }
}
function user(value){
  var pattern_user = /^[a-zA-Z\u4e00-\u9fa5_]{1}[a-zA-Z0-9_\u4e00-\u9fa5]{0,6}$/;
  if (value==""||value==null){
    changeTxt(user_txt,"#666","none","设置后不可更改中英文均可，<br>最长14个英文或7个汉字")
  }else if(pattern_user.test(value)){
    changeTxt(user_txt,"#666","block"," ")
  }else{
    changeTxt(user_txt,"red","none","格式不正确！")
  }
}
//手机号
function changeTxt2(user_t,user_color,isShow,user_txt_html){
  phone_txt.innerHTML=user_t;
  phone_true.style.display=isShow;
  phone_txt.style.color=user_color;
  phone_txt.innerHTML=user_txt_html
}
function focus_num(){
  phone_txt.style.visibility="visible"
}
function blur_num(value){
  if (value==null||value=="") {
    phone_txt.style.visibility="hidden"
  }else {
    phone_txt.style.visibility="visible"
  }
}
function phone(value){
  var pattern_phone = /^((\+86)|(86))?[1][3456789][0-9]{9}$/;
  if (value==""||value==null){
    changeTxt2(phone_txt,"#666","none","请输入中国大陆手机号，其他用户不可见")
  }else if(pattern_phone.test(value)){
    changeTxt2(phone_txt,"#666","block"," ")
  }else{
    changeTxt2(phone_txt,"red","none","格式不正确！")
  }
}
//密码

function focus_word(){
  password_txt.style.visibility="visible";
}
function blur_word(value){
  if (value==null||value=="") {
    password_txt.style.visibility="hidden"
  }else {
    password_txt.style.visibility="visible"
  }
}
var password1_posi = document.getElementById('password1').style;
var password2_posi = document.getElementById('password2').style;
var password3_posi = document.getElementById('password3').style;
function password_t(value){
  var pattern_space = /\s/;
  var pattern_numb = /^.{6,14}$/;
  if (value==""||value==null){
    password1_posi.backgroundPosition="-83px -113px";
    password2_posi.backgroundPosition="-83px -113px";
    password3_posi.backgroundPosition="-83px -113px";
  }else {
    if(pattern_space.test(value)){
      password3_posi.backgroundPosition="-77px -22px";
      password2_posi.backgroundPosition="-77px -22px";

    }else {
      password3_posi.backgroundPosition="-77px 2px";
      password2_posi.backgroundPosition="-77px 2px";
    } if (pattern_numb.test(value)) {
      password1_posi.backgroundPosition="-77px 2px";
    }else {
      password1_posi.backgroundPosition="-77px -22px";

    }
  }
}








// aaaaaa
