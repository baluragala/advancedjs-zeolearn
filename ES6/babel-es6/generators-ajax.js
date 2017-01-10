/**
 * Created by moksha on 10/01/17.
 */


function makeAjaxCall(url) {
    fetch(url).then(data => data.json()).then(data => generator.next(data))
}

function* getComments() {
    console.log('Getting users');
    const users = yield makeAjaxCall('https://jsonplaceholder.typicode.com/users');
    console.log(users);
    console.log('fetching posts');
    const posts = yield makeAjaxCall('https://jsonplaceholder.typicode.com/posts');
    console.log(posts);
    console.log('fetching comments');
    const comments = yield makeAjaxCall('https://jsonplaceholder.typicode.com/comments');
    console.log(comments);
}
const generator = getComments();
generator.next();
