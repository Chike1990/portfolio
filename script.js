const DOMloader = document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  const loadContent = (section) => {
    contentDiv.innerHTML = "";
    switch (section) {
      case "about":
        contentDiv.innerHTML = `
                <h1>About Me</h1>
                <img src="chike.png" alt="My picture" class="profile-picture">
                <p>My various skills</p>
                <button class="download-cv" onclick="window.open('Chibuike_Uzoechina CV_2023.docx', '_blank');">Download my CV</button>
            `;
        break;
      case "experience":
        contentDiv.innerHTML = `
            <h1>Experience</h1>
            <p>Write about your experiences in UNN, Take2, Genesys, Microverse</p>
            `;
        break;
      case "projects":
        contentDiv.innerHTML = `
            <h1>Projects</h1>
            <p>Talk about Microverse projects, Take2 projects, NawillSchool, etc.</p>
            `;
        break;
      case "contact":
        contentDiv.innerHTML = `
            <h1>Contact Me</h1>
            <form>
                <input type="text" name="name" placeholder="Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <textarea name="message" placeholder="Type your message here" required>
                <button type="submit">Send Message</button>
            </form>
            `;
        break;
      default:
        contentDiv.innerHTML = `<h1> Welcome to my Portfolio</h1>`;
    }
  };

  loadContent("contact");
});

const navLists = document.querySelectorAll("nav li");
console.log(navLists)
navLists.forEach((li) => {
    console.log(li.innerContent)
  li.addEventListener("click", () => {
    DOMloader.loadContent(li.innerHTML);
  });
});
