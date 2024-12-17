// EXAMPLE 1

class RequestData {
  // with typescript we need to specify our fields here and their type
  method: string;
  uri: string;
  response: string;

  constructor(method: string, uri: string, response: string = "") {
    this.method = method;
    this.uri = uri;
    this.response = response;
  }
}

const myData = new RequestData("GET", "http://google.com", "");
console.log(myData);

// EXAMPLE 2

class ReqData {
  // alternative syntax is instead of specifying the fields in the class to specify them in the constructor
  constructor(public readonly method: string, public readonly uri: string) {}
}

const moreData = new ReqData("POST", "http://google.com");
console.log(moreData);
