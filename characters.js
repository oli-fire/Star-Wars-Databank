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
  affiliations : ['Rebelion', 'Jedi Order', 'New Republic'],
  masters : ["Obi-Wan Kenobi", 'Yoda'],
  apprentices : ['Leia Organa', 'Grogu', 'Ben Solo', 'Rey'],
  weapons : 'Lightsaber',
  des : "Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. Along with his companions, Princess Leia Organa and General Han Solo, Skywalker served as a revolutionary on the side of the Alliance to Restore the Republic—an organization committed to the downfall of the Galactic Empire and the restoration of democracy. Following the war, Skywalker became a living legend, and was remembered as one of the greatest Jedi in galactic history."
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
