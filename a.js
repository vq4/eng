monsu = 2
mon = Math.floor(Math.random() * monsu);
if (mon == "0"){
surukoto1 = new Array(
"to get enough sleep",	"to solve the problem",	"to swim",	"to go to university",	"to book a hotel online",	"to stay here",	"to decide what to do",	"to eat",	"to travel around the world",	"to come to tomorrow's party",	"to study abroad",	"to save a seat"
);	
keiyousi1 = new Array(
"important",	"impossible",	"amazing",	"possible",	"easy",	"difficult", "healthy", "feel good", "correct"
);	
suruyaku1 = new Array(
"十分な睡眠をとること", "問題を解決すること", "泳ぐこと", "大学に行くこと", "オンラインでホテルを予約すること", "ここに滞在すること", "何をすべきかを決めること", "食べること", "世界中を旅すること", "明日のパーティーに来ること", "留学すること", "席を確保すること"
);
keiyouyaku1 = new Array(
"重要だ", "不可能だ", "素晴らしい", "可能だ", "簡単だ", "難しい", "健康によい", "気分が良い", "正しい"
);	
keilen1 = keiyousi1.length;
surulen1 = surukoto1.length;

keiran1 = Math.floor(Math.random()*keiyousi1.length);
sururan1 = Math.floor(Math.random()*surukoto1.length);
keiyou1 = keiyousi1[keiran1];
suru1 = surukoto1[sururan1];
keiy1 = keiyaku1[keiran1];
suruy1 = suruyaku1[sururan1];
writ = "<p>181 次の問いにおいて、同じ意味となるように語句を書き換えて文を完成させよ。</p><p>"+suru1+" is "+keiyou1+".</p>"
}
kotae = "It is "+keiyou1+" "+suru1+". ("+suruy1+"は"+keiy1+")"
document.write(writ);
function myQues(){	
alert(kotae);	
}	
