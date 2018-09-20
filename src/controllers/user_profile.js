const { getUserData } = require('../model/queries/users');
const { getReviewByUser } = require('../model/queries/users');

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
  const { username } = req.params;
  getUserData(username)
    .then((response) => {
      if (response.length !== 0) {
        let img;
        const { gender } = response[0];
        if (gender === 'femail') {
          img = 'https://image.flaticon.com/icons/svg/145/145852.svg';
        } else {
          img = 'https://image.flaticon.com/icons/svg/145/145867.svg';
        }

        getReviewByUser(username)
          .then((result) => {
            res.render('user_profile', {
              style: 'style',
              style_special: 'user_profile',
              script: 'user_profile',
              title: 'User Profile',
              response,
              img,
              username,
              result,
              userName,
              isUser,
              isPerson,
            });
          })
          .catch(error => next(error));
      } else {
        const message = 'Sorry User not Found !';
        res.render('user_profile', {
          style: 'style',
          style_special: 'user_profile',
          title: 'User Profile',
          message,
        });
      }
    })
    .catch(error => next(error));
};
