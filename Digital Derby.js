function startRace(){
				let randomNumber = Math.floor(Math.random() * 6) + 1;
				document.getElementById('display').innerText = randomNumber;
				alert("The Race is in progress... Press OK");
				alert("WOW! Princess has overtaken Horsey, but its not over yet... Press OK")
		        alert("The Race has ended press OK to view results");	
			}
		   function pickHorse(){
		       let usersHorse = prompt("What NUMBER Horse", "Enter a number from 1 - 6");
		       document.getElementById('choice').innerText = usersHorse;		
		}