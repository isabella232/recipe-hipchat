module.exports = Franz => class HipChat extends Franz {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(`${url}/api/features`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();

      return Object.hasOwnProperty.call(data, 'features');
    } catch (err) {
      console.error(err);
    }

    return false;
  }

  buildUrl(url) {
    return `${url}/chat`;
  }
};
