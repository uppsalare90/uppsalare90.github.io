const playerWorldDeafListMpo = new Map();
const playerWorldDeafListFpo = new Map();
const countryNames = {
  DK: "Denmark",
  EE: "Estonia",
  FI: "Finland",
  IS: "Iceland",
  LV: "Latvia",
  LT: "Lithuania",
  NO: "Norway",
  SE: "Sweden"
};

const tournamentUrls = [
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=MPM",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=MPG",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=Ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=fa1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=mg1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=ma3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=mj4",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=MPM",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=MPg",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=Ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=Mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=Ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=fa2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=mj1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=MPm",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=Mpg",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=Ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=fa1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=ma3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=fa2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=fa3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=mj4",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=MPM",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=Mpg",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=Ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=fa1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=ma3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=Ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=fa1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=ma3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=MPm",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=fPm",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=mpg",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=fa1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=ma3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11206&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11206&Division=Ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11206&Division=Mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11206&Division=Ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11206&Division=Ma3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=Ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=fa1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=ma3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=MPM",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=FPM",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=fa2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=mj3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=fj3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=4537&Division=MPT",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=4537&Division=Ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=4537&Division=fa1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=4537&Division=mm1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=4537&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=3782&Division=ma1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=3782&Division=fa1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=3782&Division=ma2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=3782&Division=ma3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=fP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MA60",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=FJ18",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=FJ15",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=93562&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=93562&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=93562&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=93562&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=93562&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=92384&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=92384&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=92384&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=92384&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=92384&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MP60",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=FA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MA60",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=FA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=88312&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=88312&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=88312&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=88312&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=88312&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=FA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=FA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=FA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MP60",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MA55",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=80590&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=80590&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77153&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77153&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77153&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77153&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=FA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=MJ18",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=FJ18",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=FP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MP60",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=FA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MA60",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MA4",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=FA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=FA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=MJ18",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=FJ18",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=FA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MJ18",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=FJ18",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=61835&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=FP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MA60",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=FA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MJ18",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MJ15",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60887&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60887&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60887&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=FP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=FP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MJ15",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MJ12",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=FA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=MA3",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=MP40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=MA50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35337&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35337&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35337&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35337&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35337&Division=FA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35138&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35138&Division=MP50",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35138&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35138&Division=MA40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35138&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=32138&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=32138&Division=MPM",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MPM",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MPG",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MM1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MG1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MA2",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MJ1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=91781&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=91781&Division=Mp40",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=107451&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=107613&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11206&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=93562&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=92384&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=61835&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35337&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35138&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=32138&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=107613&Division=FPO"
];

const fetchRetryAttempts = 3;
const fetchRetryDelayMs = 1000;
const loadingScreenTimeoutMs = 10000;
const playerRenderDebounceMs = 250;
let playerRenderTimeout;

window.addEventListener("load", async () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const loadingTimeout = setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.hidden = true;
    }
    showLoadingDelayMessage();
    renderPlayerList();
  }, loadingScreenTimeoutMs);

  try {
    document
      .getElementById("countryFilter")
      ?.addEventListener("change", renderPlayerList);

    const requestResults = await Promise.all(
      tournamentUrls.map(fetchTournamentPlayers)
    );

    renderPlayerList();
    showRequestFailureMessage(requestResults.filter(success => !success).length);
  } finally {
    clearTimeout(loadingTimeout);
    clearTimeout(playerRenderTimeout);
    playerRenderTimeout = null;
    if (loadingScreen) {
      loadingScreen.hidden = true;
    }
  }
});

function showRequestFailureMessage(failedRequestCount) {
  const status = document.getElementById("requestStatus");
  if (!status) {
    return;
  }

  if (!failedRequestCount) {
    status.textContent = "";
    status.hidden = true;
    return;
  }

  status.textContent =
    `${failedRequestCount} data requests failed. The ranking may be incomplete. Reload the page to retry.`;
  status.hidden = false;
}

function showLoadingDelayMessage() {
  const status = document.getElementById("requestStatus");
  if (status) {
    status.textContent =
      "Data is still loading. The ranking will update as more results arrive.";
    status.hidden = false;
  }
}

function schedulePlayerListRender() {
  clearTimeout(playerRenderTimeout);
  playerRenderTimeout = setTimeout(() => {
    playerRenderTimeout = null;
    renderPlayerList();
  }, playerRenderDebounceMs);
}

