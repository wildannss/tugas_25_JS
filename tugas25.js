function tugas25(){
    let x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : " + x);
    console.log("Ascending : " + x.sort());
    console.log("Descending : " + x.reverse(x.sort()));
    let y = x.filter(a => {
        return a > 10;
    });
    console.log("Filter > 10 : " + y);
};

tugas25();