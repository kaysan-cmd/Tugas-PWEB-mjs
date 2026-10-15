console.info("Roster Kelas XI A");

import { rosterXIA } from './config.mjs';
const roster = rosterXIA();

console.log("Senin :", roster.Senin());
console.log("Selasa :", roster.Selasa());
console.log("Rabu :", roster.Rabu());
console.log("Kamis :", roster.Kamis());
console.log("Jumat :", roster.Jumat());

console.info("Makan Harian");

import { menuHarian } from './config.mjs';
const menu = menuHarian();

console.log("Sarapan :", menu.sarapan());
console.log("Makan Siang :", menu.makanSiang());
console.log("Makan Malam :", menu.makanMalam());
console.log("Cemilan :", menu.cemilan());
console.log("Minuman :", menu.minuman());