const { getSearchResult } = require('../model/queries/business');
const { getReviewsByBusiness, setReview } = require('../model/queries/review');
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
  const { name } = req.query;
  getSearchResult(name)
    .then((response) => {
      if (response.length !== 0) {
        const {
          id, address, description, img, category,
        } = response[0];
        let avarage = 0;
        getReviewsByBusiness(id)
          .then((responseReview) => {
            if (responseReview.length !== 0) {
              const { avg } = responseReview[0];
              avarage = avg;
              res.render('business_page', {
                userName,
                isUser,
                isPerson,
                responseReview,
                avarage,
                style: 'style',
                title: name,
                dom: 'business_page',
                name,
                address,
                description,
                img,
                category,
                personAddReview: 'business_add_review',
              });
            } else {
              res.render('business_page', {
                userName,
                isUser,
                isPerson,
                avarage,
                style: 'style',
                title: name,
                dom: 'business_page',
                name,
                address,
                description,
                img,
                category,
                personAddReview: 'business_add_review',
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

exports.post = (req, res, next) => {
  const { name } = req.data;
  const { text } = req.body;
  const { evaluation } = req.body;
  const { nameBusiness } = req.body;


  getSearchResult(nameBusiness)
    .then((responseBusiness) => {
      const idBusiness = responseBusiness[0].id;
      getPerson(name)
        .then((responsePerson) => {
          const idPerson = responsePerson[0].id;
          setReview(idPerson, idBusiness, text, parseInt(evaluation, 10))
            .then((response) => {
              res.send({ username: name });
            })
            .catch(err => next(err));
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
};
