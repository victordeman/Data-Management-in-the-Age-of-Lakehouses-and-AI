class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-white shadow-md p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-primary-500">Data Management in the Age of Lakehouses and AI</h1>
                    <nav class="flex space-x-4">
                        <a href="#" class="text-gray-600 hover:text-primary-500">Overview</a>
                        <a href="#" class="text-gray-600 hover:text-primary-500">Curriculum</a>
                        <a href="#" class="text-gray-600 hover:text-primary-500">Capstone</a>
                        <a href="#" class="text-gray-600 hover:text-primary-500">Contact</a>
                    </nav>
                </div>
            </header>
        `;
    }
}
customElements.define('custom-header', CustomHeader);
