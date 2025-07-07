//``

const form = document.querySelector(".form-roster");
const submit = document.querySelector(".submit-btn");

class Player {
  constructor(name, surname, position) {
    this.name = name;
    this.surname = surname;
    this.position = position;
  }
}

class Roster {
  constructor() {
    this.players = [];
    this.editIndex = null;
  }

  addPlayer(player) {
    const twoNames = player.name.toLowerCase().trim().replace(/\s+/g, " ");
    const twoSurnames = player.surname
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

    const isDuplicate = this.players.some((existingPlayer) => {
      const twoExistingNames = existingPlayer.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
      const twoExistingSurnames = existingPlayer.surname
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");

      return (
        twoExistingNames === twoNames && twoExistingSurnames === twoSurnames
      );
    });

    if (isDuplicate) {
      alert("This player already exists in the roster!");
      return;
    }

    if (this.editIndex === null) {
      this.players.push(player);
    } else {
      this.players[this.editIndex] = player;
      this.editIndex = null;
    }
    this.renderTable();
  }

  deletePlayer(index) {
    this.players.splice(index, 1);
    this.renderTable();
  }

  editPlayer(index) {
    const player = this.players[index];

    const inputName = document.querySelector(".name");
    const inputSurname = document.querySelector(".surname");
    const inputPosition = document.querySelector(".position");

    inputName.value = player.name;
    inputSurname.value = player.surname;
    inputPosition.value = player.position;

    this.editIndex = index;

    form.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      inputName.focus();
    }, 500);
  }

  saveToLocalStorage() {
    localStorage.setItem("roster", JSON.stringify(this.players));
  }

  loadFromLocalStorage() {
    const saveRoster = localStorage.getItem("roster");

    if (saveRoster) {
      this.players = JSON.parse(saveRoster);
      this.renderTable();
    }
  }

  renderTable() {
    const tBody = document.querySelector(".table-body");
    tBody.innerHTML = "";

    this.players.forEach((player, index) => {
      const row = document.createElement("tr");
      row.innerHTML = ` 
       <td>${index + 1}</td>
       <td>${player.name}</td>
       <td>${player.surname}</td>
       <td>${player.position}</td>
       <td><button class= "delete-btn" data-index= "${index}"><i class="fa-solid fa-trash"></i></button>
           <button class= "edit-btn" data-index= "${index}"><i class="fa-solid fa-pencil"></i></button>
       </td>
      `;
      tBody.appendChild(row);
    });

    const deleteButton = document.querySelectorAll(".delete-btn");
    deleteButton.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        this.deletePlayer(index);
      });
    });

    const editButton = document.querySelectorAll(".edit-btn");
    editButton.forEach((button) => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        this.editPlayer(index);
      });
    });
  }

  tableSmall() {
    return this.players.length <= 7;
  }

  tableFull() {
    return this.players.length >= 12;
  }
}

const roster = new Roster();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (roster.tableFull()) {
    alert("Roster full! You have reached the maximum number of players.");
    return;
  }

  const name = document.querySelector(".name").value.trim();
  const surname = document.querySelector(".surname").value.trim();
  const position = document.querySelector(".position").value;

  if (name && surname && position) {
    const newPlayer = new Player(name, surname, position);
    roster.addPlayer(newPlayer);
    form.reset();
  }
});

submit.addEventListener("click", () => {
  if (roster.tableSmall()) {
    alert("You need to add at least 8 players before submitting roster.");
  } else {
    alert(
      "Roster successfully submitted. We will contact you as soon as possible!"
    );
    roster.saveToLocalStorage();
    roster.players = [];
    roster.renderTable();
    form.reset();
  }
});
/////////////////////////////////////``
