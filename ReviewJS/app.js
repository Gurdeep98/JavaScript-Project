const reviews = [
    {
      id: 1,
      name: "billie anderson",
      job: "the boss",
      img:
        "https://images.squarespace-cdn.com/content/v1/55d20f53e4b0412fa277ca79/1590680158438-F8BJFL90YQ57GZQVXLPZ/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/nile+scott+studios+actor+headshot+headshots+boston+nyc+providence+new+york+portrait+003+%2845%29.JPG?format=1500w",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
      
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://images.squarespace-cdn.com/content/v1/55d20f53e4b0412fa277ca79/1590680150478-VM2NGV2PY0ZNA1R1HOHM/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/nile+scott+studios+actor+headshot+headshots+boston+nyc+providence+new+york+portrait+003+%2828%29.JPG?format=2500w",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
  ];

const img= document.getElementById("person-img");
const author= document.getElementById("author");
const job= document.getElementById("job");
const info= document.getElementById("info");

const prevbtn= document.querySelector(".prev-btn")
const nextbtn= document.querySelector(".next-btn")

const randombtn= document.querySelector(".random-btn")

let currentitem=0;

window.addEventListener("DOMContentLoaded", function()
    {
        showPerson();

    }
);

function showPerson()
{
    const item=reviews[currentitem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

nextbtn.addEventListener("click", function() {
    currentitem++;
    if(currentitem>reviews.length-1)currentitem=0;
    showPerson();

});

prevbtn.addEventListener("click", function() {
    currentitem--;
    if(currentitem<0)currentitem=reviews.length-1;
    showPerson();

});

randombtn.addEventListener("click", function() {
    currentitem=Math.floor(Math.random()*reviews.length);
    console.log("hello");
    showPerson();

});



