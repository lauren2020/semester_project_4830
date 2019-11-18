
const group0PicURL = "https://i.pinimg.com/originals/3f/30/36/3f3036516b981bf63aff62a773198eb3.jpg";
const group1PicURL = "https://res.cloudinary.com/teepublic/image/private/s--BFvWh-jo--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1513337973/production/designs/2180966_1.jpg";
const group2PicURL = "https://res.cloudinary.com/teepublic/image/private/s--1r9G2B3R--/t_Preview/b_rgb:eae0c7,c_limit,f_jpg,h_630,q_90,w_630/v1513061962/production/designs/2168289_1.jpg";
const group3PicURL = "https://pbs.twimg.com/profile_images/984107245100257280/XYf4n8Ag_400x400.jpg";

const group0 = {id: "0", profile_url: group0PicURL, owner: michael, name: "Family", users: [michael, holly]};
const group1 = {id: "1", profile_url: group1PicURL, owner: dwight, name: "Coworkers", users: [michael, holly, dwight, jim, pam, phylis, stanley, robert, daryl]};
const group2 = {id: "2", profile_url: group2PicURL, owner: jan, name: "Serenity By Jan", users: [pam, jan, phylis]};
const group3 = {id: "3", profile_url: group3PicURL, owner: jim, name: "Athlead", users: [jim, pam, daryl]};

export const groups = [group0, group1, group2, group3];

const michaelPicURL = "https://thenypost.files.wordpress.com/2019/06/the-office-1390.jpg?quality=90&strip=all&w=618&h=410&crop=1";
const hollyPicURL = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Hollytheoffice.jpg/220px-Hollytheoffice.jpg";
const dwightPicURL = "https://pbs.twimg.com/profile_images/1863312401/Dwight_400x400.jpg";
const jimPicURL = "https://miro.medium.com/max/2510/0*Xz-_cHSO6txphvHt.png";
const pamPicURL = "https://fashionista.com/.image/t_share/MTU3OTM4NjA2NjIxNTk5Mzc4/corporate-women-tv-show-wardrobes-outfits.jpg";
const janPicURL = "https://i.redd.it/r9uuj1dw19xy.jpg";
const phylisPicURL = "https://pbs.twimg.com/profile_images/878985669560991745/R2l8Jop5_400x400.jpg";
const stanleyPicURL = "https://pbs.twimg.com/media/CA0h5rEWQAA2dwt.jpg";
const robertPicURL = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2015%2F01%2Fthe-office_320-16.jpg&w=400&c=sc&poi=face&q=85";
const darylPicURL = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/darryl-from-the-office-costume-1561739057.jpg?resize=480:*";
const andyPicURL = "https://formosadiary.files.wordpress.com/2018/06/andy-bernard-e1529936277626.jpg";


const michael = {id: "0", profile_url: michaelPicURL, first_name: "Michael", last_name: "Scott", posts: ["0"], comments: ["0"], friends: ["1", "2", "3", "4", "5", "6", "7", "9", "10"], pending_connections: ["8"], groups: [group0, group1] };
const holly = {id: "1", profile_url: hollyPicURL, first_name: "Holly", last_name: "Flax", posts: ["1"], comments: ["1"], friends: ["0", "2", "3", "4"], pending_connections: ["9"], groups: [group0, group1] };
const dwight = {id: "2", profile_url: dwightPicURL, first_name: "Dwight", last_name: "Schrute", posts: ["2"], comments: [], friends: ["0", "1", "3", "4", "7", "9"], pending_connections: ["5", "6"], groups: [group1] };
const jim = {id: "3", profile_url: jimPicURL, first_name: "Jim", last_name: "Halpert", posts: ["3"], comments: [], friends: ["0", "1", "2", "4", "6", "7", "8", "9"], pending_connections: ["5", "6"], groups: [group1, group3] };
const pam = {id: "4", profile_url: pamPicURL, first_name: "Pam", last_name: "Halpert", posts: ["4"], comments: ["2"], friends: ["0", "1", "2", "3", "5", "9"], pending_connections: ["5", "6"], groups: [group1, group2, group3] };
const jan = {id: "5", profile_url: janPicURL, first_name: "Jan", last_name: "Levonon", posts: [], comments: [], friends: ["0", "4"], pending_connections: ["5", "6"], groups: [group2] };
const phylis = {id: "6", profile_url: phylisPicURL, first_name: "Phylis", last_name: "Vance", posts: [], comments: [], friends: ["0", "3", "7", "9"], pending_connections: ["5", "6"], groups: [group1, group2] };
const stanley = {id: "7", profile_url: stanleyPicURL, first_name: "Stanley", last_name: "Hudson", posts: [], comments: [], friends: ["0", "2", "3", "4", "6"], pending_connections: ["5", "6"], groups: [group1] };
const robert = {id: "8", profile_url: robertPicURL, first_name: "Robert", last_name: "California", posts: [], comments: [], friends: ["3", "9"], pending_connections: ["5", "6"], groups: [group1] };
const daryl = {id: "9", profile_url: darylPicURL, first_name: "Daryl", last_name: "Phylbin", posts: [], comments: ["3"], friends: ["0", "2", "3", "4", "6", "8"], pending_connections: ["5", "6"], groups: [group1, group3] };
const andy = {id: "10", profile_url: andyPicURL, first_name: "Andy", last_name: "Bernard", posts: ["5"], comments: [], friends: ["0"], pending_connections: ["2"], groups: [group1] };

export const users = [michael, holly, dwight, jim, pam, jan, phylis, stanley, robert, daryl, andy];

const comment0 = {id: "0", date: "10-23-2019", post: "1", body: "He played great", user: michael};
const comment1 = {id: "1", date: "10-24-2019", post: "0", body: "It was amazing!", user: holly};
const comment2 = {id: "2", date: "10-25-2019", post: "3", body: "Looking forward to going to the beach", user: pam}; 
const comment3 = {id: "3", date: "10-25-2019", post: "3", body: "Its gonna be great man", user: daryl};

export const comments = [comment0, comment1, comment2, comment3];

const post0 = {id: "0", date: "10-22-2019", user: michael, body: "Colorado has been amazing, hiking with holly in the rockies this weekend", comments: [comment1], likes: ["1"], public: true, groups: [], people: []};
const post1 = {id: "1", date: "10-23-2019", user: holly, body: "Michael Jr had his first baseball game", comments: [comment0], likes: [], public: true, groups: [], people: []};
const post2 = {id: "2", date: "10-24-2019", user: dwight, body: "Bears. Beats. Battlestar Galactiga.", comments: [], likes: [], public: true, groups: [], people: []};
const post3 = {id: "3", date: "10-25-2019", user: jim, body: "Athlead is opening a new office in Santa Barbara CA", comments: [comment2, comment3], likes: ["4", "9"], public: true, groups: [], people: []};
const post4 = {id: "4", date: "10-26-2019", user: pam, body: "CeCes ballet recital today!", comments: [], likes: ["3", "0", "1"], public: true, groups: [], people: []};
const post5 = {id: "5", date: "10-26-2019", user: andy, body: "Dont forget, my garden party is Friday! Dress code is connecticut casual", comments: [], likes: ["0"], public: false, groups: [group1], people: []};
const post6 = {id: "6", date: "10-26-2019", user: michael, body: "You and I are going paintballing this weekend", comments: [], likes: ["0"], public: false, groups: [], people: [dwight]};

export const posts = [post0, post1, post2, post3, post4, post5, post6];


