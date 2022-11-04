let skills = [];
let workExp = [];
let academy = [];

const skillContainerQuery = document.querySelector(".iconsTecnologias");
// DOM
// HABILIDADES
const rendSkills = (array) => {
  skillContainerQuery.innerHTML = "";
  array.forEach((skill) => {
    const divSkills = document.createElement("div");
    divSkills.setAttribute("data-id", skill.name);
    divSkills.innerHTML = `
        <div class="skillBox">
        <h5 class="skillName"> ${skill.name} </h3>
        <img src="${skill.imgSrc}" title="${skill.name}" alt="${skill.name}" class="skillImg"></a>
        </div>
        `;
    divSkills.className = "card";
    skillContainerQuery.append(divSkills);
  });
};

// SWAP entre Estudios y Experiencia
const DOMBotonSwap = document.querySelector(".swapButton");
const expContainerQuery = document.querySelector(".experiences");
const expTitle = document.querySelector(".titleContent");

const rendAcademy = (array) => {
  expContainerQuery.innerHTML = "";
  expTitle.innerHTML = `<h3><u>HISTORIAL ACADÉMICO</u></h3>`;
  array.forEach((exp) => {
    const divExps = document.createElement("div");
    divExps.setAttribute("data-id", exp.puesto);
    divExps.innerHTML = `
    <br>
      <h3 class="expPuesto"> ${exp.puesto}</h3>
    <div class="expContent">
      <p><b>${exp.empresa}</b> (${exp.fecha})</p>
      <input type="checkbox" class="checkButton" id="check1" />
      <p class="hiddenText">Analisis de sistemas</p>
      <label for="check1"></label>
    </div>
        `;
    divExps.className = "cardExp";
    expContainerQuery.append(divExps);
  });
};

const rendExp = (array) => {
  expContainerQuery.innerHTML = "";
  expTitle.innerHTML = `<h3><u>EXPERIENCIA LABORAL</u></h3>`;
  array.forEach((exp) => {
    const divExps = document.createElement("div");
    divExps.setAttribute("data-id", exp.puesto);
    divExps.innerHTML = `
    <br>
      <h3 class="expPuesto"> ${exp.puesto}</h3>
    <div class="expContent">
      <p><b>${exp.empresa}</b> (${exp.fecha})</p>
      <input type="checkbox" class="checkButton" id="check1" />
      <p class="hiddenText">Analisis de sistemas</p>
      <label for="check1"></label>
    </div>
        `;
    divExps.className = "cardExp";
    expContainerQuery.append(divExps);
  });
};

function swapButtons() {
  if ((document.getElementById("swapExp").className == "swapButton")) {
    console.log(document.getElementById("swapExp").className);
    document.getElementById("swapExp").className = "academyButton";
    console.log(document.getElementById("swapExp").className);
    return rendAcademy(academy);
  } else if ((document.getElementById("swapExp").className == "academyButton")) {
    document.getElementById("swapExp").className = "swapButton";
    return rendExp(workExp);
  }
}
DOMBotonSwap.addEventListener("click", swapButtons);

// FETCH
const getAllSkills = async () => {
  const response = await fetch("icons.json");
  const respondeExp = await fetch("workExp.json");
  const responseAcd = await fetch("study.json");
  const data = await response.json();
  const dataExp = await respondeExp.json();
  const dataAcd = await responseAcd.json();
  skills = data;
  workExp = dataExp;
  academy = dataAcd;
  rendSkills(skills);
  rendExp(workExp);
};
getAllSkills();
