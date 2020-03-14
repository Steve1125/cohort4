const functions = {

    buildCard(text) {

        const div = document.createElement("div");
        div.appendChild(document.createTextNode(text));

        const before = document.createElement("button");
        before.appendChild(document.createTextNode("Add Before"));
        div.appendChild(before);

        const after = document.createElement("button");
        after.appendChild(document.createTextNode("Add After"));
        div.appendChild(after);

        const del = document.createElement("button");
        del.appendChild(document.createTextNode("Delete"));
        div.appendChild(del);

        return div;
    },

    addBefore(node, text){
        const div = functions.buildCard(text);
        console.log(node.parentElement);
        node.parentElement.insertBefore(div,node);
    },

    addAfter(node,text){
        const div = functions.buildCard(text);
        node.parentElement.insertBefore(div,node.nextSibling);
    },

    delete(node){
        node.remove(node.childNodes);
    }
}

export default functions;