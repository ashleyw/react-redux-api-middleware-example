"use strict"

var md = require("node-markdown").Markdown;

var data = {
  "posts": [
    {
      "id": 1,
      "publishedAt": 1464224712,
      "title": "Maecenas Finibus Tincidunt Enim",
      "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum pulvinar posuere. In et efficitur erat. Aenean ultrices, justo sed mollis scelerisque, magna sem bibendum nisi, convallis consequat dolor libero eget neque.

Quisque in arcu non massa finibus rhoncus. Aliquam mollis turpis purus, non tincidunt leo placerat et. Quisque risus urna, sodales et sapien et, consequat ornare tortor. Etiam vulputate dui sed magna consectetur rhoncus. Suspendisse feugiat mauris convallis dolor feugiat ultricies. Curabitur elementum arcu eget diam tempus, sed posuere arcu ultricies. Etiam eleifend justo lacus, at venenatis tortor feugiat sit amet. Vestibulum imperdiet ultricies nulla vitae eleifend. Nunc sed eros et nisl mattis ultricies id ac elit. Fusce molestie orci sit amet purus cursus, sit amet scelerisque neque porttitor. Sed blandit ante quis orci vulputate cursus. Nulla rutrum mi eget nisi accumsan, quis dictum magna rhoncus. Maecenas finibus tincidunt enim. Quisque ullamcorper erat id lectus venenatis, et placerat est scelerisque. Proin efficitur gravida lectus. Cras efficitur, nunc sit amet feugiat mattis, tortor massa bibendum sapien, gravida tristique ex dui nec justo.

Proin et tortor feugiat, commodo tortor a, imperdiet velit. Suspendisse ipsum ante, euismod non porta eget, fringilla rhoncus lorem. Sed ut arcu in felis imperdiet mollis et a tellus. Donec porttitor sapien velit, ac commodo tortor iaculis vitae. Quisque fermentum pulvinar turpis, sit amet venenatis neque varius ac. Donec aliquet ultrices enim, eu accumsan augue bibendum non. Maecenas pulvinar ex ac urna ullamcorper fermentum. Ut luctus magna odio, a aliquet ipsum lobortis in. Curabitur massa nisi, hendrerit ut velit eu, bibendum ultrices magna. In massa arcu, ultrices quis quam at, blandit aliquet arcu. Nunc eget risus lectus. Nunc id arcu sit amet lorem posuere egestas sit amet eu magna. Vivamus scelerisque, ante vitae rutrum facilisis, justo lectus pharetra purus, id gravida magna leo nec metus.`
    },
    {
      "id": 2,
      "publishedAt": 1454224712,
      "title": "Nunc eu Purus Mollis Fringilla",
      "text": `Sed vitae elementum ex. Ut vitae mauris eu libero sollicitudin consectetur a ut magna. Fusce est lorem, finibus vitae dignissim et, semper id mi. Mauris sapien justo, dictum eu mollis dignissim, ultricies quis ipsum.

Duis rhoncus urna tempor, dapibus quam at, semper orci. Donec scelerisque tempor lorem sit amet vulputate. Aliquam dictum, dui nec pellentesque pellentesque, orci neque ullamcorper ligula, ut blandit nisl odio at felis. Etiam a sodales augue. Fusce non sagittis diam, eu dignissim risus. Sed vitae mauris feugiat, sagittis neque a, tempor elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ultricies augue. Curabitur sed tincidunt ante. Donec ac ipsum gravida, suscipit neque at, ullamcorper eros. Maecenas commodo dui est, non elementum lorem accumsan nec. Duis non lacus id nibh congue tempus vitae a enim.

Aenean et libero vitae ante finibus semper vitae ut nulla. Mauris congue arcu justo, in commodo eros consectetur quis. Phasellus vel commodo libero. Nunc eu purus fringilla, mollis nisi nec, pharetra risus. Suspendisse non risus vitae purus vehicula accumsan. Aliquam tincidunt malesuada tortor, quis sodales dui euismod in. Nunc eu nisi in velit mattis ullamcorper. Ut gravida et velit vel cursus. Ut viverra iaculis pulvinar. Donec at nunc elementum, volutpat nunc non, ultrices nunc. Etiam nisl tortor, eleifend non lectus nec, rhoncus dapibus purus. Praesent condimentum dignissim mattis.`
    }
  ]
};

// GET

exports.posts = function (req, res) {
  var posts = [];
  data.posts.forEach(function (post, i) {
    posts.push({
      id: post.id,
      title: post.title,
      text: post.text,
      publishedAt: post.publishedAt
    });
  });
  res.json({
    posts: posts
  });
};

exports.post = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.posts.length) {
    res.json({
      post: data.posts[id]
    });
  } else {
    res.json(false);
  }
};

// POST

exports.addPost = function (req, res) {
  let post = Object.assign({}, req.body, {
    id: data.posts.length+1,
    publishedAt: Math.floor(Date.now() / 1000)
  });
  data.posts.push(post);
  res.json(post);
};

// PUT

exports.editPost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE

exports.deletePost = function (req, res) {
  var id = parseInt(req.params.id);
  if (id >= 0) {
    data.posts = data.posts.filter( function(post) { return post.id != id } )
    res.json({id: id, deleted: true});
  } else {
    res.json({id: id, deleted: false});
  }
};
