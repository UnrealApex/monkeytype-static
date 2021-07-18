import * as Misc from './misc';

let seconds = 0;
let addedAllToday = false;
let dayToday = null;

export function addSeconds(s){
  if (addedAllToday){
    let nowDate = new Date();
    nowDate = nowDate.getDate();
    if(nowDate > dayToday){
      seconds = s;
      return
    }
  }
  seconds += s;
}

export function getString(){
  let secString = Misc.secondsToString(Math.round(seconds), true);
  return secString + (addedAllToday === true ? " today" : " session");
}
