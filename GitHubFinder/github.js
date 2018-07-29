class GitHub{
  constructor() {
    this.client_id = "966ccd40ede1123d9fd7";
    this.client_secret = "bdcf56e9c8b294c6fdf5f1a695ae561f4517b4ba";
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponce.json();
    const repos = await repoResponce.json()
    return { profile, repos };
  }

  
}