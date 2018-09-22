exports.client = (req, res) => {
  res.status(404).render('error_page', {
    layout: 'error',
    statusCode: 404,
    errorMessage: 'Page not found',
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error_page', {
    layout: 'error',
    statusCode: 500,
    errorMessage: 'Internal server error',
  });
};
