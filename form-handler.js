// window.addEventListener("load", () => {
//     var form = document.getElementById("form");
//     let formData = null;
//     var XHR = new XMLHttpRequest();

//     // form.addEventListener("submit", (e) => {
//     //     e.preventDefault();
//     //     let formData = new FormData(form);
//     //     for (var f of formData.values()) {
//     //         console.log(f)
//     //     }
//     // })

//     // function blong() {
//     //     console.log('cray')
//     // }

//     form.addEventListener("submit", (e) => {
//         formData = new FormData(form);
//         // for (name in form.)
//     })

//     // XHR.addEventListener('load', function(event) {
//     // 	alert("Data sent and response loaded.")
//     // });

//     // XHR.addEventListener('error', function(event) {
//     // 	alert("Error. Unable to send response.")
//     // });

//     let obj = { name: 'carl', age: 42 };

//     XHR.open('GET', 'http://localhost:3000');
//     XHR.setRequestHeader("Content-Type", "application/json");
//     // XHR.setRequestHeader("Content-Type", "X-www-form-urlencoded");
//     console.log(formData)

//     XHR.send(formData);
//     // XHR.send(obj);
// })