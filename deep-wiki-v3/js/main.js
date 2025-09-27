
const pages = [
  "pages/page1.html",
  "pages/page2.html",
  "pages/page3.html"
];

document.querySelectorAll(".fake-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const domain = link.getAttribute("data-domain");

    // Display fake connecting screen
    document.body.innerHTML = `
      <div style="background:black;color:red;height:100vh;display:flex;justify-content:center;align-items:center;font-size:24px;">
        Connecting to ${domain}...
      </div>
    `;

    setTimeout(() => {
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      window.location.href = randomPage;
    }, 2000);
  });
});
