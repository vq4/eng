monsu = 1
mon = Math.floor(Math.random() * (monsu - 1));
If (mon == 0){
surukoto1 = new Array(
"to get enough sleep",	"to solve the problem",	"to swim",	"to go to university",	"to book a hotel online",	"to stay here",	"to decide what to do",	"to eat",	"to travel around the world",	"to come to tomorrow's party",	"to study abroad",	"to save a seat"
);	
keiyousi1 = new Array(
"important",	"impossible",	"amazing",	"possible",	"easy",	"difficult"
);	

keilen1 = keiyousi1.length;
surulen1 = surukoto1.length;

keiran1 = Math.floor(Math.random()*keiyousi1.length);
sururan1 = Math.floor(Math.random()*surukoto1.length);
keiyou1 = keiyousi1[keiran1];
suru1 = surukoto1[sururan1];
writ = "<p>C 次の問い(<b>問１～３</b>)において、語句を並び替えて文を完成させよ。</p><p>"+suru1+" is "+keiyou1+".</p>"
}else{
writ = "1"
}
document.write(writ);
function myQues(){	
alert("It is "+keiyou1+" "+suru1+".");	
}	
