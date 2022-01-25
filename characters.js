const p = {
// Luke Skywwalker
a : {
  image : "https://www.myneobuxportal.com/wp-content/uploads/2019/03/3-7.jpg",
  name : "Luke Skywalker",
  homeworld : 'Tatooine',
  born : "19 BBY (2 days after Empire Day)",
  died : "34 ABY, Ahch-To",
  species : 'Human',
  gender : 'Male',
  height : "1.72 meters",
  mass : "73 kilograms",
  haircolor : 'Blond',
  eyecolor : 'Blue',
  skincolor : 'Light',
  cybernetics : "Prosthetic right hand",
  affiliations : ['Rebelion', ' Jedi Order', ' New Republic'],
  masters : ["Obi-Wan Kenobi", ' Yoda'],
  apprentices : ['Leia Organa', ' Grogu', ' Ben Solo', ' Rey'],
  weapons : 'Lightsaber',
  des : "Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. Along with his companions, Princess Leia Organa and General Han Solo, Skywalker served as a revolutionary on the side of the Alliance to Restore the Republic—an organization committed to the downfall of the Galactic Empire and the restoration of democracy. Following the war, Skywalker became a living legend, and was remembered as one of the greatest Jedi in galactic history."
},
//Leia Skywalker Organa Solo
b : {
  image : "https://i.pinimg.com/736x/11/fa/ad/11faad3be5097dea3e24be19dfce201b.jpg",
  name : "Leia Skywalker Organa Solo",
  homeworld : 'Alderaan',
  born : "19 BBY, Polis Massa",
  died : "35 ABY",
  species : 'Human',
  gender : 'Female',
  height : "1.5 meters",
  mass : "49 kilograms",
  haircolor : 'Dark brown',
  eyecolor : 'Brown',
  skincolor : 'Light',
  cybernetics : 'None',
  affiliations : ['Rebelion', 'Jedi Order', 'New Republic'],
  masters : "Luke Skywalker",
  apprentices : 'Rey',
  weapons : ["Lightsaber", "Defender Pistol"],
  des : "Leia Skywalker Organa Solo was a Force-sensitive human female political and military leader who served in the Alliance to Restore the Republic during the Imperial Era and the New Republic and Resistance in the subsequent New Republic Era. Adopted into the House of Organa, the Alderaanian royal family, she was Princess Leia Organa of Alderaan, a planet in the Core Worlds known for its dedication to pacifism. The princess was raised as the daughter of Senator Bail Prestor Organa and his wife, Queen Breha Organa, making her the heir to the Alderaanian monarchy. Instilled with the values of her adopted homeworld, Organa devoted her life to the restoration of democracy by opposing authoritarian regimes such as the Galactic Empire and the First Order."
}

}

// Luke Skywalker
document.getElementById("p_a_img").src = p.a.image;
document.getElementById("p_a_name").innerHTML = p.a.name;
document.getElementById("p_a_homeworld").innerHTML = p.a.homeworld;
document.getElementById("p_a_born").innerHTML = p.a.born;
document.getElementById("p_a_died").innerHTML = p.a.died;
document.getElementById("p_a_species").innerHTML = p.a.species;
document.getElementById("p_a_gender").innerHTML = p.a.gender;
document.getElementById("p_a_height").innerHTML = p.a.height;
document.getElementById("p_a_mass").innerHTML = p.a.mass;
document.getElementById("p_a_haircolor").innerHTML = p.a.haircolor;
document.getElementById("p_a_eyecolor").innerHTML = p.a.eyecolor;
document.getElementById("p_a_skincolor").innerHTML = p.a.skincolor;
document.getElementById("p_a_cybernetics").innerHTML = p.a.cybernetics;
document.getElementById("p_a_affiliations").innerHTML = p.a.affiliations;
document.getElementById("p_a_apprentices").innerHTML = p.a.apprentices;
document.getElementById("p_a_weapons").innerHTML = p.a.weapons;
document.getElementById("p_a_des").innerHTML = p.a.des;
// Leia Skywalker Organa Solo
document.getElementById("p_b_img").src = p.b.image;
document.getElementById("p_b_name").innerHTML = p.b.name;
document.getElementById("p_b_homeworld").innerHTML = p.b.homeworld;
document.getElementById("p_b_born").innerHTML = p.b.born;
document.getElementById("p_b_died").innerHTML = p.b.died;
document.getElementById("p_b_species").innerHTML = p.b.species;
document.getElementById("p_b_gender").innerHTML = p.b.gender;
document.getElementById("p_b_height").innerHTML = p.b.height;
document.getElementById("p_b_mass").innerHTML = p.b.mass;
document.getElementById("p_b_haircolor").innerHTML = p.b.haircolor;
document.getElementById("p_b_eyecolor").innerHTML = p.b.eyecolor;
document.getElementById("p_b_skincolor").innerHTML = p.b.skincolor;
document.getElementById("p_b_cybernetics").innerHTML = p.b.cybernetics;
document.getElementById("p_b_affiliations").innerHTML = p.b.affiliations;
document.getElementById("p_b_apprentices").innerHTML = p.b.apprentices;
document.getElementById("p_b_weapons").innerHTML = p.b.weapons;
document.getElementById("p_b_des").innerHTML = p.b.des;
