const container = document.querySelector("#container");
let famousPeopleName;
let famousPeopleWorth;
let famousPeopleSource;
let famousPeopleImage;
let famousPeopleCard;
let famousPeopleBtn;
let famousPeopleBr;

let newArray = json_ar.map((obj) => {
    return {
        name: obj.name,
        worth: obj.worth,
        source: obj.source,
        image: obj.image
    };
})

function start(obj) {
    for (let i = 0; i < obj.length; i++) {
        let h3 = document.createElement("h3");
        h3.className = "famousPeopleName";
        let h5 = document.createElement("h5");
        h5.className = "famousPeopleWorth";
        let p = document.createElement("p");
        p.className = "famousPeopleSource";
        let img = document.createElement("img");
        img.className = "famousPeopleImage";
        let br = document.createElement("br");
        br.className = "famousPeopleBr";
        let btn = document.createElement("button");
        btn.className = "famousPeopleBtn";
        btn.innerText = "Click here to remove";
        let card = document.createElement("div");
        card.className = "card";
        let containerArray = [h3, h5, p, img,br, btn];
        containerArray.forEach(element => {
            card.appendChild(element);
        });
        container.appendChild(card);
    }
    famousPeopleName = document.querySelectorAll(".famousPeopleName");
    famousPeopleWorth = document.querySelectorAll(".famousPeopleWorth");
    famousPeopleSource = document.querySelectorAll(".famousPeopleSource");
    famousPeopleImage = document.querySelectorAll(".famousPeopleImage");
    famousPeopleBr = document.querySelectorAll(".famousPeopleBr");
    famousPeopleBtn = document.querySelectorAll(".famousPeopleBtn");
    let count = 0;
    obj.forEach((w) => {
        for (const [kay, value] of Object.entries(w)) {
            switch (kay) {
                case "name":
                    famousPeopleName[count].innerText = value;
                    break;
                case "worth":
                    famousPeopleWorth[count].innerText = value;
                    break;
                case "source":
                    famousPeopleSource[count].innerText = value;
                    break;
                case "image":
                    famousPeopleImage[count].src = value;
                    break;
                default:
                    "";
                    break;
            }
        }
        count++;
    });
}

    start(newArray)



famousPeopleBtn = document.querySelectorAll(".famousPeopleBtn");

let filterArray;
famousPeopleBtn.forEach((element) => {
    
    element.addEventListener("click", (evt)=> {
        switch (evt.path[1].childNodes[0].innerText){
            case "Bill Gates":
                filterArray= newArray.filter((evt2)=>{
                    evt2.name === "Bill Gates" ? evt.path[1].remove() : ''
                    return evt2.name !== "Bill Gates" 
                }) 
                break;
                case "Warren Buffett":
                filterArray= newArray.filter((evt2)=>{
                    evt2.name === "Warren Buffett" ? evt.path[1].remove() : ''
                    return evt2.name !== "Warren Buffett" 
                }) 
                break;
                case "Mark Zuckerberg":
                filterArray= newArray.filter((evt2)=>{
                    evt2.name === "Mark Zuckerberg" ? evt.path[1].remove() : ''
                    return evt2.name !== "Mark Zuckerberg" 
                }) 
                break;
                case "Larry Ellison":
                filterArray= newArray.filter((evt2)=>{
                    evt2.name === "Larry Ellison" ? evt.path[1].remove() : ''
                    return evt2.name !== "Larry Ellison"
                }) 
                break;
                case "Michael Bloomberg":
                filterArray= newArray.filter((evt2)=>{
                    evt2.name === "Michael Bloomberg" ? evt.path[1].remove() : ''
                    return evt2.name !== "Michael Bloomberg" 
                }) 
                break;
                default:
                    "";
                    break;
        }
       update(filterArray)
    })

})

function update(arr){
    console.log(arr)
    arr.forEach((w) => {
        console.log(count)

        for (const [key, value] of Object.entries(w)) {
            console.log(key)
            switch (key) {
                case "name":
                    famousPeopleName.innerText = value;
                    break;
                case "worth":
                    famousPeopleWorth.innerText = value;
                    break;
                case "source":
                    famousPeopleSource.innerText = value;
                    break;
                case "image":
                    famousPeopleImage.src = value;
                    break;
                default:
                    "";
                    break;
            }
        }
    count++
})
}

