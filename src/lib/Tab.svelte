<script>
  import { HtmlTag } from "svelte/internal";

  let Bari = [
    "https://thumbs2.imgbox.com/fc/d6/vYip2fDi_t.jpg",
    "https://thumbs2.imgbox.com/a9/8d/nixkpLNM_t.jpg",
    "https://thumbs2.imgbox.com/83/e4/2rLlWlmC_t.jpg",
    "https://thumbs2.imgbox.com/31/86/lh2alsOA_t.jpg",
    "https://thumbs2.imgbox.com/ef/a9/z1BMvz8w_t.jpg",
    "https://thumbs2.imgbox.com/b0/c2/0jYuRxVC_t.jpg",
    "https://thumbs2.imgbox.com/f8/bb/JSyG3x4R_t.jpg",
    "https://thumbs2.imgbox.com/93/6e/qxccXWTb_t.jpg",
    "https://thumbs2.imgbox.com/60/5f/PuVQrAlk_t.jpg",
    "https://thumbs2.imgbox.com/d2/5e/fUrmNRpZ_t.jpg",
    "https://thumbs2.imgbox.com/c1/9a/0xk36NOq_t.jpg",
    "https://thumbs2.imgbox.com/1b/39/0nesAifQ_t.jpg",
    "https://thumbs2.imgbox.com/75/1f/17GtMobs_t.jpg",
    "https://thumbs2.imgbox.com/55/34/PN70eeAv_t.jpg",
    "https://thumbs2.imgbox.com/e1/4c/heZ8lroZ_t.jpg",
    "https://thumbs2.imgbox.com/21/72/DgWrrtn7_t.jpg",
    "https://thumbs2.imgbox.com/94/58/uHUl5YCZ_t.jpg",
    "https://thumbs2.imgbox.com/c9/c7/0qFG2Aaf_t.jpg",
    "https://thumbs2.imgbox.com/f0/84/ahrk0tx6_t.jpg",
    "https://thumbs2.imgbox.com/d1/f8/7V9Zx9Xn_t.jpg",
    "https://thumbs2.imgbox.com/db/68/lxDHKio8_t.jpg",
    "https://thumbs2.imgbox.com/67/60/XzXYNQHk_t.jpg",
    "https://thumbs2.imgbox.com/45/00/fYjbSlT5_t.jpg",
    "https://thumbs2.imgbox.com/bb/a0/24KLBgwG_t.jpg",
    "https://thumbs2.imgbox.com/66/2f/H1BY7yT8_t.jpg",
    "https://thumbs2.imgbox.com/ec/e5/l3QTwBeY_t.jpg",
    "https://thumbs2.imgbox.com/87/e9/HM1hodeA_t.jpg",
    "https://thumbs2.imgbox.com/86/22/AEi84ahc_t.jpg",
    "https://thumbs2.imgbox.com/a0/26/wjWlF698_t.jpg",
    "https://thumbs2.imgbox.com/67/e2/jxQfYaIv_t.jpg",
    "https://thumbs2.imgbox.com/e7/6f/HzS3tTAA_t.jpg",
    "https://thumbs2.imgbox.com/9d/20/5lv1eBOs_t.jpg",
    "https://thumbs2.imgbox.com/e2/0e/YG0Lg2Pt_t.jpg",
    "https://thumbs2.imgbox.com/fa/72/eFPwNNO9_t.jpg",
    "https://thumbs2.imgbox.com/d2/27/h2DtUhHl_t.jpg",
  ];
  const tabs = [{ id: 1, list: Bari }];

  $: modal = false;
  $: chose = "";

  let html = document.getElementById("html");

  function select(src) {
    modal = true;
    chose = src.src;
    html.classList.add("is-clipped");
  }

  function close() {
    modal = false;
    chose = "";
    html.classList.toggle("is-clipped");
  }

  export let selected = 1;
</script>

{#each tabs as tab}
  {#if tab.id === selected}
    <div class="tile is-ancestor is-flex-wrap-wrap">
      {#each tab.list as src}
        <div
          class="tile is-parent is-3"
          on:click|preventDefault={() => select({ src })}
        >
          <div class="tile is-child is-clickable">
            <img {src} alt="" />
          </div>
        </div>
      {/each}
    </div>
    {#if modal === true}
      <div class:is-active={(modal = true)} class="modal">
        <div class="modal-background" on:click={close} />
        <div class="modal-content is-clipped">
          <img src={chose} class="image is-fullwidth" alt="" />
        </div>
        <button
          class="modal-close is-large"
          on:click={close}
          aria-label="close"
        />
      </div>
    {/if}
  {/if}
{/each}
