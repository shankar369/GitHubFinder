class GitHub{
    constructor(){
        this.cliend_id = '5a61f38043d13d833760';
        this.client_secret = '09f6f10af84524d18714ed7109c536288826e6b6';
        this.repos_count = 9;
        this.repos_sort = 'created : asc';
    }
    async getUser(user){
        const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliend_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.cliend_id}&client_secret=${this.client_secret}`);
        const profile = await userResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
}
