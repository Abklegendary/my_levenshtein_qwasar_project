function my_levenshtein(String1, String2) {
    if (String1.length !== String2.length) {
        return -1;
     }
     let dist = 0;
     for (let i = 0; i < String1.length; i++) {
        if (String1[i] !== String2[i]) {
           dist++;
        };
     };
     return dist;
    }
//console.log(my_levenshtein(String1, String2));
