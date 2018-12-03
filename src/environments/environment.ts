export const environment = {
   production: true,
   voter: {
      url : 'http://localhost:8081/v1/voter/',
      loginUrl: 'http://localhost:8081/v1/login/',
      checkTokenUrl: 'http://localhost:8081/v1/login/check/',
   },
   candidate: {
      url: 'http://localhost:8082/v1/candidate',
      numberElectionUrl: 'http://localhost:8082/v1/candidate/numberElection',
   },
   election: {
      url: 'http://localhost:8084/v1/election'
   },
   vote: {
      url: 'http://localhost:8084/v1/vote/',
   }
};