import fetch from 'node-fetch';

export function getDiscussion(a) {
  // let emString = ''
  // if(filterBy.path){
  //   emString = /
  // if(filterBy.destination){
  //   emString = emString + `destination=${filterBy.destination}`
  // }
  let endpoint = `http://localhost:3001${a}`

  return fetch(endpoint)
    .then(value => value.json()) 

}