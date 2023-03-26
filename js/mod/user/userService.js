async function postUser(user) {
    try {
      const response = await fetch('http://localhost:4500/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.body.json();
      console.log("Response data:", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }