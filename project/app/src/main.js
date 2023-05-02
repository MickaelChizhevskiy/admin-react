import React  from "react";
import Editor from "./components/editor";
import { createRoot } from "react-dom/client";


createRoot(document.getElementById("root")).render(<Editor/>);
// function getPageList(){
//     $("h1").remove();

//     $.get("./api", data => {
//         data.forEach(file => {
//             $("body").append(`<h1>${file}</h1>`)
//         })
//     }, "JSON");

// }

// getPageList();

// $("button").click(() => {
//     $.post("./api/createNewPage.php", {
//         "name" : $("input").val()
//     }, () => {
//         getPageList();
//     })
//     .fail(() => {
//         alert("Page allready exist!");
//     })
// });