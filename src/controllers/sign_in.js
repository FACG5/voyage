const { checkUser } = require('../model/queries/get_data');
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// render the sign in page
exports.get = (req,res) =>{
 res.render('sign_in',{ style:"style", dom:"sign_in", title:"sign in"});
};


/**
 * check out if the email is exist
 * check the pass hash is true
 * and the successful login create cookies
 */

exports.post = (req,res, next) =>{
    const email = req.body.email;
    const password = req.body.password;

    checkUser(email)
        .then(req => {
            if(req.length > 0){
                bcrypt.compare(password, req[0].password, (err, response) => {
                    if(err){
                        res.send({ err: 'Error in password hash'});
                    }else if(response === false) {
                        res.send({err: 'Password not true'});
                    }else{
                        const object = {
                            user_id: req[0].id,
                            type: req[0].type,
                        };
                        const cookies = sign(object, process.env.SECRET);
                        res.cookie("jwt", cookies, {httpOnly: true});
                        res.send({err: null, res: "pass"});
                    }
                });
            }else {
                res.send({ err: 'Email not found'});
            }
        })
        .catch(err => next(err));
};



