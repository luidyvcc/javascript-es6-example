import axios from 'axios';

async function getUserFromGithub(user) {

    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (error) {
        console.log('Usuário não existe');
    }

}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');