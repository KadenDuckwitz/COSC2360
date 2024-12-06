"use strict";

/*
    Name: Kaden Duckwitz
    Date: 12/5/2024
    Course: COSC 2360 NT - Web Page Dynamics and Scripting
    Final Project
*/

function showMaps() {
    let userCenteredMapElm = document.getElementById("usercenteredmap");

    navigator.geolocation.getCurrentPosition(getUserPos, handleErr);

    function getUserPos(pos) {
        let center = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        };

        let userCenteredMap = new google.maps.Map(userCenteredMapElm, {
            center: center,
            zoom: 15,
            mapId: '412aa3e18ac280f5'
        });
    }

    function handleErr(err) {
        console.log("Error generating user-centered map: " + err.message);
    }

    let saltLakeCenteredMapElm = document.getElementById("saltlakecenteredmap");

    let saltLakeCenteredMap = new google.maps.Map(saltLakeCenteredMapElm, {
        center: {
            lat: 40.77137874001066,
            lng: -111.95413350096709
        },
        zoom: 7,
        mapId: '412aa3e18ac280f5'
    });
}