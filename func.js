// function to get the current date
function getDate(){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

module.export={
    getDate
}