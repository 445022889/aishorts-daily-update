document.querySelectorAll("[data-analysis-group]").forEach((group) => {
  const tabs = group.querySelectorAll("[data-tab]");
  const panes = group.querySelectorAll("[data-pane]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panes.forEach((pane) => {
        pane.classList.toggle("active", pane.getAttribute("data-pane") === target);
      });
    });
  });
});

document.querySelectorAll(".toggle-card").forEach((card) => {
  const button = card.querySelector(".toggle-head");
  if (!button) return;
  button.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});
