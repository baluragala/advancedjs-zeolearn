/**
 * Created by moksha on 10/01/17.
 */
function getGithubDetails(orgName) {
    let baseUrl = "https://api.github.com/orgs/";
    let url = baseUrl + orgName;
    co(
        function*() {
            let org = yield fetch(url).then((r) => r.json());
            console.log(org);
            let repos = yield fetch(org.repos_url).then((r) => r.json());
            let reposWithContributors = [];
            for (repo of repos) {
                let contributors = yield fetch(`https://api.github.com/repos/${repo.full_name}/contributors`).then((r) => r.json());
                repo.contributors = contributors;
                reposWithContributors.push(repo);
            }
            //let contributors = yield fetch(`https://api.github.com/repos/${repos[0].full_name}/contributors`).then((r) => r.json());
            console.log(reposWithContributors);
        });

}

getGithubDetails('facebook');