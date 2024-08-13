<template>
    <div class="bg-yellow-200 w-60 min-h-80 border-2 m-5">

        <div class="border-t-2 ml-1">
            <label for="Title">Title</label>
            <input type="text" placeholder="Title..."/>
        </div>

        <div class=" border-t-2 ml-1 ">
            <label for="debut">Date de debut</label>
            <input type="text" placeholder="Date..." />
        </div>
        <div class="border-t-2 mb-3 ml-1">
            <label for="debut">Date de fin</label>
            <input type="text" placeholder="Date..."/>

        </div>

        <div class="min-h-20 ml-1">
           <label for="description">Description</label>
            <textarea placeholder="Description"></textarea>
        </div>

        <div class="  ml-1">
            <label for="urgence">Priorite</label>
            <input type="text">
        </div>
        <div class="my-3 mx-8">
            <button class=" bg-sky-500 px-1 py-1 rounded-md ml-2">Create</button>
            <button class=" bg-gray-200 px-1 py-1 rounded-md ml-2">Cancel</button>
        </div>

    </div>

</template>


<script setup>


</script>
<style scoped></style>