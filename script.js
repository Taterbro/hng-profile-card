const HOBBIES = [
  "Photography",
  "Hiking",
  "Open Source",
  "Coffee Brewing",
  "Reading",
];
const DISLIKES = ["Slow Internet", "Smart fridges", "Mondays"];

const SOCIAL_LINKS = [
  { network: "twitter", label: "Twitter", url: "https://twitter.com" },
  { network: "github", label: "GitHub", url: "https://github.com" },
  {
    network: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com",
  },
];

// Render time
function updateTime() {
  const now = new Date();
  const formatted = now
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(" ", "");

  document.getElementById("time").textContent = formatted;
}

setInterval(updateTime, 1000);
updateTime();

// Render social links
const socialContainer = document.getElementById("social-links");

SOCIAL_LINKS.forEach((link) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = link.label;
  a.dataset.testid = `test-user-social-${link.network}`;

  li.appendChild(a);
  socialContainer.appendChild(li);
});

// Render hobbies
const hobbiesContainer = document.getElementById("hobbies");

HOBBIES.forEach((hobby) => {
  const li = document.createElement("li");
  li.textContent = hobby;
  hobbiesContainer.appendChild(li);
});

// Render dislikes
const dislikesContainer = document.getElementById("dislikes");

DISLIKES.forEach((dislike) => {
  const li = document.createElement("li");
  li.textContent = dislike;
  dislikesContainer.appendChild(li);
});
