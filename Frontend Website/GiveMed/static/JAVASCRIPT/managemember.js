function managemember()
{

	var mid= document.getElementById("t1").value;
	var mname= document.getElementById("t2").value;
	var mgen= document.getElementById("t3").value;
	var mage= document.getElementById("t4").value;
	var mnum= document.getElementById("t5").value;
	var memail= document.getElementById("t6").value;			
// 	var maddress= document.getElementById("t7").value;
// 	var mcity= document.getElementById("t8").value;
	var Address= document.getElementById("t7").value;
	var City= document.getElementById("t18").value;
	
// 	//email id expression code
// 	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
// 	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(mid=='')
	{
		alert('Please enter ID numbers');
	}
// 	else if(!letters.test(Firstname))
// 	{
// 		alert('FirstName field required only alphabet characters');
// 	}
	else if(mname=='')
	{
		alert('Please enter your Username');
	}
	else if(!letters.test(mname))
	{
		alert('Name field required only alphabet characters');
	}
	else if(mgen=='')
	{
		alert('Enter Gender');
	}

	else if(mage=='')
	{
		alert('Enter Age.');
	}

	else if(mnum='')
	{
		alert("Enter Valid Phone Number!!")
	}
	else if(Address='')
	{
		alert("It can't be blank!!!")

	}
	else if(City='')
	{
		alert("Enter Your city!!")
	}
	else
	{				                            
		   alert('Thank You for Login & You are Redirecting to Main Website');
		   // Redirecting to other page or webste code. 
		   window.location = "/index.html"; 
	}
}
