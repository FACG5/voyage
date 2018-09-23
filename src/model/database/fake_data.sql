insert into users(email,password,type) values('a@a.a','$2b$10$QAhBfKMItJuUU8i1LLSRs..eN4IO.7/zc7LphZ0MNrTXHXQdswYN.','person');
insert into users(email,password,type) values('b@b.b','$2b$10$QAhBfKMItJuUU8i1LLSRs..eN4IO.7/zc7LphZ0MNrTXHXQdswYN.','business');
insert into person(user_id,username,first_name,last_name,birthday,gender) values(1,'ahmad91','ahmad','tayeb','1990-10-22','male');
insert into business(user_id,name,address,description,img,category) values(1,'roots','Rasheed ST','hotel and restruant','some url','restruant');
insert into review(person_id,business_id,content,evaluation)values(1,1,'good restruant',5);
insert into comment(person_id,review_id,content)values(1,1,'good review');
