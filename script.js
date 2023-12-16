function toggleAccordion(sectionId) {
    var panel = document.getElementById(sectionId);
    var btn = document.querySelector('[data-section="' + sectionId + '"]');

    // Toggle the active class on the button
    btn.classList.toggle('active');

    // Toggle the display of the panel
    panel.classList.toggle('active');
  }