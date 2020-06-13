const courseNameInput = document.querySelector('#name');
const ratingInput = document.querySelector('#rating');
const buttonConfirm = document.querySelector('#btn-confirm');
const coursesList = document.querySelector('#courses-list');
const alertController = document.querySelector("#alert");



buttonConfirm.addEventListener('click', () => {
    const enteredName = courseNameInput.value; 
    const enteredRating = ratingInput.value; 
    console.log(enteredName)

    if (enteredName.trim().length <= 0 || enteredRating <= 0 || enteredRating > 10 || enteredRating.trim().length <= 0) {
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid Inputs';
        alert.message = 'Please enter valid name and rating (1-10).';
        alert.buttons = ['OK'];

        alertController.appendChild(alert);
        alert.present();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.style.fontWeight = 'bold';
    newItem.textContent = enteredName + ' | Rating : ' + enteredRating + '/10';

    coursesList.appendChild(newItem);
});