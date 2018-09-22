const { getComment, setComment } = require('../model/queries/comment');
const { getPerson } = require('../model/queries/person');

exports.get = (req, res, next) => {
  let userName = '';
  let isPerson = false;
  const { isUser } = req;
  if (isUser) {
    userName = req.data.name;
    const { type } = req.data;
    if (type === 'person') {
      isPerson = true;
    }
  }
  const { idReview } = req.body;
  getComment(idReview)
    .then((response) => {
      res.send({
        arrComment: response,
        isPerson,
        userName,
      });
    })
    .catch(err => next(err));
};

exports.post = (req, res, next) => {
  const { idReview, content, userName } = req.body;
  getPerson(userName)
    .then((response) => {
      const personId = response[0].id;
      setComment(personId, parseInt(idReview, 10), content)
        .then(response => res.send({ result: 'pass' }))
        .catch(err => next(err));
    })
    .catch(err => next(err));
};
