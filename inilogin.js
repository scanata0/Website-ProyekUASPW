window.onload = function() {
    var log=[]
    var jumlah=0;
    var login = document.getElementById("btn-submit");
    let sus = document.getElementById("myAudio");
    login.onclick = function (params) {
        let user = document.querySelector("#user");
        let pass = document.querySelector("#pass");
        if(log.length<1){
            let container = document.querySelector("#append");
            let isi="";
            isi = `
            <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                <strong>Oh no!</strong> the array is still empty!.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `
            $(container).append(isi);
        }else{
            let logged = false;
            jumlah++;
            let id = jumlah;
            for (let index = 0; index < log.length; index++) {
                if(log[index][0]==user.value&&log[index][1]==pass.value){
                    logged = true;
                }
            }
            if(logged){
                let container = document.querySelector("#append");
                let isi="";
                isi = `
                <div class="alert alert-success alert-dismissible fade show mt-2" role="alert">
               Login successfully!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
                `
                $(container).append(isi);
            }
        }
    }
    var register = document.querySelector("#register");
    register.onclick = function() {
        let user = document.querySelector("#user");
        let pass = document.querySelector("#pass");
        let taken = false;
        for (let index = 0; index < log.length; index++) {
            if(log[index][0]==user.value){
                taken = true;
            }
        }
        if(!taken){
            log.push([user.value,pass.value]);
            console.log(log);
        }else{
            let container = document.querySelector("#append");
            let isi="";
            isi = `
            <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
            <strong>Oh no!</strong> this account already exist.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
            
            `
            $(container).append(isi);
        }
    }

    
}

/* <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                <strong>Oh no!</strong> this account already exist.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> */

            // <div class="alert alert-success mt-2" id="${id}" role="alert">
            // <h4 class="alert-heading">Hello ${user.value}!</h4>
            // <p>Semangat belajar bootstrapnya ya, memang banyak ini :).</p>
            // <hr>
            // <p class="mb-0">Kalo bingung atau apa bisa google atau liat contoh di getbootstrap.com.</p>
            // </div>

        //     <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
        //     <strong>Oh no!</strong> the array is still empty!.
        //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        // </div>