import './Pagination.scss';

export default class Pagination {

  /**
   * Calculate number of pages based on given requirements
   * 
   * @param {number} itemsTotal Total number of items to paginate
   * @param {number} perPage Number of items per page
   */
  calculatePagesTotal(itemsTotal, perPage) {
    return Math.ceil(itemsTotal/perPage);
  }

  /**
   * Generate HTML for pagination
   * 
   * @param {number} itemsTotal Total number of items to paginate
   * @param {number} currentPage Current active page
   */
  render($container, itemsTotal, currentPage = 1, itemsPerPage = 10) {
    this.$container = $container;

    if(this.$container) {
      const totalPages = this.calculatePagesTotal(itemsTotal, itemsPerPage);
      const prevClass = (currentPage > 1 && itemsTotal > 0) ? '' : 'is-disabled';
      const nextClass = (currentPage < totalPages && itemsTotal > 0) ? '' : 'is-disabled';
      const prevLink = (currentPage > 1) ? currentPage-1 : 1;
      const nextLink = (currentPage < totalPages) ? currentPage+1 : totalPages;

      let html = `
        <ul class="pagination">
          <li class="${prevClass}"><a href="#/${prevLink}">Prev</a></li>
      `;
      for(let i = 0; i < totalPages; i++) {
        html += (currentPage === i+1) ? `<li class="is-active">` : `<li>`;
        html += `<a href="#/${i+1}">${i+1}</a>`;
        html += `</li>`;
      }
      html += `
          <li class="${nextClass}"><a href="#/${nextLink}">Next</a></li>
        </ul>
      `;
      this.$container.innerHTML = html;
    }
  }

}