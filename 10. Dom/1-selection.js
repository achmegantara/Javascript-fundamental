// getElementByID() ==> element
// getElementsByTagName == > HTML collection
// getElementsByClassName() ==> HTML Collection
// querySelector() ==> element
// querySelectorAll() ==> nodelist

// const judul = document.getElementById("judul");
// console.log(judul);
// judul.style.color = "red"; //otomaris menambah inline pada css
// judul.style.backgroundColor = "blue";
// judul.innerHTML = "Achmad akbar";

// const p = document.getElementsByTagName('p'); //bentuknya seperti array
// console.log(p);
// for (let i = 0; i <= p.length; i++) {
//     p[i].style.backgroundColor = "lightblue";
// }

//getElementByClassName() sama dengan tagname


// const p4 = document.querySelector("#b p");
// console.log(p4);
// p4.style.color = "red";
// p4.style.fontSize = "100px";

// const li2 = document.querySelector("section#b ul li:nth-child(2");
// li2.style.backgroundColor = "salmon";

//const p = document.querySelector("p");
//p.style.backgroundColor = "blue";

//document.queryselectorall()
// const pAll = document.querySelectorAll("p");
// pAll[2].style.backgroundColor = "blue";

//mengubah node root
// const p4 = document.getElementsByTagName("p");
// p4[3].style.backgroundColor = "cyan";

const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p");
p4[0].style.backgroundColor = "orange";