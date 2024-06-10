const users = [
    { username: 'dhiraj123', password: 'pass123' },
    { username: 'sarthak25', password: 'pass123' },
    { username: 'hardik33', password: 'pass123' },
    { username: 'virat34', password: 'pass123' },
];

export const fetchUsers = (username, password) => {
    console.log(`Fetching user: ${username}, ${password}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((u) => u.username === username && u.password === password);

            if (user) {
                resolve(user);
            } else {
                reject("Invalid Username or Password");
            }
        }, 1000);
    });
}