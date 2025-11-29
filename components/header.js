class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-white shadow-md p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-primary-500">Data Management in the Age of Lakehouses and AI</h1>
                    <nav class="flex space-x-4">
                        <a href="index.html" class="text-gray-600 hover:text-primary-500">Overview</a>
                        <a href="#curriculum" class="text-gray-600 hover:text-primary-500">Curriculum</a>
                        <div class="relative group">
                            <button class="text-gray-600 hover:text-primary-500">Slides</button>
                            <div class="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 p-2 z-10">
                                <a href="slides/week1-2.html" class="block text-gray-600 hover:text-primary-500">Week 1-2</a>
                                <a href="slides/week3-4.html" class="block text-gray-600 hover:text-primary-500">Week 3-4</a>
                                <a href="slides/week5.html" class="block text-gray-600 hover:text-primary-500">Week 5</a>
                                <!-- Add more links for other weeks -->
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
