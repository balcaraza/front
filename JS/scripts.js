// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

const targets = document.querySelectorAll('.card[data-target]');
const content = document.querySelectorAll('.content [data-content]');

targets.forEach(target => {
  target.addEventListener('click', () => {
    targets.forEach(t => t.classList.remove('active'));
    target.classList.add('active');

    const targetContent = document.querySelector(target.dataset.target);
    content.forEach(c => c.classList.remove('active'));
    targetContent.classList.add('active');
  });
});
