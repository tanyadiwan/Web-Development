function registration()
{

	var Name = document.getElementById("t1").value;
	var uname= document.getElementById("t2").value;
	var email= document.getElementById("t3").value;
	var DB= document.getElementById("t4").value;
	var Address= document.getElementById("t5").value;
	var Phonenumber= document.getElementById("t6").value;
	var pwd= document.getElementById("t7").value;
	var cpwd= document.getElementById("t8").value;	
    var gender= document.getElementById("t9").value;		
	
	//email id expression code
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(Name=='')
	{
		alert('Please enter your Name');
	}
	else if(!letters.test(Name))
	{
		alert('Name field required only alphabet characters');
	}
    else if(uname=='')
    {
        alert('Please enter the user name.');
    }
    else if(!letters.test(uname))
    {
        alert('User name field required only alphabet characters');
    }
	else if(email=='')
	{
		alert('Please enter your user email id');
	}
	else if (!filter.test(email))
	{
		alert('Invalid email');
	}
    else if(DB="")
    {
        alert("It Can't be Blank!")
    }
    else if(Address="")
	{
		alert("It can't be blank!!!")

	}
    else if(Phonenumber="")
	{
		alert("Enter Valid Phone Number!!")
	}
	else if(pwd=='')
	{
		alert('Please enter Password');
	}
	else if(cpwd=='')
	{
		alert('Enter Confirm Password');
	}
	else if(!pwd_expression.test(pwd))
	{
		alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	else if(pwd != cpwd)
	{
		alert ('Password not Matched');
	}
	else if(document.getElementById("t5").value.length < 6)
	{
		alert ('Password minimum length is 6');
	}
	else if(document.getElementById("t5").value.length > 12)
	{
		alert ('Password max length is 12');
	}
    else if(gender='')
    {
        alert ('Please select your gender')
    }
	else
	{				                            
		   alert('Thank You for Login & You are Redirecting to Main Website');
		   // Redirecting to other page or webste code. 
		   window.location = "index.html"; 
	}
}
function clearFunc()
{
	document.getElementById("t1").value="";
	document.getElementById("t2").value="";
	document.getElementById("t3").value="";
	document.getElementById("t4").value="";
	document.getElementById("t5").value="";
	document.getElementById("t6").value="";
	document.getElementById("t7").value="";
	document.getElementById("t8").value="";
    

}