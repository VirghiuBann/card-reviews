const reviews = [
    {
        id: 1,
        name: "Teresa Koch",
        job: "District Communications Coordinator",
        img: "https://picsum.photos/id/237/200",
        text: "Nemo expedita et aut doloremque libero. Dignissimos laboriosam rerum fugit possimus. Qui omnis rerum neque natus possimus atque quam excepturi fuga. Ut ex dolorum sunt accusamus placeat consectetur aut neque. Quis porro possimus nulla qui reprehenderit et qui.",
    },
    {
        id: 2,
        name: "Gordon Hane",
        job: "Forward Identity Analyst",
        img: "https://picsum.photos/id/100/200",
        text: "Quae quam consequatur minima veniam numquam natus sed. Nobis dolore eligendi nemo voluptatum soluta aut et et pariatur. Fugiat laudantium rerum odio velit placeat ut voluptatem cumque. Commodi ipsam nulla aut.",
    },
    {
        id: 3,
        name: "Maryann Weber",
        job: "Principal Tactics Administrator",
        img: "https://picsum.photos/id/1016/200",
        text: "Recusandae adipisci enim omnis praesentium ipsam officiis soluta pariatur. Qui ducimus iure sunt beatae. Delectus sunt natus aspernatur nisi officia natus. Et totam velit ex blanditiis est dicta nemo quidem.",
    },
    {
        id: 4,
        name: "Leland Yost",
        job: "Human Division Associate",
        img: "https://picsum.photos/id/1084/200",
        text: "Inventore ut tempore doloribus reiciendis sed dolore modi architecto dolore. Dolor eaque quia repellendus natus vitae voluptatem ea. Voluptatum voluptatem in recusandae quo natus dolores sapiente saepe.",
    },
    {
        id: 5,
        name: "Orlando Schmeler",
        job: "Product Metrics Officer",
        img: "https://picsum.photos/200",
        text: "Nemo quae tempora tempore ea assumenda quibusdam aut. Dolores voluptas sunt nobis cum aut rerum quibusdam laborum reiciendis. Perferendis voluptatem error ut maxime dolorum deleniti similique asperiores quis.",
    },
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("image");

const prevBtn = document.querySelector(".prev-btn");
const nexBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
const lengthReviews = reviews.length;

showReview(currentItem);

nexBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem <= lengthReviews - 1) {
        showReview(currentItem);
    } else {
        currentItem = 0;
    }
});
prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem >= 0) {
        showReview(currentItem);
    } else {
        currentItem = lengthReviews - 1;
    }
});

randomBtn.addEventListener("click", () => {
    const currentItem = Math.floor(Math.random() * lengthReviews);
    showReview(currentItem);
});

function showReview(itemIndex) {
    const item = reviews[itemIndex];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
