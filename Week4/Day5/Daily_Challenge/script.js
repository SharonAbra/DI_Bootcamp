function isAnagram() {
    let string1 = prompt("Type your first word / sentence:").trim().toLowerCase().split("").filter(char => char !== " ").sort();
    let string2 = prompt("Type your second word / sentence:").trim().toLowerCase().split("").filter(char => char !== " ").sort();
    console.log(string1);
    console.log(string2);
    if(string1.length!=string2.length) {
        alert("Sorry, not an anagram...");
        return "False";
        } else {
            for (let i=0;i<string1.length;i++)
                if(string1[i]!=string2[i]) {
                alert("Sorry, not an anagram");
                return "False";
                }
        }
        alert("ANAGRAM!");
        return "True";
}

isAnagram();
