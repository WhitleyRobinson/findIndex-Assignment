// findUserByUsername
function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user) {
        return user.username === username;
    })
}

//const users = [
    //{username: 'mlewis'},
    //{username: 'akagen'},
    //{username: 'msmith'}
//];

//const result = findUserByUsername(users, 'mlewis')
//console.log(result)

//const result = findUserByUsername(users, 'taco')
//console.log(result)

// removeUser

function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user) {
        return user.username === username;
    })
    if (foundIndex === -1) return;

    return usersArray.splice(foundIndex, 1) [0];
}

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
];

//const result = removeUser(users, 'akagen')
//console.log(result)

const result = removeUser(users, 'akagen')
console.log(result)
