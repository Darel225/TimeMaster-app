
// Horloge en temps réel
setInterval(() => {
  const now = new Date();
  document.getElementById('realtime-clock').textContent = now.toLocaleTimeString();
}, 1000);

// Date du jour
document.getElementById('date-output').textContent = new Date().toLocaleDateString('fr-FR', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// Compte à rebours
let countdownInterval;
function startCountdown() {
  clearInterval(countdownInterval);
  const target = new Date(document.getElementById('countdown-input').value);
  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown-output').textContent = "Terminé !";
      return;
    }
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    document.getElementById('countdown-output').textContent = `${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

// Minuteur
let timerInterval;
function startTimer() {
  clearInterval(timerInterval);
  let seconds = parseInt(document.getElementById('timer-input').value);
  timerInterval = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timerInterval);
      document.getElementById('timer-output').textContent = "Fini !";
      return;
    }
    document.getElementById('timer-output').textContent = seconds + "s";
    seconds--;
  }, 1000);
}

// Chronomètre
let chronoInterval, chronoTime = 0;
function startChrono() {
  if (chronoInterval) return;
  chronoInterval = setInterval(() => {
    chronoTime++;
    const hrs = String(Math.floor(chronoTime / 3600)).padStart(2, '0');
    const mins = String(Math.floor((chronoTime % 3600) / 60)).padStart(2, '0');
    const secs = String(chronoTime % 60).padStart(2, '0');
    document.getElementById('chrono-output').textContent = `${hrs}:${mins}:${secs}`;
  }, 1000);
}
function stopChrono() {
  clearInterval(chronoInterval);
  chronoInterval = null;
}
function resetChrono() {
  stopChrono();
  chronoTime = 0;
  document.getElementById('chrono-output').textContent = "00:00:00";
}
