/* global document fetch alert */
const commentButton = document.querySelectorAll('.button-comment');
const Section = document.querySelectorAll('.comment-section');

const create = (type, elementParent, className, value) => {
  const element = document.createElement(type);
  element.classList.add(className);
  element.textContent = value;
  return elementParent.appendChild(element);
};

commentButton.forEach((element) => {
  element.addEventListener('click', (e) => {
    const { id } = e.target;
    const object = {
      idReview: id,
    };


    fetch('/comment', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(object),
    })
      .then(response => response.json())
      .then((response) => {
        const { arrComment, isPerson, userName } = response;
        const index = Section.length - id;
        const commentSection = Section[index];
        commentSection.textContent = '';

        if (isPerson) {
          const formAdd = create('div', commentSection, 'form-add', null);
          create('h4', formAdd, 'form-add', `${userName} type your comment`);
          const input = document.createElement('input');
          input.placeholder='write new comment.. ';
          input.setAttribute('type', 'text');
          formAdd.appendChild(input);
          const sendComment = create('button', formAdd, 'form-add', 'add comment');
          sendComment.addEventListener('click', () => {
            if (input.value === '') {
              alert('file the comment');
            } else {
              const data = {
                idReview: id,
                content: input.value,
                userName,
              };
              fetch('/commentAdd', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(data),
              })
                .then(res => res.json())
                .then((res) => {
                  if (res.result === 'pass') {
                    input.value = '';
                    const secandElement = commentSection.children[1];
                    if (commentSection.children[1].textContent === 'no comment') {
                      commentSection.children[1].style.display = 'none';
                    }
                    const divComment = create('div', commentSection, 'comment', null);
                    commentSection.insertBefore(divComment, secandElement);
                    create('h4', divComment, 'comment-username', userName);
                    create('p', divComment, 'comment-content', data.content);
                  }
                })
                .catch(err => alert(err));
            }
          });
        }

        if (arrComment.length === 0) {
          create('h4', commentSection, 'err-massage', 'no comment');
        } else {
          arrComment.forEach((item) => {
            const divComment = create('div', commentSection, 'comment', null);
            const link = create('a', divComment, 'comment-username', '@user ' + item.username +'..');
            link.href = `/user_profile/${item.username}`; 
            create('p', divComment, 'comment-content', item.content);
          });
        }
        commentSection.style.display = 'block';
        element.style.display = 'none';
        const closeComment = create('button', commentSection, 'close', 'close comments');
        closeComment.addEventListener('click', () => {
          element.style.display = 'block';
          commentSection.style.display = 'none';
        });
      })
      .catch((error) => { alert(error); });
  });
});
