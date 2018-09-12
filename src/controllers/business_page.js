const { getSearchResult } = require('../model/queries/business');
const { getReviewsByBusiness } = require('../model/queries/review');

exports.get = (req, res) => {
  const { name } = req.query;
  getSearchResult(name)
    .then((response) => {
      const {
        id, address, description, img, category,
      } = response[0];
      getReviewsByBusiness(id)
        .then((responseReview) => {
          const { avg } = responseReview[0];
          res.render('business_page', {
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
        })
        .catch(err => res.render('business_page', {
          err,
          style: 'style',
          title: 'Error',
          error_message: 'Error in get reviews',
        }));
    })
    .catch((err) => {
      res.render('business_page', {
        err,
        style: 'style',
        title: 'Error',
        error_message: 'Sorry the business not found',
      });
    });
};
