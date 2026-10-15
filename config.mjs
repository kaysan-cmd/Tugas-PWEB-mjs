export function rosterXIA () {
    const roster  = {
        Senin : () => {
            return "Bh.Arab,Matematika,Pancasila,Bh.Arab,Pemograman";
        },
        Selasa : () => {
            return "Bh.Inggris,Pemograman,PJOK,Pemograman,KIK";
        },
        Rabu : () => {
            return "Bh.Inggris,BK,PAI,Bh.Indo,Tahfidz";
        },
        Kamis : () => {
            return "Tahfidz,Sejarah,Basis-Data,Pemograman,Tahfidz";
        },
        Jumat : () => {
            return "Tahfidz,Basis-Data,Pemograman";
        }
    }; 
   return roster;
}

//2
export function menuHarian () {
    const menu = {
        sarapan : () => {
            return "Oatmeal";
        },
        makanSiang : () => {
            return "Burger";
        },
        makanMalam : () => {
            return "Ayam";
        },
        cemilan : () => {
            return "McFlurry";
        },
        minuman : () => {
            return "Es Teh Manis";
        }
    }; 
    return menu;
}