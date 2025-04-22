let principies = [
    {
        number: "01",
        text: "Использование только качественного материала и фурнитуры"
    },
    {
        number: "02",
        text: "Клиентоориентированность и мобильность"
    },
    {
        number: "03",
        text: "Жесткий контроль качества и доставки продукции"
    },
    {
        number: "04",
        text: "Мгновенное реагирование на требование заказчиков"
    },
    {
        number: "05",
        text: "Многопрофильное производство по принципу “все включено”"
    }
]
let names = ["Контакты","Входная группа и хранение", "Кухонная зона", "Мягкая мебель", "Офисная мебель", "Мебель для гостинной", "Детские комнаты", "Медицинская мебель", "Торгово-выставочное оборудование"]

function addPrincipies(principies){
    let principeDiv = document.body.querySelector(".principies-text")
    for(let i=0; i<principies.length; i++){
        let principe = document.createElement("div")
        principe.innerHTML = `
                                <div class="gray-line"></div>
                            <p class="number">${principies[i].number}</p>
                            <p class="text-content">${principies[i].text}</p>`
        principeDiv.appendChild(principe)
    }
}
addPrincipies(principies)


function addGridAreas(){
    document.querySelectorAll('.making-content > *').forEach(el => {
        if (el.classList.length > 0) {
            el.style.gridArea = el.classList[0];
        }
    });    
}
addGridAreas()

function addOverlay(names){
    let i = 0;
    document.querySelectorAll('.making-content > div').forEach(el => {
        if (el.classList.contains("text-container")) return;
        let overlay = document.createElement("div")
        overlay.innerHTML = `
        <div class="overlay">
            <p class="name">${names[i]}</p>
            <div class="more-link">
                <a href="#">Подробнее</a>
                <div class="arrow"></div>
            </div>
        </div>
        `;

        el.appendChild(overlay);
        i++;
    });    
}
addOverlay(names)