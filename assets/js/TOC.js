document.addEventListener('DOMContentLoaded', function() {
  const tocContainer = document.getElementById('toc-list');
  const headings = document.querySelectorAll('#article h2, #article h3, #article h4');

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName[1]); // Get the heading level (2, 3, or 4)
    const anchorId = `toc-${level}-${index + 1}`; // Generate a unique anchor id with prefix 'toc-'
    const anchorLink = `<a href="${anchorId}">${heading.textContent}</a>`;
    const listItem = document.createElement('li');

    listItem.innerHTML = anchorLink;

    // Adjust the indentation based on the heading level
    listItem.style.marginLeft = `${(level - 2) * 30}px`;

    // Append the list item to the TOC container
    tocContainer.appendChild(listItem);

    // Add the anchor id to the heading for linking
    heading.id = anchorId;

    // Add click event to scroll with offset
    listItem.addEventListener('click', (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(`#${anchorId}`);
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight; // Get header height
        const offset = -headerHeight - 30; // Set offset
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
