What This Repo Does.<br>
Its a library of Star Wars Characters and Vehicles for any nerds out there.<br>
Paste the script into any html file and boom your of.<br>
Make sure to read the next section.<br>
=========================================<br>
<br>
How It Works.<br>
<br>
Use p_a_name as the id of the paragraph/heading/span that you want the character's name to appear on. <br>
Explanation : p_a_name (what type you want to get _ what character you want to get _ what attribute you want to get)
<br>
Example of the Attributes of Luke Skywalker:<br>
p_a_img<br>
p_a_name<br>
p_a_homeworld<br>
p_a_born<br>
p_a_died<br>
p_a_species<br>
p_a_gender<br>
p_a_height<br>
p_a_mass<br>
p_a_haircolor<br>
p_a_eyecolor<br>
p_a_skincolor<br>
p_a_cybernetics<br>
p_a_affiliations<br>
p_a_apprentices<br>
p_a_weapons<br>
p_a_des<br>
<br>
Paste this script into your HTML File<br>
<script src = "https://cdn.jsdelivr.net/gh/oli-fire/Star-Wars-Databank@main/characters.js"></script><br>

Paste this into your js file as well.<br
For the Image : document.getElementById("p_a_img").src = p.a.image;
For the Rest of the Attributes : document.getElementById("p_a_name").innerHTML = p.a.name;
<br>
=========================================<br>
<br>
Some Errors You Might Encounter.<br>
<br>
1. Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')<br>
How to fix this : Make sure you paste the script after the body tag.<br>
<br>
=========================================<br>
<br>
HMTL Code Exmple

https://codepen.io/olifire/pen/podzKGE?editors=1000
