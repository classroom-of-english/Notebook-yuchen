// 获取 textarea 和按钮元素
const note = document.getElementById('note');
const saveButton = document.getElementById('save');
const deleteButton = document.getElementById('delete');

// 保存笔记的函数
function saveNote() {
  // 获取 textarea 内容
  const content = note.value;
  // 保存内容到 localStorage
  localStorage.setItem('note', content);
  alert('笔记保存成功!');
}

// 删除笔记的函数
function deleteNote() {
  // 清空 textarea 内容
  note.value = '';
  alert('笔记删除成功!');
}

// 加载笔记的函数
function loadNote() {
  // 获取从 localStorage 中获取的内容
  const content = localStorage.getItem('note');
  // 如果有内容，则填充到 textarea 中
  if (content) {
    note.value = content;
  }
}

// 加载笔记
loadNote();

// 给按钮添加点击事件
saveButton.addEventListener('click', saveNote);
deleteButton.addEventListener('click', deleteNote);
