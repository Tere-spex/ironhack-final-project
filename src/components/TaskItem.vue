<template>
    <div class="textlg">
        <ul role="list">
            <li class="py-3 sm:py-4">
                <div class="flex justify-between items-center border rounded-lg p-4 hover:bg-blue-100">
                    <div class="flex justify-center items-center gap-5">
                        <button class="text-2xl"><i class="fa-solid fa-circle-check"></i></button>
                        <p class="capitalize font-medium">list element</p>
                    </div>
                    <div class="inline-flex items-center font-semibold">
                        <ul class="flex gap-5 text-xl">
                            <li><button><i class="fa-solid fa-pen-to-square"></i></button></li>
                            <li><button><i class="fa-solid fa-trash"></i></button></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>