What This Repo Does.<br>
<br>
<br>
<br>
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
Paste this script int your HTML File<br>
<script src = "https://cdn.jsdelivr.net/gh/oli-fire/Star-Wars-Databank@v1.0.0/characters.js"></script><br>
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

<!--
<html>
<head>
  <title>Star Wars Databank</title>
</head>
<body>
  <img id = "p_a_img"></img>
  <br>
  <span><strong>Name: </strong></span><span id="p_a_name">.</span>
  <br>
  <span><strong>Homeworld: </strong></span><span id="p_a_homeworld">.</span>
  <br>
  <span><strong>Born: </strong></span><span id="p_a_born">.</span>
  <br>
  <span><strong>Died: </strong></span><span id="p_a_died">.</span>
  <br>
  <span><strong>Species: </strong></span><span id="p_a_species">.</span>
  <br>
  <span><strong>Gender: </strong></span><span id="p_a_gender">.</span>
  <br>
  <span><strong>Height: </strong></span><span id="p_a_height">.</span>
  <br>
  <span><strong>Mass: </strong></span><span id="p_a_mass">.</span>
  <br>
  <span><strong>Hair color: </strong></span><span id="p_a_haircolor">.</span>
  <br>
  <span><strong>Eye color: </strong></span><span id="p_a_eyecolor">.</span>
  <br>
  <span><strong>Skin color: </strong></span><span id="p_a_skincolor">.</span>
  <br>
  <span><strong>Cybernetics: </strong></span><span id="p_a_cybernetics">.</span>
  <br>
  <span><strong>Affiliations: </strong></span><span id="p_a_affiliations">.</span>
  <br>
  <span><strong>Apprentices: </strong></span><span id="p_a_apprentices">.</span>
  <br>
  <span><strong>Weapons: </strong></span><span id="p_a_weapons">.</span>
  <br>
  <span><strong>Description: </strong></span><span id="p_a_des">.	</span>
</body>
  <script src = "https://cdn.jsdelivr.net/gh/oli-fire/Star-Wars-Databank@v1.0.0/characters.js"></script>
</html>
-->
