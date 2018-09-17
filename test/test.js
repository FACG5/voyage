const tape = require('tape');
const runDbBuild = require('../src/model/database/db_build');
const { addUser } = require('../src/model/queries/users');
const { addPerson } = require('../src/model/queries/person');
const { addBusiness } = require('../src/model/queries/business');

tape('tape is working', (t) => {
  t.equals(1, 1, 'one equals one');
  t.end();
});

tape('Test for the addUser function', (t) => {
  runDbBuild((err, res) => {
    t.notOk(err);
    const data = { email: 's@s.s', type: 0 };
    addUser(data, '$2b$10$c.DoRIXXMC9fzgwWlg37oOErCFNXFTRNExHYLvq93DCHqbIkNZUb2')
      .then((response) => {
        t.equal(isNaN(response.rows[0].id), false, 'addUser function returns id successfuly');
        t.equal(response.command, 'INSERT', 'Data have been inserted successfuly to users TABLE');
      })
      .catch(err => t.error(err));
    t.end();
  });
});

tape('Test for the addPerson function', (t) => {
  runDbBuild((err, res) => {
    t.notOk(err);
    const data = {
      userName: 'abutala', fName: 'ahmad', lName: 'tayeb', birthDay: '1991-10-29', gender: 'male',
    };
    addPerson(null,data)
      .then((response) => {
        t.equal(response.command, 'INSERT', 'Data have been inserted successfuly to person TABLE');
      })
      .catch(err => t.error(err));
    t.end();
  });
});

tape('Test for the addBusiness function', (t) => {
  runDbBuild((err, res) => {
    t.notOk(err);
    const data = {
    businessName:'roots', businessAddress:'GAZA rashed ST ', businessDescription:'hotel and restruant', image:'some image url', businessCategory:'restruant',
    };
    addBusiness(null,data)
      .then((response) => {
        t.equal(response.command, 'INSERT', 'Data have been inserted successfuly to business TABLE');
      })
      .catch(err => t.error(err));
    t.end();
  });
});
