const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/cute-blue-tyrannosaurus-rex_138676-2073.jpg?w=900&t=st=1706062866~exp=1706063466~hmac=65903ce4d661eb5a5f0bfb6376de17109f5069754b4c7163be99d746fb97fa36",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://img.freepik.com/premium-vector/tyrannosaurus-rex-illustration_131928-10.jpg?w=900"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/cute-dinosaur-playing-guitar-music-cartoon-vector-icon-illustration-animal-technology-icon-isolated_138676-4729.jpg?w=900&t=st=1706063720~exp=1706064320~hmac=09451cf82df7b8cc89a59301cc60e4a5b8869ea0bd91f4f7eebc448154700924"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/drawn-baby-dinosaur-illustrated_23-2148955342.jpg?w=900&t=st=1706063022~exp=1706063622~hmac=81bc5e0b25f9d111104bf6da847a89381550849cde6e224b16791a7210b40737"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://img.freepik.com/free-photo/cute-kitten-sitting-staring-with-playful-curiosity-charming-soft-generated-by-artificial-intelligence_188544-130428.jpg?t=st=1706064399~exp=1706067999~hmac=5a62658511ca5676ae4bffe214dcab83ef636a66826c05ce97d24e8b17905035&w=1380"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/tyrannosaurus-cartoon-character-isolated_1308-132648.jpg?w=900&t=st=1706063404~exp=1706064004~hmac=fe20aa82f62e5fa67f0698d1876b35c0cb93fce3d4755d6fc5ee8c2a367d86a7"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://img.freepik.com/premium-photo/beautiful-cat-near-new-year-tree_563354-250.jpg?w=900"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2016/04/05/23/00/dinosaur-1310676_1280.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://img.freepik.com/free-photo/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface_181624-35913.jpg?w=900&t=st=1706064551~exp=1706065151~hmac=17ec5bfcddbd6483e2407adf10743e90b57f65e709b99c3919f5a064139ac9ad"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://img.freepik.com/premium-psd/dinosaur-with-white-background-word-dinosaur-it_410516-129054.jpg?w=900"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/cute-dinosaur-standing-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-6534.jpg?w=900&t=st=1706063470~exp=1706064070~hmac=0c95b3b6e2462c5732612050289409da48a202bc7422279da5fe42f3a613028e"
    }
  ];

  //for loops to loop through array

//pets.forEach(pet => console.log(pet.type));

//for (const pet of pets) {
    //console.log(pet.specialSkill);
//}


//get the cards on the DOM
  const cardsOnDom = (pets) => {
  let domString = "";
  for (const pet of pets) {
  
    domString += `<div class="card" style="width: 18rem;">
  <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
  <div class="card-body">
    <h5 class="card-title"${pet.name}></h5>
    <p class="card-text">${pet.specialSkill}</ p> 
    <p class="card-text">${pet.color}</p>
    <p class="card-text">${pet.type}</p>
    <button class="btn btn-danger" id="delete"${pet.id}>Delete</button>
  </div>
</div>`;
  }

  //Render to DOM utility function
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

renderToDom("#app", domString);

};

//target pet buttons on the DOM
const catsButton = document.querySelector("#catsButton");
const dogsButton = document.querySelector("#dogsButton");
const dinosButton = document.querySelector("#dinosButton");
const allButton = document.querySelector("#allButton");

//Event listeners for the buttons

// cat,dog and dino button Event Listener

catsButton.addEventListener("click", (e) => {
  if (e.target.id.includes("cat")) {
    const filterCats = pets.filter((pet) => pet.type === "cat");
    cardsOnDom(filterCats);
  }
});

dogsButton.addEventListener("click", (e) => {
  if (e.target.id.includes("dog")) {
    const filterDogs = pets.filter((pet) => pet.type === "dog");
    cardsOnDom(filterDogs);
  }
});

dinosButton.addEventListener("click", (e) => {
  if (e.target.id.includes("dino")) {
    const filterDinos = pets.filter((pet) => pet.type === "dino");
    cardsOnDom(filterDinos);
  }
});

// #allButton event listener
allButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

//target form on the DOM
const form = document.querySelector('form');

//function that grabs values from the form

const createNewPet = (e) => {
  e.preventDefault(); // EVERY TIME YOU CREATE A FORM

  const createNewObject = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    image: document.querySelector("#image").value
  }

  pets.push(createNewObject);
  cardsOnDom(pets);
  form.reset();
}

// 3. Add an event listener for the form submit and pass it the function (callback)
form.addEventListener('submit', createNewPet);


const app = document.querySelector("#app");

// 2. Add an event listener to capture clicks

app.addEventListener('click', (e) => {
  // console.log(e.target.id);
  
// 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11
    const [ , id] = e.target.id.split("--");

// 4. add logic to remove from array
    // .findIndex is an array method
    const index = pets.findIndex(e => e.id === Number(id));

    // .splice modifies the original array
    pets.splice(index, 1);
    

// 5. Repaint the DOM with the updated array
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
  // events(); // ALWAYS LAST
}


startApp();
