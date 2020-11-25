const todoApi = (url, reload) => {
  const addTodo = (text) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: text }),
    })
      .then((response) => response.status)
      .then((status) => {
        console.log("Status:", status);
        reload();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const removeTodo = (id) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.status)
      .then((status) => {
        console.log("Status:", status);
        reload();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const updateTodo = ({ id, title, isCompleted }) => {

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: title,
        isCompleted: isCompleted,
      }),
    })
      .then((response) => response.status)
      .then((status) => {
        console.log("Status:", status);
        reload();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return [addTodo, removeTodo, updateTodo];
};

export default todoApi;
