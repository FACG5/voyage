const { getSearchResult } = require('../model/queries/business');
const { getReviewsByBusiness } = require('../model/queries/review');

exports.get = (req, res, next) => {
  let userName = '';
  const { isUser } = req;
  if (isUser) {
    userName = req.data.name;
  }
  const { name } = req.query;
  getSearchResult(name)
    .then((response) => {
      if (response.length !== 0) {
        const {
          id, address, description, img, category,
        } = response[0];
        let avg = 0;
        getReviewsByBusiness(id)
          .then((responseReview) => {
            if (responseReview.length !== 0) {
              avg = responseReview[0].avg;
              res.render('business_page', {
                userName,
                isUser,
                responseReview,
                avg,
                style: 'style',
                title: 'business',
                dom: 'business_page',
                name,
                address,
                description,
                img,
                category,
              });
            } else {
              res.render('business_page', {
                userName,
                isUser,
                avg,
                style: 'style',
                title: 'business',
                dom: 'business_page',
                name,
                address,
                description,
                img,
                category,
              });
            }
          })
          .catch(err => next(err));
      } else {
        const errorMessage = 'sorry the business not found';
        res.render('business_page', {
          errorMessage,
          style: 'style',
          title: 'business',
          dom: 'business_page',
        });
      }
    })
    .catch(err => next(err));
};
