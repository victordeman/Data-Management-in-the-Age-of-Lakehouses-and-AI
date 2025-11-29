class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-white shadow-md p-4" role="banner">
                <div class="container mx-auto flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-primary-500">Data Management in the Age of Lakehouses and AI</h1>
                    <button id="menu-toggle" class="md:hidden text-gray-600 focus:outline-none" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle navigation menu">
                        <i data-feather="menu" class="w-6 h-6" aria-hidden="true"></i>
                    </button>
                    <nav id="nav-menu" class="hidden absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 md:flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4" role="navigation" aria-hidden="true">
                        <a href="index.html" class="text-gray-600 hover:text-primary-500">Overview</a>
                        <a href="#curriculum" class="text-gray-600 hover:text-primary-500">Curriculum</a>
                        <div class="relative">
                            <button class="dropdown-button text-gray-600 hover:text-primary-500 flex items-center w-full justify-between md:justify-start" aria-expanded="false" aria-controls="slides-dropdown" aria-label="Toggle slides menu">
                                Slides <i data-feather="chevron-down" class="ml-1 w-4 h-4 md:hidden" aria-hidden="true"></i>
                            </button>
                            <div id="slides-dropdown" class="hidden absolute md:group-hover:block bg-white shadow-md rounded-md mt-2 p-2 z-10 w-full md:w-auto" aria-hidden="true">
                                <a href="slides/week1-2.html" class="block text-gray-600 hover:text-primary-500">Week 1-2</a>
                                <a href="slides/week3-4.html" class="block text-gray-600 hover:text-primary-500">Week 3-4</a>
                                <a href="slides/week5.html" class="block text-gray-600 hover:text-primary-500">Week 5</a>
                                <a href="slides/week6.html" class="block text-gray-600 hover:text-primary-500">Week 6</a>
                                <a href="slides/week7-8.html" class="block text-gray-600 hover:text-primary-500">Week 7-8</a>
                                <a href="slides/week9.html" class="block text-gray-600 hover:text-primary-500">Week 9</a>
                                <a href="slides/week10.html" class="block text-gray-600 hover:text-primary-500">Week 10</a>
                                <a href="slides/week11.html" class="block text-gray-600 hover:text-primary-500">Week 11</a>
                                <a href="slides/week12.html" class="block text-gray-600 hover:text-primary-500">Week 12</a>
                                <a href="slides/week13.html" class="block text-gray-600 hover:text-primary-500">Week 13</a>
                                <a href="slides/week14.html" class="block text-gray-600 hover:text-primary-500">Week 14</a>
                                <a href="slides/week15.html" class="block text-gray-600 hover:text-primary-500">Week 15</a>
                            </div>
                        </div>
                        <a href="#capstone" class="text-gray-600 hover:text-primary-500">Capstone</a>
                        <a href="resources.html" class="text-gray-600 hover:text-primary-500">Resources</a>
                    </nav>
                </div>
            </header>
        `;
    }
}
customElements.define('custom-header', CustomHeader);
