		  function pickHorse(){
		       //collects user imput for game
		       let usersHorse = prompt("What NUMBER Horse", "Enter a number from 1 - 6");
		       //records the number the user imputed
		       document.getElementById('choice').innerText = usersHorse;		
		}
			function startRace(){
				//generates a random whole number between 1 and 6
				let randomNumber = Math.floor(Math.random() * 6) + 1;
				//sends alerts about the race
				alert("The Race is in progress... Press OK");
				alert("WOW! Princess has overtaken Horsey, but its not over yet... Press OK")
		        alert("The Race has ended press OK to view results");	
		        //records the generated number
				document.getElementById('display').innerText = randomNumber;
			}
