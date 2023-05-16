// Firebase 配置信息
const firebaseConfig = {
    apiKey: "AIzaSyDv1kHqmzY4Vb9bDFu4gL5EV1HkXLUKMY8",
    authDomain: "ps-wb-pjms.firebaseapp.com",
    projectId: "ps-wb-pjms",
    storageBucket: "ps-wb-pjms.appspot.com",
    messagingSenderId: "377313749487",
    appId: "1:377313749487:web:f59ac8ab07f4c0b83cee1a",
    measurementId: "G-EN5KKTV1L3"
  };
  
  // 初始化 Firebase 应用
  firebase.initializeApp(firebaseConfig);
  
  // 获取数据库引用
  const messagesRef = firebase.database().ref('messages');
  
  // 加载所有留言
  messagesRef.on('value', (snapshot) => {
    const messages = snapshot.val();
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    for (const key in messages) {
      const message = messages[key];
      const messageDiv = createMessageElement(message);
      messagesDiv.appendChild(messageDiv);
    }
  });
  
  // 提交表单时，添加新留言
  function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const message = {
      name: formData.get('name'),
      content: formData.get('content'),
      time: new Date().toISOString()
    };
    messagesRef.push(message).then(() => {
      form.reset();
    });
  }
  
  // 创建单个留言的 DOM 元素
  function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    const header = document.createElement('h3');
    header.textContent = message.name + ' 说：';
    messageDiv.appendChild(header);
    const content = document.createElement('p');
    content.textContent = message.content;
    messageDiv.appendChild(content);
    const time = document.createElement('p');
    time.textContent = new Date(message.time).toLocaleString();
    messageDiv.appendChild(time);
    return messageDiv;
  }
  