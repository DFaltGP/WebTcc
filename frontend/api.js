const sensorUrl = 'http://localhost:3333/sensors/allSensors';
const userUrl = 'http://localhost:3333/users/allUsers';
const userSelect  =  document.querySelector('#user-select')


    const getSensorData = async() => {
        
        try {
            
            const response = await fetch(sensorUrl)
            const dados = response.json()
            return dados

        } catch (error) {
            
            console.error(error)

        }

    }

    const getUserData = async() => {
        
        try {
            
            const response = await fetch(userUrl)
            const dados = response.json()
            return dados

        } catch (error) {
            
            console.error(error)

        }

    }

  // GRÁFICO CHART.JS

const ctx = document.querySelector("#myChart").getContext("2d")

const gradient1 = ctx.createLinearGradient(100, 0, 0, 400)
gradient1.addColorStop(0, '#0a7afa')
gradient1.addColorStop(1, '#086ca7')

const gradient2 = ctx.createLinearGradient(100, 0, 0, 400)
gradient2.addColorStop(0, '#e6fa0a')
gradient2.addColorStop(1, '#fa520a')

let labels = [];

let data = {
    labels,
    datasets: [{
        data: [], 
        label: "Consumo diário", 
        fill: false,
        backgroundColor: gradient1,
    },
    {
        data: [], 
        label: "Desperdício diário", 
        fill: false,
        backgroundColor: gradient2,
    }]
};

const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#f8f8ff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

const config = {
    type: 'bar', //tipo do gráfico (linha, pizza, barras)
    data: data,
    plugins: [plugin],
    options: {
        Response: true,
        radius: 4,
        hoverRadius: 8,
        scales: {
            y:{
                ticks: {
                    callback: function(value) {
                        let finalValue = value.toFixed(2)
                        return finalValue + " Litros"
                    }
                }
            }
        },
        plugins: {
            customCanvasBackgroundColor: {
              color: '#0a0a1e', // cor de fundo do background
            },
    },
}, 
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
  
  const createSelect = (user) => {
    const { id, name, sensor } = user;
  
    const optionName = createElement('option', name)
    
    userSelect.appendChild(optionName)
    
  }
  
  const loadUser = async () => {
  
    const users = await getUserData();
  
      users.forEach(user => {
       createSelect(user);
     });
  
  } 
  
  loadUser();

  async function refreshGraph(selectedUser) {

    data.datasets[0].data = [];
    data.datasets[1].data = [];
    labels.length = 0;

    try {

        const sensors = await getSensorData(); 
    
    sensors.forEach(sensor => {
        if(option.value == sensor.owner.name) {
            data.datasets[0].data.push(sensor.content.split(" ")[0].replace("L", ""))
            data.datasets[1].data.push(sensor.content.split(" ")[0].replace("L", "")*0.33)
            labels.push(sensor.name)
        }
    });

    myChart.update();

    } catch (error) {
        console.error(error)
    }

}

userSelect.addEventListener('change', (event) => {
 const selectedUser = event.target.value
 refreshGraph(selectedUser)
})

const myChart = new Chart(ctx, config); 

myChart.update();