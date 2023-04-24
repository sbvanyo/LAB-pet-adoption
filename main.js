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
      imageUrl: "https://images.dinosaurpictures.org/Majungasaurus-_Phil-Brownlow_a382.jpg",
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
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg"
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
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/210909080918-02-new-dinosaur-ulughbegsaurus-uzbekistanensis-scn.jpg?q=x_186,y_106,h_1183,w_2103,c_crop"
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
      imageUrl: "https://i.guim.co.uk/img/media/fb91875f2fac1ffb5fe469e0d7a0d9b228c0fe41/46_0_3249_1949/master/3249.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=415782f30413f1678e5c0f7a0f3fe0cd"
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
      imageUrl: "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
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
      imageUrl: "https://media.npr.org/assets/img/2021/04/09/llukalkan1.rgb-8d853bf7a5fffaa55e0e37fa850449b8094ac7dd.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://images.all-free-download.com/images/graphiclarge/cat_small_cat_cats_eye_214515.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.sciencenews.org/wp-content/uploads/2023/03/032923_JB_dino-lips_feat.jpg"
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
      imageUrl: "https://www.purina.co.nz/sites/default/files/2020-12/7-Awesome-Black-Cat-Breeds-Youll-Want-to-Take-HomeTEASER_0.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://e0.pxfuel.com/wallpapers/273/41/desktop-wallpaper-dinosaur-background-dinosaur-cute-dinosaur-and-dinosaur-skeleton-cute-cartoon-dinosaurs.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://media.istockphoto.com/id/1290233518/photo/ginger-cat-portrait.jpg?b=1&s=170667a&w=0&k=20&c=D2ObzKSLDeuKyD5as2m_4UcdaPimE_uosgqWhVdt5n0="
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
      imageUrl: "https://cdn.pixabay.com/photo/2020/08/14/00/49/dog-5486679_960_720.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.all-free-download.com/images/graphiclarge/cat_cat_face_cats_eyes_240527.jpg"
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
      imageUrl: "https://images.pexels.com/photos/161959/prehistoric-times-urtier-museum-exhibit-161959.jpeg?cs=srgb&dl=pexels-pixabay-161959.jpg&fm=jpg"
    }
  ];



// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


// get the cards on the DOM
const cardsOnDom = (array) => {
  
  let domString = "";
  for (const pet of array) {

    if (pet.type === "cat") {
      domString += `<div class="cat-card" style="width: 18rem;">
      <h5 class="card-title">${pet.name}</h5>
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
      <div class="card-body">
        <p>Color: ${pet.color}</p>
        <p class="card-text">Special Skill: ${pet.specialSkill}</p>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
      <p id="pet-type">i'm a ${pet.type}!</p>
    </div>`;
    } 
    
    else if (pet.type === "dog") {
      domString += `<div class="dog-card" style="width: 18rem;">
      <h5 class="card-title">${pet.name}</h5>
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
      <div class="card-body">
        <p>Color: ${pet.color}</p>
        <p class="card-text">Special Skill: ${pet.specialSkill}</p>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
      <p id="pet-type">i'm a ${pet.type}!</p>
    </div>`;
    } 
    
    else if (pet.type === "dino") {
      domString += `<div class="dino-card" style="width: 18rem;">
      <h5 class="card-title">${pet.name}</h5>
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
      <div class="card-body">
        <p>Color: ${pet.color}</p>
        <p class="card-text">Special Skill: ${pet.specialSkill}</p>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
      <p id="pet-type">i'm a ${pet.type}!</p>
    </div>`;
    } 
    
    else {
      domString += `<div class="card" style="width: 18rem;">
      <h5 class="card-title">${pet.name}</h5>
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
      <div class="card-body">
        <p>Color: ${pet.color}</p>
        <p class="card-text">Special Skill: ${pet.specialSkill}</p>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
      <p id="pet-type">i'm a ${pet.type}!</p>
    </div>`;
    }

  }

  renderToDom("#app", domString);

};

cardsOnDom(pets);



// function to filter pets by type
const filter = (array, typeString) => {
  const petArray = [];

  // array.forEach((pet) => {
  //   if (pet.type === typeString) {
  //     petArray.push(pet);
  //   }
  // });

  for (const pet of pets) {
    if (pet.type === typeString) {
      petArray.push(pet);
    }
  }

  return petArray;
};

//EVENTS

// 1. Target buttons on the DOM
const showCats = document.querySelector("#cat-btn");
const showDogs = document.querySelector("#dog-btn");
const showDinos = document.querySelector("#dino-btn");
const showAll = document.querySelector("#all-btn");

// 2. Add click event to show all the instuctors on button click using the function we created above
showAll.addEventListener('click', () => {
  cardsOnDom(pets);
});

// 3. Add click event to filter by animal type on button click
showCats.addEventListener('click', () => {
  const cats = filter(pets, "cat");
  console.log(cats);
  cardsOnDom(cats);
});

showDogs.addEventListener('click', () => {
  const dogs = filter(pets, "dog");
  console.log(dogs);
  cardsOnDom(dogs);
});

showDinos.addEventListener('click', () => {
  const dinos = filter(pets, "dino");
  console.log(dinos);
  cardsOnDom(dinos);
});


// ******************** //
// ****** CREATE ****** //
// ******************** //

// 1. select/target the form on the DOM
const form = document.querySelector("#form");

// 2. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new pet

const createPet = (e) => {
  e.preventDefault();

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#nameInput").value,
    color: document.querySelector("#colorInput").value,
    specialSkill: document.querySelector("#specialSkillInput").value,
    type: document.querySelector("#typeInput").value,
    imageUrl: document.querySelector("#imageInput").value
  }

pets.unshift(newPetObj);
cardsOnDom(pets);
form.reset();

};

// 3. Add an event listener for the form submit and pass it the function (callback)

form.addEventListener('submit', createPet);


// ******************** //
// ****** DELETE ****** //
// ******************** //

// Here we will be using event bubbling
// 1. Target the app div
const app = document.querySelector("#app");

// 2. Add an event listener to capture clicks
app.addEventListener("click", (e) => {
// 3. check e.target.id includes "delete"
  if(e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
// 4. add logic to remove from array
    const index = pets.findIndex(pet => pet.id === Number(id));
    //.splice modifies the original array
    pets.splice(index, 1);
// 5. Repaint the DOM with the updated array
    cardsOnDom(pets);
  }
});
