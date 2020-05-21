class CustomHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  get(url, callback) {
    this.http.open("GET", url, true);

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, this.http.responseText);
      } else {
        callback("Error fetching posts", null);
      }
    };

    this.http.send();
  }

  post(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = () => {
      if (this.http.status === 201) {
        callback(
          null,
          `Post ${JSON.parse(this.http.responseText).id} saved successfully`
        );
      } else {
        callback("Error saving data", null);
      }
    };

    this.http.send(JSON.stringify(data));
  }

  put(url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(
          null,
          `Post ${JSON.parse(this.http.responseText).id} updated successfully`
        );
      } else {
        callback("Error updating data", null);
      }
    };
    this.http.send(JSON.stringify(data));
  }

  delete(url, callback) {
    this.http.open("DELETE", url, true);

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, `Post deleted successfully`);
      } else {
        callback("Error deleting data", null);
      }
    };

    this.http.send();
  }
}

export default CustomHTTP;
