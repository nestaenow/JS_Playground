//global variale
var contacts = [
    //first object
    {
        "firstName": "Nesta",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    //second object
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    //third object
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    //fourth object
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop] || "No such contact";
        } else {
            return "No such contact";
        }
    }
    // Only change code above this line
}
lookUpProfile("Akira", "likes");