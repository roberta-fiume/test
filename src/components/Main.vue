<template>
    <div class="main">
        <div class="main-wrapper">
             <div class="main-contact-boxes">
                <img src="../assets/contact-lenses.jpg" id="contact-lenses">
            </div>
            <div class="main-shop">
                <p>The London Lens Company</p>
                <h1>EXPERIENCE YOUR VISION LIKE NEVER BEFORE</h1>
                <p>Hassell free contact lenses delivered to your door</p>

                <div class="main-buttons">
                    <button class="buttons" id="first"> Shop Today  </button>
                    <button class="buttons" id="second"> Take the test </button>
                </div>
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

.main-wrapper {
    display: flex;
    flex-direction: row;
}
.main-shop {
    display: flex;
    flex-direction: column;
}

.buttons {
    width: 130px;
    height: 35px;
    border-radius: 20px;
    color: black;
    border: none;
}
#first {
    background-color: orange;
    
}

#second {
    margin-left: 20px;
}

</style>