            //Image Changer

const my_image = document.querySelector("#cpu-image");

my_image.onclick = ()=>
{
    my_src = my_image.getAttribute("src");
    img1_file_path = "images/cpu-image.jpeg";
    img2_file_path = "images/cpu-image2.jpg";

    if ( my_src === img1_file_path)
    {
        my_image.setAttribute("src", img2_file_path);
    }
    else
    {
        my_image.setAttribute("src", img1_file_path);
    }
}

            //Personalised Welcome Message

const my_button = document.querySelector("button");
const my_heading = document.querySelector("h1");
const original_heading = my_heading.textContent;

function SetUsername()
{
    username = false;
    while (!username)
        username = prompt("What is your name? ");

    localStorage.setItem('name', username);
    my_heading.textContent = original_heading + ', ' + username;
}

username = localStorage.getItem('name');
if (!username)
    SetUsername();

else
    my_heading.textContent = original_heading + ', ' + username;

my_button.onclick = ()=>
{
    SetUsername();
}