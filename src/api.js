export default class API {
  constructor() {
    this.urls = {
      meals: 'https://www.themealdb.com/api/json/v1/1/search.php?f=b',
      likes: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/preicaFHrOkwZj9Kl7kw/likes',
      comments: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/preicaFHrOkwZj9Kl7kw/comments',
      newComment: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/preicaFHrOkwZj9Kl7kw/comments?item_id=',
    };
  }

  async get(url) {
    this.url = url;
    const response = await fetch(url);
    return response.json();
  }

  async post(url, data) {
    this.url = url;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    });
    const res = await response;
    return res;
  }
}

// previous id: mPN7hLrqXH31msGNf3B9
