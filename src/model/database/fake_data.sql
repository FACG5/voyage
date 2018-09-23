insert into users(email,password,type) values('a@a.a','123','person');
insert into users(email,password,type) values('b@b.b','123','business');
insert into person(user_id,username,first_name,last_name,birthday,gender) values(1,'ahmad91','ahmad','tayeb','1990-10-29','male');
insert into business(user_id,name,address,description,img,category) values(1,'roots','Rasheed ST','hotel and restruant','some url','restruant');
insert into review(person_id,business_id,content,evaluation)values(1,1,'good restruant',5);
insert into comment(person_id,review_id,content)values(1,1,'good review');
