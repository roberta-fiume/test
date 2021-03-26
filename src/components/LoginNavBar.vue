<template>
    <div class="login-nav-bar">
        <div class="login-nav-bar__social-icons">
            <img src="../assets/facebook.png" id="facebook">
            <img src="../assets/instagram.png" id="instagram">
            <img src="../assets/twitter1.png" id="twitter">
            <img src="../assets/whatsapp.jpg" id="whatsapp">
        </div>
        <div class="login-nav-bar-access">
            <p class="login-nav-bar-login">Login/Register</p>
            <div class="login-nav-bar-icon" >
                <span class="material-icons">
                    perm_identity
                </span>
                <span class="material-icons" id="cart">
                    shopping_cart
                </span>
            </div>
        </div>  
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    }
}
</script>

<style>
.login-nav-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.login-nav-bar-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 5px; 
}

#facebook {
    width: 20px;
    height: 20px;
}

#instagram {
    width: 20px;
    height: 20px;
}

#twitter {
    width: 20px;
    height: 20px;
}

#whatsapp {
    width: 20px;
    height: 20px;
}

#cart {
    margin-left: 20px;
}

.login-nav-bar-access {
    display: flex;
    flex-direction: row;
}
    
 

</style>