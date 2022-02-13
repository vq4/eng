surukoto = new Array(
"to get enough sleep",	"to solve the problem",	"to swim",	"to go to university",	"to book a hotel online",	"to stay here",	"to decide what to do",	"to eat",	"to travel around the world",	"to come to tomorrow's party",	"to study abroad",	"to save a seat"
);	
keiyousi = new Array(
"important",	"impossible",	"amazing",	"possible",	"easy",	"difficult"
);	

keilen = keiyousi.length;
surulen = surukoto.length;

keiran = Math.floor(Math.random()*keiyousi.length);
sururan = Math.floor(Math.random()*surukoto.length);
keiyou = keiyousi[keiran];
suru = surukoto[sururan];
document.write("<p>C 次の問い(<b>問１～３</b>)において、それぞれ下の語句を並び替えて空所を補い、文を完成させよ。解答は(２１)～(２２)に入れるものの番号のみを答えよ。</p><p>"+suru+" is "+keiyou+".</p>");

function myQues(){	
alert("It is "+keiyou+" "+suru+".");	
}	
