const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


sign_up_btn.addEventListener("click", () => {
	container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});

function validateSignIn()
{
	var email = document.login.email;
	var passw = document.login.password;
	if(emailvalidation(email))
	{
		if(pswvalidation(passw))
		{
			return true;
		}
	}
	return false;
}

function emailvalidation(email)
{
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@bmsce.ac.in$/;
	if(email.value.match(re))
	{
		return true;
	}
	else
	{
		alert("Oops! Login with correct BMSCE E-mail only!!");
		email.value = "";
		email.focus();
    	return false;
	}
}

function pswvalidation(passw)
{
	var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
	if(passw.value.match(regex))
	{
		return true;
	}
	else
	{
		alert("Oops! Your password must contain at least one number, one special character, one uppercase and lowercase letter, and at least 8 or more characters");
		passw.value = "";
		passw.focus();
		return false;
	}
}

function validateSignUp()
{
	var uname = document.signup.username;
	var usn = document.signup.usn;
	var sem = document.signup.semester;
	var uemail = document.signup.email;
	var password = document.signup.password;
	var confirm = document.signup.confirm;
	if(namevalid(uname))
	{
		if(usnvalid(usn))
		{			
			if(emailvalid(uemail))
			{
				if(pswvalid(password, confirm))
				{
					if(confirmvalid(password, confirm))
					{
						return true;							
					}
				}
			}
		}
	}
	return false;
}

function namevalid(uname)
{
	var letters = /^[A-Za-z ]+$/;
	if(uname.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Oops! Username must have alphabet characters only!!');
		uname.value = "";
		uname.focus();
		return false;
	}
}

function usnvalid(usn)
{
	var check = /^1BM[0-9]{2}[A-Z]{2}[0-9]{3}$/;
	if(usn.value.match(check))
	{
		return true;
	}
	else
	{
		alert("Oops! Please enter your USN correctly!");
		usn.value = "";
		usn.focus();
		return false;
	}
}

function emailvalid(uemail)
{
	var res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@bmsce.ac.in$/;
	if(uemail.value.match(res))
	{
		return true;
	}
	else
	{
		alert("Oops! Please sign-up with your correct BMSCE E-mail ID!!");
		uemail.value = "";
		uemail.focus();
    	return false;
	}
}

function pswvalid(password, confirm)
{
	var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
	if(password.value.match(regex))
	{
		return true;
	}
	else
	{
		alert("Oops! Your password must contain atleast one number, one special character, one uppercase and lowercase letter, and atleast 8 or more characters!!");
		password.value = "";
		confirm.value = "";
		password.focus();
		return false;
	}
}

function confirmvalid(password, confirm)
{
	if(password.value == confirm.value)
	{
		return true;
	}
	else
	{
		alert("Oops! Please re-enter your password correctly!");
		confirm.value = "";
		confirm.focus();
		return false;
	}
}

