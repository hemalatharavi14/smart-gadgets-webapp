var sphere=document.getElementById("sphere");
var upBtn=document.getElementById("upBtn");
var downBtn=document.getElementById("downBtn");

var rotateValue=sphere.style.transform;	
var rotateSum;

upBtn.onclick=function()
{
	console.log("up");
	rotateSum=rotateValue + "rotate(-90deg)";
	sphere.style.transform = rotateSum;
	rotateValue=rotateSum;
}
downBtn.onclick=function()
{
	rotateSum=rotateValue + "rotate(90deg)";
	sphere.style.transform = rotateSum;
	rotateValue=rotateSum;
}

$(document).ready(function(){
	$('.chat_icon').click(function(event){
		$('.chat_box').toggleClass('active');
	});
})

var know ={
		"hi":"Hi! I'm Smart Bot. How are you doing?",
		"Hi":"Hi! I'm Smart Bot. How are you doing?",
		"HI":"Hi! I'm Smart Bot. How are you doing?",
		"hello":"Hello! I'm Smart Bot. How are you?",
		"Hello":"Hello! I'm Smart Bot. How are you?",
		"HELLO":"Hello! I'm Smart Bot. How are you?",
		"hi!":"Do you want to know about any of the gadgets?",
		"Hi!":"Do you want to know about any of the gadgets?",
		"HI!":"Do you want to know about any of the gadgets?",
		"fine":"Good! Do you want to know about any of the gadgets?",
		"Fine":"Good! Do you want to know about any of the gadgets?",
		"FINE":"Good! Do you want to know about any of the gadgets?",
		"good":"Wonderful! Do you want to know about any of the gadgets?",
		"Good":"Wonderful! Do you want to know about any of the gadgets?",
		"GOOD":"Wonderful! Do you want to know about any of the gadgets?",
		"yes":"1. SmartWatch<br>2. Google Assistant Speaker<br>3. Intel Stick PC<br>4. Smart Phone.<br>Choose anyone number!",
		"Yes":"1. SmartWatch<br>2. Google Assistant Speaker<br>3. Intel Stick PC<br>4. Smart Phone.<br>Choose anyone number!",
		"YES":"1. SmartWatch<br>2. Google Assistant Speaker<br>3. Intel Stick PC<br>4. Smart Phone.<br>Choose anyone number!",
		"1":"SmartWatch has many features such as viewing notifications and sending messages from your wrist, tracking your activities and fitness goals through Google Fit, listening to music, logging your location (for GPS-enabled devices), talking to Google Assistant apart from showing time! <br><br> Do you want to know about any of the gadgets?",
		"2":"Google Assistant Speaker has the following features: 1) Find Your Phone. 2) Open Apps With Voice Commands. 3) Get Your Day Started The Right Way. 4) Control All Aspects of Your Smart Home. 5) Have Google Assistant Read You The News. 6) Send Voice Messages When You're On The Go. 7) Your Virtual Butler As Translator. 8) Get Ready For Netflix and Chill Hands-Free. <br><br> Do you want to know about any of the gadgets?",
		"3":"Intel Stick PC is also known as Compute Stick which is a desktop PC that fits in the palm of your hand. It's designed to plug into any free HDMI port on a computer monitor or HDTV. You won't get a display, keyboard, or mouse with it, but the Compute Stick will let you carry a Windows PC in your shirt pocket, ready to plug in at home or in the office. <br><br> Do you want to know about any of the gadgets?",
		"4":"A Smartphone is a cell phone that allows you to do more than make phone calls and send text messages. Smartphones can browse the Internet and run software programs like a computer. Smartphones use a touch screen to allow users to interact with them. <br><br> Do you want to know about any of the gadgets?",
		"no":"Had a good conversation with you! Have a nice day :) <br><br>For any queries just say Hi!",
		"No":"Had a good conversation with you! Have a nice day :) <br><br>For any queries just say Hi!",
		"NO":"Had a good conversation with you! Have a nice day :) <br><br>For any queries just say Hi!"
	};

function talk()
{
	var user=document.getElementById("typingArea").value;
	document.getElementById("typingArea").value="";
	var res=document.getElementById("result");
	res.innerHTML+=`<tr class="user_req"><td>`+user+`<br></td></tr>`;
	if(user in know)
	{
		res.innerHTML+=`<tr class="user_res"><td>`+know[user]+`<br></td></tr>`;
	}
	else
	{
		res.innerHTML+=`<tr class="user_res"><td>I can't understand! Can you come again?<br></td></tr>`;
	}
}

function ScrollDivDown(){
	document.getElementById('c_body').scrollTop=document.getElementById('c_body').scrollTop+1;
	if(document.getElementById('c_body').scrollTop<(document.getElementById('c_body').scrollHeight-document.getElementById('c_body').offsetHeight)){-1
     	clearInterval(myvar);     
    }
}
var myvar=setInterval(ScrollDivDown,10);
setInterval(ScrollDivDown,20);
