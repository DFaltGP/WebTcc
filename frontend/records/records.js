const tbody = document.querySelector(".container #table tbody")

const url = "http://localhost:3333/sensors/allSensors";

const getData = async () => {

    try {

      const response = await fetch(url)
      const data = await response.json()
      return data
    
    } catch (error) {
    
      console.error(error)
    
    }

}

const createElement = (tag, innerText = '', innerHTML = '') => {
  const element = document.createElement(tag)

  if(innerText) {
    element.innerText = innerText
  }

  if(innerHTML) {
    element.innerHTML = innerHTML
  }

    return element;

}

const createRow = (sensor) => {
  const { name, content, ownerId, owner, sensor_id} = sensor;

  const contentSplit = content.split(" ")
  const consumo = contentSplit[0]
  const volume = contentSplit[0].replace("L", "") 
  const gastos = (volume*0.65)
  const periodo = contentSplit[2]
  const time = contentSplit[1]

  const tr = createElement('tr')
  const tdName = createElement('td', name)
  const tdPeriodo  = createElement('td', periodo)
  const tdConsumo = createElement('td', consumo)
  const tdTime = createElement('td', time)
  const tdVolume = createElement('td', `${volume*1000}dm`)
  const tdGastos = createElement('td', `R$${gastos.toFixed(2)}`)
  const tdOperation = createElement('td', 'ATIVO')
  const tdSituation = createElement('td', "SEM FALHAS")

  tr.appendChild(tdName)
  tr.appendChild(tdPeriodo)
  tr.appendChild(tdConsumo)
  tr.appendChild(tdTime)
  tr.appendChild(tdVolume)
  tr.appendChild(tdGastos)
  tr.appendChild(tdOperation)
  tr.appendChild(tdSituation)
  tbody.appendChild(tr)

}

const loadSensor = async () => {

  const sensors = await getData();

  sensors.forEach(sensor => {
     createRow(sensor);
  });

} 

loadSensor();

const print = document.querySelector("#print");

    print.addEventListener('click', (e) => {
     const head = document.querySelector('.head .fill');
     const printDiv = document.querySelector("#print-div")
        printDiv.classList.add('opac')
        head.classList.add('opac')
        window.print()
        setTimeout(()=>{
            printDiv.classList.remove('opac')
            head.classList.remove('opac')
        }, 10);
    });

const filter = document.querySelector('#filter');
const modal = document.querySelector('dialog');
const buttonCancel = document.querySelector('#cancel');

filter.onclick = function () {
    modal.showModal()
};

buttonCancel.onclick = function () {
    modal.close()
};