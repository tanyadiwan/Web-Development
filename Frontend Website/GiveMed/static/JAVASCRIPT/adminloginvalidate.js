// function validate()

// {
//     var username=document.getElementById("username").Value;
//     var password=document.getElementById("password").Value;
//     if(username=="admin"&&password=="user")
//     {
//         alert("Welcome Admin");
//         return false;
//     }
//     else{
//         alert("Login Failed");
//     }
// }
function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Password min and max length is 6.");
		}
		else
		{
	alert('Thank You for Login & You are Redirecting to the admin panel');
  //Redirecting to other page or webste code or you can set your own html page.
       window.location = "adminloginpanel.html";
			}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	