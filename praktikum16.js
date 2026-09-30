let namaMahasiswa = "Reza";
let nilaiTugas = 95;
let nilaiUTS = 90;
let nilaiUAS = 92;

let tugas = nilaiTugas * (30/100);
let uts = nilaiUTS * (30/100);
let uas = nilaiUAS * (40/100);

let nilaiAkhir = tugas + uts + uas;

let grade = "";
if (nilaiAkhir >= 90) {
  grade = "A";
} else if (nilaiAkhir >= 80) {
  grade = "B";
} else if (nilaiAkhir >= 70) {
  grade = "C";
} else if (nilaiAkhir >= 60) {
  grade = "D";
} else {
  grade = "E";
}

console.log("Nama Mahasiswa:", namaMahasiswa);
console.log("Nilai tugas (30%):", tugas);
console.log("Nilai UTS (30%):", uts);
console.log("Nilai UAS (40%):", uas);
console.log("Nilai akhir:", nilaiAkhir);
console.log("Grade:", grade);