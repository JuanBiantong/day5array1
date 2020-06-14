let itJobs = ['Web Developer', 'System Analis', 'Network Engineer', 'System Engineer'];
console.log(`Panjang Data ${itJobs.length}`);
console.log(`Pekerjaan IT : ${itJobs}`)

document.write(`<h2 style = "color : blue">5 Pekerjaan di bidang IT:</h2>`)
for(i = 0; i <itJobs.length; i++){
    document.write(`<li>${itJobs[i]}</li>`);
}