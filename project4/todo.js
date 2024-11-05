function updateDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById('dateTime').textContent = `${day}, ${date} - ${time}`;
}

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        
        // Calculate the task number based on the existing tasks
        const taskNumber = taskList.childElementCount + 1;
        
        // Add task number and text
        newTask.textContent = `${taskNumber}. ${taskText}`;
        
        taskList.appendChild(newTask);

        // Clear the input
        taskInput.value = '';

        // Add click event to strike through the task
        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });
    }
});

// 
setInterval(updateDateTime, 1000);

// Initial call to set the date and time immediately on page load
updateDateTime();

