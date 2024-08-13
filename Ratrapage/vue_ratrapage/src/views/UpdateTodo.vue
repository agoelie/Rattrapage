<template>
    <div class=" bg-lime-300 w-60 min-h-80 border-2 m-5">

        <div class="border-t-2 ml-1">
            <h1>Title</h1>
            <input type="text" placeholder="Title..."/>
        </div>

        <div class=" border-t-2 ml-1 ">
            <h1>Date de debut</h1>
            <input type="text" placeholder="Date..." />
        </div>
        <div class="border-t-2 mb-3 ml-1">
            <h1>Date de fin</h1>
            <input type="text" placeholder="Date..."/>

        </div>

        <div class="min-h-20 ml-1">
            <h1>Descrption</h1>          
            <textarea placeholder="Description"></textarea>
        </div>

        <div class="  ml-1">
            <h1>Priorite</h1>
            <input type="text">
        </div>
        <div class="my-3 mx-5 flex">
            <button class=" bg-sky-500 px-1 py-1 rounded-md ml-2">Back</button>
            <button class=" bg-gray-200 px-1 py-1 rounded-md ml-2">Modify</button>
            <button class=" bg-sky-500 px-1 py-1 rounded-md ml-2">Cancel</button>

        </div>

    </div>
</template>