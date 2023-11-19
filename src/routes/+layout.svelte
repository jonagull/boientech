<script lang="ts">
    import "../fonts.css";
    import "../global.css";
</script>

<main>
    <slot />
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Akira";
    }
</style>
