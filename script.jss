const addBtn = document.getElementById("addBtn");
const reminderInput = document.getElementById("reminderInput");
const reminderTime = document.getElementById("reminderTime");
const reminderList = document.getElementById("reminderList");

let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

// Function to display reminders
function displayReminders() {
  reminderList.innerHTML = "";
  reminders.forEach((reminder, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${reminder.text}</strong><br>
      <small>⏰ ${new Date(reminder.time).toLocaleString()}</small>
      <button class="delete-btn" onclick="deleteReminder(${index})">X</button>
    `;
    reminderList.appendChild(li);
  });
}

// Add reminder
addBtn.addEventListener("click", () => {
  const text = reminderInput.value.trim();
  const time = reminderTime.value;

  if (!text || !time) {
    alert("Please enter both a reminder and a time!");
    return;
  }

  reminders.push({ text, time });
  localStorage.setItem("reminders", JSON.stringify(reminders));

  reminderInput.value = "";
  reminderTime.value = "";

  displayReminders();
});

// Delete reminder
function deleteReminder(index) {
  reminders.splice(index, 1);
  localStorage.setItem("reminders", JSON.stringify(reminders));
  displayReminders();
}

// Show saved reminders on page load
displayReminders();
