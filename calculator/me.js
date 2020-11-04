function n(num) {
 document.form.m.value = document.form.m.value+num
}
function c() {
 document.form.m.value=""
}

function back(){
 var c= document.form.m.value
 document.form.m.value= c.substring(0,c.length-1)
}
function as() {
 var b=document.form.m.value
 if(b) {
  document.form.m.value=eval(b)
 }
}