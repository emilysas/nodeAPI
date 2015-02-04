module.exports = function(){
	var https = require('https');
	var url = 'https://api.github.com/users/jacobmitchinson';

	var getStuff = https.get(url, function(req, res){
			return res;	
	})

	return getStuff;
}

// {
//   "login": "jacobmitchinson",
//   "id": 9607886,
//   "avatar_url": "https://avatars.githubusercontent.com/u/9607886?v=3",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/jacobmitchinson",
//   "html_url": "https://github.com/jacobmitchinson",
//   "followers_url": "https://api.github.com/users/jacobmitchinson/followers",
//   "following_url": "https://api.github.com/users/jacobmitchinson/following{/other_user}",
//   "gists_url": "https://api.github.com/users/jacobmitchinson/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/jacobmitchinson/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/jacobmitchinson/subscriptions",
//   "organizations_url": "https://api.github.com/users/jacobmitchinson/orgs",
//   "repos_url": "https://api.github.com/users/jacobmitchinson/repos",
//   "events_url": "https://api.github.com/users/jacobmitchinson/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/jacobmitchinson/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Jacob Mitchinson",
//   "company": "",
//   "blog": "",
//   "location": "",
//   "email": "",
//   "hireable": false,
//   "bio": null,
//   "public_repos": 34,
//   "public_gists": 0,
//   "followers": 17,
//   "following": 30,
//   "created_at": "2014-11-07T10:52:47Z",
//   "updated_at": "2015-02-04T17:59:38Z"
// }