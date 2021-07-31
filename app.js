const button = document.createElement('button');
button.innerText = "Click Me";
document.body.append(button);

const text = document.createElement('p');
text.innerText = "You clicked the button!";


button.addEventListener('click', function () {
    document.body.append(text);
})