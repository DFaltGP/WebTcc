const sensorUrl = 'http://localhost:3333/sensors/allSensors';
const userUrl = 'http://localhost:3333/users/allUsers' ;

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
// ABA DOS GRÁFICOS

const ctx = document.querySelector("#myChart").getContext("2d")

const gradient1 = ctx.createLinearGradient(100, 0, 0, 400)
gradient1.addColorStop(0, '#086ca7')
gradient1.addColorStop(1, '#0f8f7f')

const gradient2 = ctx.createLinearGradient(100, 0, 0, 400)
gradient2.addColorStop(0, '#e6fa0a')
gradient2.addColorStop(1, '#fa520a')

const labels = [];

const data = {
    labels,
    datasets: [{
        data: [], 
        label: "Consumo diário", 
        fill: true,
        backgroundColor: gradient1,
    },
    {
        data: [], 
        label: "Desperdício diário", 
        fill: true,
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
                        return finalValue + " L/min"
                    }
                }
            }
        },
        plugins: {
            customCanvasBackgroundColor: {
              color: '#f8f8ff', // cor de fundo do background
            },
    },
}, 
}

// ABA DE MANIPULAÇÃO DO GRÁFICO PELO USUÁRIO
// const loadSensorData = async () => {

    //     const sensors = await getData();
    
    //     sensors.forEach(sensor => {
    //         data.datasets[0].data.push(sensor.content.split(" ")[0].replace("L", ""))
    //         data.datasets[1].data.push((sensor.content.split(" ")[0].replace("L", ""))*0.6)
    //     })
    
    //     myChart.update()
    
    // }
    
    // const loadSensorLabel = async () => {
    
    //     const sensors = await getData();
    
    //     sensors.forEach(sensor => {
    //         labels.push(sensor.name)
    //     })
    
    //     myChart.update()
    
// }

const changeGraphType = () => {
    if(config.type == 'bar') {
        config.type = 'line'
    } else {
        config.type = 'bar'
    }

    myChart.update()

}

const switchFillMode = () => {
    data.datasets.forEach(graph => {
        if (graph.fill == false) {
            graph.fill = true
        } else {
            graph.fill = false
        }
    });

    myChart.update()

}

    const userSelect = document.querySelector('#users-select')

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

      async function refreshGraph(option) {
        const sensors = await getSensorData();
        
        sensors.forEach(sensor => {
            if(option.value == sensor.owner.name) {
                data.datasets[0].data.push(sensor.content.split(" ")[0].replace("L", ""))
                data.datasets[1].data.push(sensor.content.split(" ")[0].replace("L", "")*0.33)
                labels.push(sensor.name)
            }
        })
    
        console.log(option.value)
        myChart.update()
    }
      
    loadUser();

// ABA DA NAV-BAR

const myChart = new Chart(ctx, config);
 myChart.update();

const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    searchInput = body.querySelector(".search-box input"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    links = body.querySelector(".sidebar li .icon");

    modeSwitch.addEventListener('click', () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")) {
            modeText.innerText = "Claro"
            config.options.plugins.customCanvasBackgroundColor.color = "#242526"
        } else {
            modeText.innerText = "Escuro" 
            config.options.plugins.customCanvasBackgroundColor.color = "#f8f8ff"
        }

        myChart.update()
    
    })

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle("close")
    })

    searchBtn.addEventListener('click', () => {
        sidebar.classList.remove("close")
    }) //lembre de adiiconar esse efeito aos demais botoes

    links.addEventListener('click', () => {
        sidebar.classList.remove('close')
    })















    // const recordLink = document.querySelector('#recordPage')
    // recordLink.addEventListener('click', () => {
    //     location.href = 'http://127.0.0.1:5500/frontend/records/records.html'
    // })

    // searchInput.addEventListener('input',(search) => {
    //     const dataBase = ["data1","data2","data3"...];
    //     const res = [];
    //     for(let data of dataBase) {
    //         if(search === data){
    //             res.push(search)
    //             console.log(res)
    //         }
    //     }
    // })




    
    