console.log('Aloha');
// ***** GLOBAL VARIABLES

const elBtnSubmit = document.querySelector('form button');
const elName = document.getElementById('name');
const elEmail = document.getElementById('e-mail');
const elPrompt = document.querySelector('.prompt');
const elThanks = document.getElementById('ty');
const elBtnThanks = elThanks.querySelector('button');

// ***** FUNCTION DEFINITIONS

function checkForRequiredData() {
	console.log('top of checkForRequiredData');

	let hasRequiredData = false;
	// Make sure that at least one of the required fields is filled out.
	
	if(elName.value.length > 0 ) {
		hasRequiredData = true;
	}
	
	if(elEmail.value.length > 0 ) {
		hasRequiredData = true;
	}
	
	return hasRequiredData;
}

function handleClick(e) {
	console.log('top of handleClick');
	e.preventDefault();

	const hasRequired = checkForRequiredData();
	console.log('hasRequired is: ', hasRequired)
	if(hasRequired === true) {
		// Submit the form. (Not really just go to the thank you page.)
		elPrompt.classList.remove('error-prompt');
		elName.classList.remove('error-attention');
		elEmail.classList.remove('error-attention');
		
		elThanks.classList.add('thanks');
		elThanks.setAttribute('hidden', 'false');
		
		elBtnThanks.addEventListener('click', function(){
			elThanks.classList.remove('thanks');
			elThanks.setAttribute('hidden', 'true');
		});
		
	} else {
		// Prompt user for minimum required data.
		elPrompt.classList.add('error-prompt');
		elName.classList.add('error-attention');
		elEmail.classList.add('error-attention');
	}
	
}



// ***** ONPAGE LOAD

elBtnSubmit.addEventListener('click', handleClick);