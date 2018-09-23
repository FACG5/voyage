
const tape = require('tape');
const runDbBuild = require('../src/model/database/db_build');
const { addPerson, getPerson } = require('../src/model/queries/person');
const { addUser, checkUser, getName } = require('../src/model/queries/users');
const { addBusiness, getSearch, getSearchResult } = require('../src/model/queries/business');
const { getReviews, getComments, getReviewsByBusiness, getAvg, setReview } = require('../src/model/queries/review');


tape('Test for the addUser function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    const data = { email: 's@s.s', type: 0 };
    addUser(data, '$2b$10$c.DoRIXXMC9fzgwWlg37oOErCFNXFTRNExHYLvq93DCHqbIkNZUb2')
      .then((response) => {
        t.equal(typeof response.rows[0].id, 'number', 'addUser function should returns id successfully');
        t.equal(response.command, 'INSERT', 'Data have been inserted successfully to users TABLE');
      })
      .catch(error => t.error(error));
    t.end();
  });
});

tape('Test for the addPerson function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    const data = {
      userName: 'abutala', fName: 'ahmad', lName: 'tayeb', birthDay: '1991-10-29', gender: 'male',
    };
    addPerson(null, data)
      .then((response) => {
        t.equal(response.command, 'INSERT', 'Data have been inserted successfully to person TABLE');
      })
      .catch(error => t.error(error));
    t.end();
  });
});

tape('Test for the addBusiness function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    const data = {
      businessName: 'roots', businessAddress: 'GAZA rashed ST ', businessDescription: 'hotel and restruant', image: 'some image url', businessCategory: 'restruant',
    };
    addBusiness(null, data)
      .then((response) => {
        t.equal(response.command, 'INSERT', 'Data have been inserted successfully to business TABLE');
      })
      .catch(error => t.error(error));
    t.end();
  });
});

tape('Test for the setReview function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      setReview(1, 1, 'good restrusnt', 5)
        .then((response) => {
          t.equal(typeof response, 'object', 'setReview returns data successfully ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the getSearch function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      getSearch('r')
        .then((response) => {
          t.equal(response.length > 0, true, 'The  auto complete search returns data successfully ');
          t.equal(response[0].name, 'roots', 'The auto complete search returns data properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the getSearchResult function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      getSearchResult('roots')
        .then((response) => {
          t.equal(response.length > 0, true, 'The search returns data successfully ');
          t.equal(response[0].category, 'restruant', 'The search returns data properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the getAvg function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      getAvg('restruant')
        .then((response) => {
          t.equal(response.length > 0, true, 'getCategories returns data successfully ');
          t.equal(response[0].name, 'roots', 'getCategories returns business data properly ');
          t.equal(response[0].avg, '5', 'getCategories returns average properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the getReviews function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      getReviews()
        .then((response) => {
          t.equal(response.length > 0, true, 'getReviews returns data successfully ');
          t.equal(response[0].content, 'good restruant', 'getReviews returns reviews data properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the getComments function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      getComments(1)
        .then((response) => {
          t.equal(response.length > 0, true, 'getComments returns data successfully ');
          t.equal(response[0].username, 'ahmad91', 'getComments returns comments data properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the getReviewsByBusiness function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      getReviewsByBusiness(1)
        .then((response) => {
          t.equal(response.length > 0, true, 'getReviewsByBusiness returns data successfully ');
          t.equal(response[0].evaluation, 5, 'getReviewsByBusiness returns review and rating data properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the checkUser function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      checkUser('a@a.a')
        .then((response) => {
          t.equal(response.length > 0, true, 'checkUser returns data successfully ');
          t.equal(response[0].type, 'person', 'checkUser returns data properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the getName function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      getName('business', 1)
        .then((response) => {
          t.equal(response.length > 0, true, 'getName returns data successfully ');
          t.equal(response, 'roots', 'getName returns data properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape('Test for the getPerson function', (t) => {
  runDbBuild('db_build.sql', (err) => {
    t.notOk(err);
    return runDbBuild('fake_data.sql', () => {
      getPerson('ahmad91')
        .then((response) => {
          t.equal(response.length > 0, true, 'getPerson returns data successfully ');
          t.equal(response[0].first_name, 'ahmad', 'getPerson returns data properly ');
          t.end();
        })
        .catch(error => t.error(error));
    });
  });
});

tape.onFinish(() => {
  process.exit(0);
});
