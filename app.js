const container= document.querySelector("#container");
let famousPeopleName;
let famousPeopleWorth;
let famousPeopleSource;
let famousPeopleImage;
let famousPeopleCard;
let famousPeopleBtn;

let newArray = json_ar.map((obj) => {
    return {
        name: obj.name,
        worth: obj.worth,
        source: obj.source,
        image: obj.image
    };
})

function start(obj) {
    for (let i = 0; i< obj.newArray.length; i++) {
        let h3 = document.createElement("h3");
        h3.className = "famousPeopleName";
        let h5 = document.createElement("h5");
        h5.className = "famousPeopleWorth";
        let p = document.createElement("p");
        p.className = "famousPeopleSource";
        let img = document.createElement("img");
        img.className = "famousPeopleImage";
        let btn = document.createElement("button");
        btn.className = "famousPeopleBtn";
        famousPeopleBtn.innerText = "Click here to remove";
        let =card = document.createElement("div");
        card.className = "card";
        let containerArray = [h3, h5, p, img,btn];
        containerArray.forEach(element => {card.appendChild(element);    
        });
        container.appendChild(card);
    }
    famousPeopleName = document.querySelector(".famousPeopleName");
    famousPeopleWorth = document.querySelector(". famousPeopleWorth");
    famousPeopleImage = document.querySelector(".famousPeopleImage");
    famousPeopleBtn = document.querySelector(".famousPeopleBtn");
    let count =0;
    obj.newArray.forEach((w)=>{
        for(const [kay,value]of Object.entries(w)){
            switch(kay){
                case "name":
                    famousPeopleName[count].innerText=value;
                    break;   
                    case "worth":
                    famousPeopleWorth[count].innerText=value;
                    break; 
                    case "source":
                        famousPeopleSource[count].innerText=value;
                    break; 
                    case " image":
                        famousPeopleImage[count].src=value;
                    break; 
                    default:
                        "";
                        break; 
            }
        }
        count++;
    });
    setTimeout(()=>{
        container.style.opacity = 1;
    }, 1000);
}
start()