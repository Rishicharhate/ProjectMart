const container = document.getElementById("domainContainer");

domains.forEach(d => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${d.name}</h3>
    <p>${d.desc}</p>
    <p><b>Technologies Used:</b> ${d.tech}</p>
    <a class="btn"
       href="https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(d.msg)}"
       target="_blank">
       Contact
    </a>
  `;

  container.appendChild(card);
});
