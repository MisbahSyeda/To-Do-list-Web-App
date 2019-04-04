function btnclick() {
    var listitem = document.createElement("li");
    var inputText = document.getElementById('inlisttext').value;
    listitem.innerHTML = '<input type="text" value='+ inputText +'> <button onclick="edit();" class="waves-effect waves-light btn">EDIT</button> <button onclick="update();" class="waves-effect waves-light btn">UPDATE</button> <button onclick="remove();" class="waves-effect waves-light btn"> DELETE</button> ';
    var child = listitem.firstChild;
    child.setAttribute("disabled", 'disabled');
    document.getElementById("todolist").appendChild(listitem);
    listitem.id = "listchild";
}; 
function edit() {
    child = document.getElementById('listchild').firstChild; 
    child.removeAttribute('disabled');
};
function update() {
    child = document.getElementById('listchild').firstChild;
    child.setAttribute("disabled", 'disabled');
};
function remove() {
    var parent = document.getElementById('listchild');
    parent.remove();
}