function repeatStringNumTimes(str, num) {
    if(num<0){
        return "";
    }
    var ans=str;
    for(var i=1;i<num;i++){
        ans+=str;
    }
    return ans;
}
repeatStringNumTimes("abc", 3);