class WaterFlowGraphic {
    constructor(ctx, config) {
       const newGraphic = new Chart(this.ctx, this.config)
    }

    get graphic() {
        return this.#createNewGrapich()
    }

    #createNewGrapich() {
     console.log("Deu certo")//código da criação de gráficos
    }
}

const ctx = document.querySelector("#myChart").getContext("2d")

const gradient = ctx.createLinearGradient(100, 0, 0, 400)
gradient.addColorStop(0, '#086ca7')
gradient.addColorStop(1, '#04827f')

const labels = [
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
]

const data = {
    labels,
    datasets: [{
        data: [315, 365, 348, 320, 248, 280, 260, 270, 231],
        label: "Consumo de água anual", //data pode ser puxado do banco de dados via http a axios
        fill: true,
        backgroundColor: gradient,
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
                        return finalValue + " Mil Litros"
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



    

const myChart = new Chart(ctx, config)

// ABA DOS GRÁFICOS 

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
            modeText.innerText = "Claro"; 
        } else {
            modeText.innerText = "Escuro"        
        }
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

    const recordLink = document.querySelector('#recordPage')
    recordLink.addEventListener('click', () => {
        location.href = 'http://127.0.0.1:5500/frontend/records/records.html'
    })
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



    
    