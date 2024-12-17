// ReturnType is a utility type that extracts the return type from a function type.

// Example 1
function getResult(flag: boolean): string | number {
  return flag ? "Success" : 404;
}

type ResultReturnType = ReturnType<typeof getResult>;

// Example 2
function fetchData(callback: (data: string) => void): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Fetched data";
      resolve(data);
      callback(data);
    }, 1000);
  });
}

type FetchDataReturnType = ReturnType<typeof fetchData>;
