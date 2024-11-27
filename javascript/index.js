function updateTime() {
    // harare
    let harareElement = document.querySelector("#harare");
    let harareDateElement = harareElement.querySelector(".date");
    let harareTimeElement = harareElement.querySelector(".time");
    let harareTime = moment().tz("Africa/Harare");
    harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
    harareTimeElement.innerHTML = harareTime.format("h:mm:ss [<small>]A[</small>]");

    //bulawayo
    let bulawayoElement = document.querySelector("#bulawayo");
    let bulawayoDateElement = bulawayoElement.querySelector(".date");
    let bulawayoTimeElement = bulawayoElement.querySelector(".time");
    let bulawayoTime = moment().tz("Africa/Bulawayo");
    bulawayoDateElement.innerHTML = bulawayoTime.format("MMMM Do YYYY");
    bulawayoTimeElement.innerHTML = bulawayoTime.format("h:mm:ss [<small>]A[</small>]");


}

updateTime();
setInterval(updateTime, 1000);