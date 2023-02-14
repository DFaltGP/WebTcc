const dataBase = [
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "400",
        situation: true,
    },
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "300",
        situation: true,
    },
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "200",
        situation: true,
    },
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "500",
        situation: true,
    },
    {
        periodo: "23/11",
        consumo: "43",
        time: "180",
        spends: "100",
        situation: true,
    }
];

    // const records = document.querySelector(".container .records")
    // function render(dataBase) {
    //     let list = '';
    //     if(dataBase.lenght <= 0) {
    //         list += `<div class="results">Nenhum relatório encontrado</div>`
    //     } else {
    //         dataBase.forEach((dataBase, index) => {
    //             list += `
    //             <div class="results">
    //             ${dataBase.periodo}     ${dataBase.consumo}    ${dataBase.time}     ${dataBase.spends}     ${dataBase.situation}
    //             </div>
    
    //             `
    //         })
    //     }

    //     records.innerHTML = list;

    // }

    // render(dataBase)

    
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
    })

const filter = document.querySelector('#filter')
const modal = document.querySelector('dialog')
const buttonCancel = document.querySelector('#cancel')

filter.onclick = function () {
    modal.showModal()
}

buttonCancel.onclick = function () {
    modal.close()
}