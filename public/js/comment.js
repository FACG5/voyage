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
          create('h4', formAdd, 'form-add', userName);
          const input = document.createElement('input');
          input.setAttribute('type', 'text');
          formAdd.appendChild(input);
          const sendComment = create('button', formAdd, 'form-add', 'send');
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
                    const divComment = create('div', commentSection, 'comment', null);
                    create('h4', divComment, 'comment-username', userName);
                    create('p', divComment, 'comment-content', input.value);
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
            create('h4', divComment, 'comment-username', item.username);
            create('p', divComment, 'comment-content', item.content);
          });
        }
        commentSection.style.display = 'block';
        element.style.display = 'none';
        const closeComment = create('button', commentSection, 'close', 'close');
        closeComment.addEventListener('click', () => {
          element.style.display = 'block';
          commentSection.style.display = 'none';
        });
      })
      .catch((error) => { alert(error); });
  });
});