async function fetchTournamentPlayers(url) {
  let scores;

  for (let attempt = 1; attempt <= fetchRetryAttempts; attempt++) {
    try {
      const resp = await fetch(url, {
        headers: {
          Accept: "application/json"
        }
      });

      if (!resp.ok) {
        const responseBody = await resp.text();
        const isRateLimited =
          resp.status === 429 || /too many requests/i.test(responseBody);

        if (isRateLimited) {
          if (attempt === fetchRetryAttempts) {
            console.error(
              "PDGA rate limit persisted after multiple attempts:",
              url
            );
            return false;
          }

          const retryDelay = fetchRetryDelayMs * 2 ** (attempt - 1);
          console.warn(
            `PDGA rate limit; retrying in ${retryDelay} ms (${attempt}/${fetchRetryAttempts - 1} retries):`,
            url
          );
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          continue;
        }
      }

      if (resp.status === 404) {
        console.warn("No results for this division (404); skipping:", url);
        return false;
      }

      if (!resp.ok) {
        throw new Error(`Invalid status code: ${resp.status}`);
      }

      const data = await resp.json();
      if (!Array.isArray(data?.data?.scores)) {
        throw new Error("Response does not contain a valid scores array.");
      }

      scores = data.data.scores;
      break;
    } catch (err) {
      if (attempt === fetchRetryAttempts) {
        console.error(
          "Could not fetch player data after multiple attempts:",
          url,
          err
        );
        return false;
      }

      const retryDelay = fetchRetryDelayMs * 2 ** (attempt - 1);
      console.warn(
        `API request failed; retrying in ${retryDelay} ms (${attempt}/${fetchRetryAttempts - 1} retries):`,
        url,
        err
      );
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }

  if (!scores.length) {
    return true;
  }

  const divisionMatch = url.match(/Division=([A-Za-z0-9]+)/);
  const division = divisionMatch
    ? divisionMatch[1].toUpperCase()
    : "";

  const isFDivision = division.startsWith("F");

  for (const player of scores) {
    const name = player.Name ?? "—";
    const pdgaNum = String(player.PDGANum ?? "");
    const rawRating = player.Rating;
    const rating =
      rawRating === null ||
      rawRating === undefined ||
      rawRating === "" ||
      isNaN(rawRating)
        ? null
        : rawRating;
    if (!pdgaNum || rating === null) {
      continue;
    }

    const country = normalizeCountryCode(
      player.Country ?? player.CountryCode ?? player.country ?? player.countryCode
    );

    const playerData = {
      name,
      pdgaNum,
      rating,
      country
    };

    const playerList = isFDivision
      ? playerWorldDeafListFpo
      : playerWorldDeafListMpo;
    const existingPlayer = playerList.get(pdgaNum);

    if (!existingPlayer) {
      playerList.set(pdgaNum, playerData);
    } else if (!existingPlayer.country && country) {
      existingPlayer.country = country;
    }
  }

  schedulePlayerListRender();
  return true;
}

function renderPlayerList() {
  const listDiv = document.getElementById("playerList");
  const listDivFpo = document.getElementById("playerListFpo");
  const countryFilter = document.getElementById("countryFilter");
  const allPlayers = [
    ...playerWorldDeafListMpo.values(),
    ...playerWorldDeafListFpo.values()
  ];

  populateCountryFilter(countryFilter, allPlayers);
  const selectedCountry = countryFilter?.value ?? "";

  const mpoPlayers = Array.from(playerWorldDeafListMpo.values())
    .filter(player => !selectedCountry || player.country === selectedCountry)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  const fpoPlayers = Array.from(playerWorldDeafListFpo.values())
    .filter(player => !selectedCountry || player.country === selectedCountry)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  if (!mpoPlayers.length) {
    listDiv.innerHTML = `
      <p style="font-weight:bold;">
        ${selectedCountry ? "No Men players found for this country." : "No player data found."}
      </p>
    `;
  } else {
    listDiv.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>PDGA</th>
            <th>Country</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          ${createRows(mpoPlayers)}
        </tbody>
      </table>
    `;
  }

  if (!fpoPlayers.length) {
    listDivFpo.innerHTML = `
      <p style="font-weight:bold;">
        ${selectedCountry ? "No Women players found for this country." : "No Women division players found."}
      </p>
    `;
  } else {
    listDivFpo.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>PDGA</th>
            <th>Country</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          ${createRows(fpoPlayers)}
        </tbody>
      </table>
    `;
  }
}

function populateCountryFilter(select, players) {
  if (!select) {
    return;
  }

  const selectedCountry = select.value;
  const countries = [...new Set(players.map(player => player.country).filter(Boolean))]
    .sort();

  select.innerHTML = `
    <option value="">All countries</option>
    ${countries.map(country => `
      <option value="${country}">${country} - ${countryNames[country] ?? country}</option>
    `).join("")}
  `;

  if (countries.includes(selectedCountry)) {
    select.value = selectedCountry;
  }
}

function normalizeCountryCode(value) {
  const country = String(value ?? "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(country) ? country : "";
}


function createRows(players) {
  return players.map((player, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>
        <a
          href="https://www.pdga.com/player/${player.pdgaNum}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHtml(player.name)}
        </a>
      </td>
      <td>${player.pdgaNum || "—"}</td>
      <td>${player.country || "—"}</td>
      <td>${player.rating ?? "—"}</td>
    </tr>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
