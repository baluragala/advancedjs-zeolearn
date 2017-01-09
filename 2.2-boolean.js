/**
 * Created by moksha on 07/01/17.
 */
var isHeading=true;
var isBody=false;

var isHeading=new Boolean(true);
var isBody=new Boolean(false);

var isHeading=new Boolean(true);
var isBody=new Boolean('');
var isBody=new Boolean(null);
var isBody=new Boolean(undefined);
var isBody=new Boolean(0);

var many=[];

let whoIam = {
    name:"Bala Krishna Ragala",
    experience: ["7+ as dev", "10+ as trainer","delivered 50+ online/20+ on-site"],
    passion:"learn Code Share",
    technologies:[...many],
    motivatesBy:"technology",
    believesIn:"myself",
    attitude:"+ve",
    github:"baluragala"
};

console.log(whoIam,many);