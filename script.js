const contentInputEl = document.getElementById('contentInput');
const addContentBtn = document.getElementById('addContentBtn');
const contentListEl = document.getElementById('contentList');
const randomizeBtn = document.getElementById('randomizeBtn');
const randomSelectionEl = document.getElementById('randomSelection');
const contentListContainerEl = document.getElementById('contentListContainer');

const addContent = (e) => {
  // Prevent the default form submission
  e.preventDefault();

  if (contentListContainerEl.style.display === 'none') {
    contentListContainerEl.style.display = 'block';
  }

  randomizeBtn.disabled = false;

  // Get the content from the input field
  const content = contentInputEl.value;
  const contentEl = document.createElement('li');
  contentEl.classList.add(
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'fs-5',
    'mb-2'
  );
  contentEl.textContent = content;
  contentListEl.appendChild(contentEl);

  // Create a delete button
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fa-solid', 'fa-trash', 'btn', 'btn-danger');
  contentEl.appendChild(deleteBtn);
  deleteBtn.onclick = () => {
    contentEl.remove();
    if (contentListEl.children.length === 0) {
      contentListContainerEl.style.display = 'none';
      randomizeBtn.disabled = true;
    }
  };

  // Clear the input field
  contentInputEl.value = '';
  addContentBtn.disabled = true;
};

const randomizeContent = () => {
  // Get the content from the list
  const contentArr = Array.from(contentListEl.children).map(
    (el) => el.textContent
  );

  // Randomize the content
  const contentLength = contentArr.length;
  const randomIndex = Math.floor(Math.random() * contentLength);
  const randomContent = contentArr[randomIndex];

  // Display the random content
  randomSelectionEl.textContent = randomContent;
};

// Event listeners
addContentBtn.onclick = addContent;
contentInputEl.oninput = () => {
  addContentBtn.disabled = !contentInputEl.value;
};
contentInputEl.onfocus = () => {
  contentInputEl.placeholder = '';
};
contentInputEl.onblur = () => {
  contentInputEl.placeholder = 'Enter text here';
};
randomizeBtn.onclick = randomizeContent;
