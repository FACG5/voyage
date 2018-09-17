const app = require('./app');


app.listen(app.get('port'), () => {
  console.log('App on port', app.get('port'));
});
