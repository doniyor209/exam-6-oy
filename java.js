import { movies } from "./movies.js";

const input = document.getElementById("input");
const select = document.getElementById("select");
const select2 = document.getElementById("select2");
const ota = document.getElementById("ota");


function films(malumot) {
    ota.innerHTML = "";

    malumot.map(kino => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
         <img src="./img/1200x675mf.jpg.png" alt="" style="margin-top: 20px;">
        <h3> <br>
            ${kino.title}</h3>
            <h5>${kino.score} |${kino.year}|${kino.duration}</h5>
            <h5>${kino.genre}</h5>
          <button class="btn2">More info</button>
        `;
        ota.appendChild(div);
    })
}



films(movies);

input.addEventListener("input", () => {
    const o = movies.filter(kino => kino.title.toLowerCase().includes(input.value.toLowerCase()));
    films(o);
});


select.addEventListener("change", () => {
    if (select.value === "all") {
        films(movies)
    }else{
        const d = movies.filter((k)=> k.genre.includes(select.value));
        films(d)

    }
})

select2.addEventListener("change",()=>{
    if(select2.value=="a"){
        const d=movies.sort((d1,d2 )=>d1.title.localeCompare(d2.title))
        films(d);
    }else if(select2.value=="b"){
        const d=movies.sort((d1,d2 )=>d2.title.localeCompare(d1.title))
        films(d);
    }else if(select2.value=="c"){
        const d=movies.sort((d1,d2)=> d1.year-d2.year)
        films(d);
    } else if(select2.value=="d"){
        const d=movies.sort((d1,d2)=> d1.score-d2.score)
        films(d);
    }
});