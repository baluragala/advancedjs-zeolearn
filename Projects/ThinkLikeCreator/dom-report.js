/**
 * Created by moksha on 01/01/17.
 */

//report the elements by count

var explain=function () {
    let children = document.body.children;
    let reportSection = document.getElementById("report");
    let ul = document.createElement("ol");
    for(let child of children) {
        let li = document.createElement("li");
        console.log(child);
        li.innerText = child.nodeName;
        ul.appendChild(li);
    }
    reportSection.appendChild(ul);
};

var remove=function (ele) {

}