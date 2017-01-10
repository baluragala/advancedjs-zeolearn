/**
 * Created by moksha on 10/01/17.
 */

//https://www.sitepoint.com/asynchronous-apis-using-fetch-api-es6-generators/

function wrapperOnFetch(url) {
    var headers = new Headers();
    headers.append('Accept', 'application/vnd.github.v3+json');
    var request = new Request(url, {headers: headers});

    return fetch(request).then(function (res) {
        return res.json();
    });
}

function* gitHubDetails(orgName) {
    var baseUrl = "https://api.github.com/orgs/";
    var url = baseUrl + orgName;

    var reposUrl = yield wrapperOnFetch(url);
    var repoFullName = yield wrapperOnFetch(reposUrl);
    yield wrapperOnFetch(`https://api.github.com/repos/${repoFullName}/contributors`);
}


var generator = gitHubDetails("facebook");

generator.next().value.then(function (userData) {
    console.log(userData);

    return generator.next(userData.repos_url).value.then(function (reposData) {
        return reposData;
    });
}).then(function (reposData) {
    console.log(reposData);

    return generator.next(reposData[0].full_name).value.then(function (selectedRepoCommits) {
        console.log(selectedRepoCommits);

    });
});