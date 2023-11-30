// De selectors
const page = document.querySelector("#page");
const infoBox = document.querySelector("#infoBox");

// deze variabele checkt of het 18u is geweest en geeft "true" of "false" terug
const isEvening = new Date().getHours() >= 18;

// Dit is het bijgeleverde object (de data)
const batman = {
    day: {
        name: "Bruce Wayne",
        job: "Retired",
        residence: "Wayne Manor, Gothem City",
        "best friend": "Alfred",
        image: "https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg",
    },
    night: {
        name: "Batman",
        job: "Vigilante",
        residence: "The bat cave",
        "best friend": "Jim Gordon",
        vehicle: "Bat mobile",
        image: "https://www.wallofcelebrities.com/celebrity/batman/pictures/xxlarge/batman_1825668.jpg",
    },
};

const head = document.createElement("h1");
const image = document.createElement("img");
const job = document.createElement("p");
const residence = document.createElement("p");
const best = document.createElement("p");

if (isEvening) {
    head.innerText = batman.night.name;
    image.src = batman.night.image;
    job.innerText = "\n job: \n" + batman.night.job;
    residence.innerText = "\n residence: \n" + batman.night.residence;
    best.innerText = "\n best-friend: \n " + batman.night["best friend"];
} else {
    head.innerText = batman.day.name;
    image.src = batman.day.image;
    job.innerText = "\n job: \n" + batman.day.job;
    residence.innerText = "\n residence: \n" + batman.day.residence;
    best.innerText = "\n best-friend:\n " + batman.day["best friend"];
}

infoBox.append(head, job, residence, best);
page.appendChild(image);