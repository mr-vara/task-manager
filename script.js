document.addEventListener('DOMContentLoaded', handlePTM);

function handlePTM() {
	/**
		1. Take reference of Input Field
		2. Take reference of add task Button
		3. Read the value entered by User in
		   the input field when Button is clicked
		4. Create <li> element with user entered task text
		5. Insert the <li> element into the list <ul> element.
	*/

	const taskInput = document.getElementById('task-input');
	const addTaskBtn = document.getElementById('add-task-btn');
	const taskList = document.getElementById('task-list');

	taskList.innerHTML = localStorage.getItem('taskData');


	addTaskBtn.addEventListener('click', function() {
		const taskText = taskInput.value;
		if (taskText !== '') {
			const newTaskItem = document.createElement('li');
			newTaskItem.className = 'task-item';
			newTaskItem.innerHTML = taskText + ' <button class="delete-btn"  onclick="deleteItem(this)">Delete</button>'
			taskList.appendChild(newTaskItem);

			localStorage.setItem('taskData', taskList.innerHTML);

			taskInput.value = '';			
		}

	});


	taskList.addEventListener('click', function(completeList) {
		const clickedElementsClasses = completeList.target.classList;

		if (clickedElementsClasses.contains('delete-btn')) {
			const taskItemToBeRemoved = completeList.target.parentElement;
			taskList.removeChild(taskItemToBeRemoved);

			localStorage.setItem('taskData', taskList.innerHTML);

		}
	});

}

