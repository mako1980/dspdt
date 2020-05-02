var dt = new Date();
var y = dt.getFullYear();
var m = dt.getMonth() + 1;
var w = dt.getDay();
var d = dt.getDate();
var ar = new Array("日","月","火","水","木","金","土");
window.alert("今日は" + y + "年" + m + "月" + d + "日" + ar[w] + "曜日" + "です。\n(*´∀｀)");
