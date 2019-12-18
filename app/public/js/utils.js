$utils = {
    showPageBg: function(){
        let elem = document.getElementById('page-bg');
        elem.classList.add("active");
    },
    hidePageBg: function(){
        let elem = document.getElementById('page-bg');
        elem.classList.remove("active");
    },
    isNameSet: function(){
        let name = localStorage.getItem('name');
        if(name){
            return {isNameSet: true, name: name}
        }else{
            return {isNameSet: false}
        }
    },
    alphaOnly: function(){
        var key = event.keyCode;
        return ((key >= 65 && key <= 90) || key == 8);
    },
    setGroupId: function(){
        let url = window.location.href;
        url = url.split('/');
        //localStorage.setItem('groupId', url[4]);
        return url[3];
        
    },
    isAdmin: function(adminName){
        if(adminName == localStorage.getItem('name')){
            return true;
        }
        return false;
    }
}