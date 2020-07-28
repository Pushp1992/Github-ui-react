import axios from 'axios';

const USER_NAME='pushp1992';

const GithubService = {

    async getUserProfile() {
        const encodedURI = window.encodeURI(`/proxy/users/${USER_NAME}`);

        try {
            return await axios({
                method: "GET",
                url: encodedURI,
                "headers": {
                    'Content-Type': "application/json",
                    "SERVER": "GITHUB_SERVER"
                }
            }).then(function (response) {
                return response.data
            })
        } catch (error) {
            console.error(error)
        }
    },
}

export default GithubService;