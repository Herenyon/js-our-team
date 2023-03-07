'use strict'



const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg',

    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg',

    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg',

    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg',

    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg',

    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg',

    },


];


const element = document.getElementById('container');

for (let myTeam of ourTeam) {
    for (let key in myTeam) {

        console.log(`${key}: ${myTeam[key]}`);
    }

    const teamElement = document.createElement('div');

    teamElement.innerHTML = `
<h3> name: ${myTeam.name}</h3>
<div> role: ${myTeam.role}</div>
<div> photo: ${myTeam.photo}</div>

`;

    element.append(teamElement);

}

