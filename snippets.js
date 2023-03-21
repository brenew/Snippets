// live type feature
const liveType = (inputId, elementClass) => {
    const textInput = document.getElementById(inputId);
    const textName = document.querySelector(elementClass);

    textInput.addEventListener('input',(e)=>{
        textName.innerHTML = textInput.value;
    });    
}

liveType('search_box', '.result');

// remove property from object
// example data:
// let theObject = {newname: 'Brian', oldname: 'Brian Renew'};
// let removeProp = 'oldname';
const removeProperty = (obj, prop) => {
    
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return true;  

    } else {

        return false;    

    }
}

console.log(removeProperty(theObject, removeProp));

// format date for api
const formatApiDate = (date) => {
    let objDate = new Date(date);
    if (objDate instanceof Date && !isNaN(objDate.valueOf())) {
        let day = String(objDate.getDate()).padStart(2, '0');
        let month = String(objDate.getMonth() + 1).padStart(2, '0');
        let year = String(objDate.getFullYear());
        let apiDate = year + month + day;

        return apiDate;

    } else {

        return false;
    }
  }
  
  console.log(formatApiDate("12/31/2014"));