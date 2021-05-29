/**Gortan Aldo, 0246090348, Završni projekt**/

const grafData = [
  {
    name: "GIGABYTE GeForce GTX 1650 OC",
    platform: "nVidia",
    information: 
    ["Memory: GDDR5",
    "VRAM: 4 GB",
      "Memory Bus Bandwith: 128 bit",
      "GPU Core Speed: 1695 MHz",
      "PSU Output Power Required: 300 W",
      "Maximal resolution: 7680x4320",
      "W/H/D: 69mm / 39mm / 167mm"],
    godiste: 2019,
    photo: "graf0.jpg",
    cijena: "1.365,47"
  },
  {
    name: "GIGABYTE GeForce GTX 1660 Ti",
    platform: "nVidia",
    information: 
    ["Memory: GDDR6",
    "VRAM: 6 GB",
      "Memory Bus Bandwith: 192 bit",
      "GPU Core Speed: 1800 MHz",
      "PSU Output Power Required: 450 W",
      "Maximal resolution: 7680x4320",
      "W/H/D: 80mm / 43mm / 180mm"],
    godiste: 2019,
    photo: "graf1.jpg",
    cijena: "2.976,72"
  },
  {
    name: "PALiT GeForce RTX 3070 GameRock",
    platform: "nVidia",
    information: 
    ["Memory: GDDR6",
    "VRAM: 8 GB",
      "Memory Bus Bandwith: 256 bit",
      "GPU Core Speed: 1850 MHz",
      "PSU Output Power Required: 650 W",
      "Maximal resolution: 7680x4320",
      "W/H/D: 146mm / 60mm / 304mm "],
    godiste: 2019,
    photo: "graf2.jpg",
    cijena: "2.976,72"
  },
  {
    name: "innoRD GeForce RTX 2060 Twin X2",
    platform: "nVidia",
    information: 
    ["Memory: GDDR6",
    "VRAM: 6 GB",
    "Memory Bus Bandwith: 192 bit",
    "GPU Core Speed: 1680 MHz",
    "PSU Output Power Required: 500 W",
    "Maximal resolution: 7680x4320",
    "W/H/D: 80mm / 112mm / 228mm"],
    godiste: 2019,
    photo: "graf3.jpg",
    cijena: "5.813,14"
  },
  {
    name: "Gigabyte Radeon RX67ooXT OC",
    platform: "AMD",
    information: 
    ["Memory: GDDR6",
    "VRAM: 12 GB",
      "Memory Bus Bandwith: 192 bit",
      "GPU Core Speed: 2321 MHz",
      "PSU Output Power Required: 650 W",
      "Maximal resolution: 7680x4320",
      "W/H/D: 64mm / 142mm / 267mm"],
    godiste: 2021,
    photo: "graf4.jpg",
    cijena: "9.443,33"
  },
  {
    name: "Powercolor Radeon RX6900XT Red Devil",
    platform: "AMD",
    information: 
    ["Memory: GDDR6",
    "VRAM: 16 GB",
      "Memory Bus Bandwith: 192 bit",
      "GPU Core Speed: 2340 MHz",
      "PSU Output Power Required: 850  W",
      "Maximal resolution: 7680x4320",
      "W/H/D: 62mm / 135mm / 320mm"],
    godiste: 2020,
    photo: "graf5.jpg",
    cijena: "15.550,00"
  },
  {
    name: "XFX Radeon RX550",
    platform: "AMD",
    information: 
    ["Memory: GDDR6",
    "VRAM: 2 GB",
      "Memory Bus Bandwith: 128 bit",
      "GPU Core Speed: 1203 MHz",
      "PSU Output Power Required: 450 W",
      "Maximal resolution: 4096x2160",
      "W/H/D: 121mm / 40mm / 170mm"],
    godiste: 2019,
    photo: "graf6.jpg",
    cijena: "1.221,11"
  }
];


/**KRAJ JSON-a**/




/**Pocetak JS-a**/


function age(godiste) {
  let calculatedAge = new Date().getFullYear() - godiste;
  if (calculatedAge == 1) {
    return "Par mjeseci";
  } else if (calculatedAge == 0) {
    return "Novo";
  } else { 
    return `${calculatedAge} godina`;
  }
}

function info(info) {
  return `
<h4>Informacije o predmetu:</h4>
<div class="lista">
<ul class="info-list">
${info.map(infoNatuknice => `<li>${infoNatuknice}</li>`).join("")}
</ul>
</div>
`;
}

function mainField(graf) {
  return `
    <div class="graficka">
    <img class="graf-photo" src="${graf.photo}">
    <h2 class="graf-name">${graf.name} <span class="platform">(${graf.platform})</span></h2>
    <p><strong>Starost:</strong> ${age(graf.godiste)}</p>
    ${graf.information ? info(graf.information) : ""}
    <h3>Cijena: ${graf.cijena} HRK</h3>
    </div>
  `;
}




document.getElementById("app").innerHTML = `
  <h1 class="app-title">Grafičke kartice u RH <br>(${grafData.length} komada)</h1>
  ${grafData.map(mainField).join("")}
  
`;