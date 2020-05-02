const Route = {
    INDEX = '/',
  }
  
  export default Route;
  
  export const isPrivateRoute = (pathname) => {
    const myListRe = /\/mylist/;
    const addReviewRe = /\/film\/[1-9][\d]*\/review/;
  
    return myListRe.test(pathname) || addReviewRe.test(pathname);
  };
  