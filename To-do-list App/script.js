// Ambil elemen dari DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Muat data dari localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Event tombol tambah
addBtn.addEventListener('click', addTask);

// Event tekan Enter
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Fungsi untuk menambahkan task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Tugas tidak boleh kosong!');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <input class="task-checkbox" type="checkbox">
    <span class="task">${taskText}</span>
    <button class="delete-btn"><i class="fas fa-trash"></i></button>
  `;

  // Event klik checkbox untuk selesai
  li.querySelector('.task-checkbox').addEventListener('change', function() {
    li.classList.toggle('completed', this.checked);
    saveTasks();
  });

  // Event klik untuk hapus
  li.querySelector('.delete-btn').addEventListener('click', function() {
    if(confirm(`Apakah anda yakin akan menghapus tugas ${taskText} ?`)) {
        li.remove();
        saveTasks();
    }
  });

  taskList.appendChild(li);
  taskInput.value = '';
  saveTasks();
}

// Simpan ke localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    tasks.push({
      text: li.querySelector('.task').textContent,
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Muat data dari localStorage
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => {
    const li = document.createElement('li');
    if (task.completed) {
      li.classList.add('completed');
    }
    li.innerHTML = `
      <input class="task-checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
      <span class="task">${task.text}</span>
      <button class="delete-btn"><i class="fas fa-trash"></i></button>
    `;

    li.querySelector('.task-checkbox').addEventListener('change', function() {
    li.classList.toggle('completed', this.checked);
    saveTasks();
    });


    li.querySelector('.delete-btn').addEventListener('click', function() {
      if(confirm(`Apakah anda yakin akan menghapus tugas ${task.text} ?`)) {
        li.remove();
        saveTasks();
    }
    });

    taskList.appendChild(li);
  });
}
