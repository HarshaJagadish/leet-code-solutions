var restoreString = function (s, indices) {
    var st = s.split("")
    console.log(st);
    var p = []
    for (i = 0; i < st.length; i++) {
        // p[i] = st[indices[i]]
        p[indices[i]] = st[i]
    }
    return p.toString("");
};

var q = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
console.log(q);